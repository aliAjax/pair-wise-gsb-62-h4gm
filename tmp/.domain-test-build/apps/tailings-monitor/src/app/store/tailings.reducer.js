"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEY = exports.readPersistedDataset = exports.persistenceMetaReducer = exports.tailingsReducer = exports.initialTailingsState = exports.ids = void 0;
const store_1 = require("@ngrx/store");
const domain_1 = require("../domain");
const seed_1 = require("../data/seed");
const tailings_actions_1 = require("./tailings.actions");
const STORAGE_KEY = 'tailings-monitor-dataset-v2';
exports.STORAGE_KEY = STORAGE_KEY;
let idSeed = 50;
const audit = (entityId, action, operator, detail) => ({
    id: `AUD-${Date.now()}-${idSeed++}`, entityId, action, operator, detail, createdAt: new Date().toISOString()
});
exports.ids = (0, domain_1.createIdFactory)(100);
exports.initialTailingsState = {
    dataset: structuredClone(seed_1.seedDataset),
    loading: false,
    error: '',
    online: true,
    syncMessage: '',
    selectedAnomalyId: seed_1.seedDataset.anomalies[0]?.id ?? '',
    keyword: '',
    status: '全部'
};
exports.tailingsReducer = (0, store_1.createReducer)(exports.initialTailingsState, (0, store_1.on)(tailings_actions_1.TailingsActions.loadDataset, (state) => ({ ...state, loading: true, error: '' })), (0, store_1.on)(tailings_actions_1.TailingsActions.loadDatasetSuccess, (state, { dataset }) => ({ ...state, dataset, loading: false, selectedAnomalyId: dataset.anomalies[0]?.id ?? '' })), (0, store_1.on)(tailings_actions_1.TailingsActions.loadDatasetFailure, (state, { error }) => ({ ...state, loading: false, error })), (0, store_1.on)(tailings_actions_1.TailingsActions.hydrateFromStorage, (state, { dataset }) => ({
    ...state,
    dataset,
    selectedAnomalyId: dataset.anomalies.some((item) => item.id === state.selectedAnomalyId) ? state.selectedAnomalyId : dataset.anomalies[0]?.id ?? ''
})), (0, store_1.on)(tailings_actions_1.TailingsActions.setOnline, (state, { online }) => ({ ...state, online, syncMessage: online ? '网络已恢复，可继续上传与对账' : '山谷现场断网，复测与证据先离线留存' })), 
// —— 既有处置流程 ——
(0, store_1.on)(tailings_actions_1.TailingsActions.submitFieldReview, (state, { anomalyId, review }) => {
    const dataset = structuredClone(state.dataset);
    const anomaly = dataset.anomalies.find((item) => item.id === anomalyId);
    if (!anomaly || !review.observed || !review.evidence || !review.reassessment)
        return state;
    anomaly.fieldReviews.unshift({ ...review, version: anomaly.fieldReviews.length + 1 });
    anomaly.status = '原因调查中';
    anomaly.version += 1;
    dataset.audit.unshift(audit(anomalyId, '提交现场复核', review.inspector, review.reassessment));
    return { ...state, dataset };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.addExpertOpinion, (state, { anomalyId, opinion }) => {
    const dataset = structuredClone(state.dataset);
    const anomaly = dataset.anomalies.find((item) => item.id === anomalyId);
    if (!anomaly || !opinion.content)
        return state;
    anomaly.opinions.unshift(opinion);
    anomaly.version += 1;
    dataset.audit.unshift(audit(anomalyId, '补充专业意见', opinion.specialist, `${opinion.conclusion}：${opinion.content}`));
    return { ...state, dataset };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.saveDispositionPlan, (state, { anomalyId, plan }) => {
    const dataset = structuredClone(state.dataset);
    const anomaly = dataset.anomalies.find((item) => item.id === anomalyId);
    if (!anomaly || !plan.owner || !plan.deadline || !plan.conditions)
        return state;
    anomaly.plan = { ...plan, approvedBy: '', approvedAt: '' };
    anomaly.status = '待负责人审批';
    anomaly.version += 1;
    dataset.audit.unshift(audit(anomalyId, '提交处置方案', '当前用户', `${plan.action}，责任方${plan.owner}`));
    return { ...state, dataset };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.approvePlan, (state, { anomalyId, approver, note }) => {
    const dataset = structuredClone(state.dataset);
    const anomaly = dataset.anomalies.find((item) => item.id === anomalyId);
    if (!anomaly)
        return state;
    if (anomaly.severity === '重大' && !anomaly.plan.emergencyLinked)
        return state;
    anomaly.plan.approvedBy = approver;
    anomaly.plan.approvedAt = new Date().toISOString();
    anomaly.version += 1;
    dataset.audit.unshift(audit(anomalyId, '审批处置方案', approver, note || '同意执行'));
    return { ...state, dataset };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.closeAnomaly, (state, { anomalyId, note }) => {
    const dataset = structuredClone(state.dataset);
    const anomaly = dataset.anomalies.find((item) => item.id === anomalyId);
    if (!anomaly || !anomaly.plan.approvedBy || !anomaly.fieldReviews.length || !note.trim())
        return state;
    anomaly.status = '已关闭';
    anomaly.closedAt = new Date().toISOString();
    anomaly.recalcState = '';
    anomaly.version += 1;
    dataset.audit.unshift(audit(anomalyId, '关闭异常', anomaly.plan.approvedBy, note));
    return { ...state, dataset };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.createEmergencyLink, (state, { anomalyId, note }) => {
    const dataset = structuredClone(state.dataset);
    const anomaly = dataset.anomalies.find((item) => item.id === anomalyId);
    if (!anomaly)
        return state;
    anomaly.plan.emergencyLinked = true;
    anomaly.status = '应急联动';
    anomaly.version += 1;
    dataset.audit.unshift(audit(anomalyId, '启动应急联动', '值班负责人', note));
    return { ...state, dataset };
}), 
// —— 离线巡检批次（纯领域引擎驱动，可恢复、可重放） ——
(0, store_1.on)(tailings_actions_1.TailingsActions.createOfflineBatch, (state, { inspector, zone }) => {
    const { dataset, batch } = (0, domain_1.createOfflineBatch)(state.dataset, inspector, zone, domain_1.nowIso, exports.ids);
    return { ...state, dataset, syncMessage: `已建立离线批次 ${batch.id}（${zone}），复测与证据离线留存` };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.addRemeasureDraft, (state, { batchId, draft }) => {
    const dataset = (0, domain_1.addRemeasure)(state.dataset, batchId, { pointId: draft.pointId, baseReadingId: draft.baseReadingId, value: draft.value, note: draft.note }, domain_1.nowIso, exports.ids);
    return dataset === state.dataset ? state : { ...state, dataset };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.addEvidenceDraft, (state, { batchId, draft }) => {
    const dataset = (0, domain_1.addEvidence)(state.dataset, batchId, { kind: draft.kind, name: draft.name, note: draft.note }, domain_1.nowIso, exports.ids);
    return dataset === state.dataset ? state : { ...state, dataset };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.submitBatchWhenOnline, (state, { batchId }) => {
    const batch = state.dataset.offlineBatches.find((item) => item.id === batchId);
    if (!batch)
        return state;
    if (!state.online)
        return { ...state, syncMessage: '仍处于断网状态，批次保持离线留存，网络恢复后自动继续' };
    if (batch.status !== '离线编辑中')
        return state;
    const dataset = (0, domain_1.markBatchSyncing)(state.dataset, batchId);
    return { ...state, dataset, syncMessage: `批次 ${batchId} 开始恢复现场证据并上传…` };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.evidenceUploadAttempt, (state, { batchId, evidenceId, success, failReason }) => {
    const dataset = (0, domain_1.applyEvidenceUploadResult)(state.dataset, batchId, evidenceId, success, failReason, domain_1.nowIso, exports.ids);
    const batch = dataset.offlineBatches.find((item) => item.id === batchId);
    const failed = batch?.evidence.filter((item) => item.uploadState === '上传失败').length ?? 0;
    const done = batch?.evidence.filter((item) => item.uploadState === '已上传').length ?? 0;
    const total = batch?.evidence.length ?? 0;
    const syncMessage = success
        ? `证据上传成功（${done}/${total}）`
        : `第 ${batch?.evidence.find((item) => item.id === evidenceId)?.attempts ?? 1} 次上传失败：${failReason}；现场证据已保留，可继续重试`;
    return { ...state, dataset, syncMessage: failed ? `${syncMessage}，待重试 ${failed} 项` : syncMessage };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.finishBatchReconcile, (state, { batchId }) => {
    const dataset = (0, domain_1.reconcileBatch)(state.dataset, batchId, domain_1.nowIso, exports.ids);
    if (dataset === state.dataset)
        return state;
    const batch = dataset.offlineBatches.find((item) => item.id === batchId);
    return { ...state, dataset, syncMessage: `批次 ${batchId} 对账完成：${batch?.report?.note ?? ''}` };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.retryFailedEvidence, (state, { batchId }) => {
    if (!state.online)
        return { ...state, syncMessage: '断网未恢复，等待网络后自动重试' };
    return { ...state, syncMessage: `继续重试批次 ${batchId} 中上传失败的现场证据…` };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.resumePendingBatches, (state) => {
    const pending = state.dataset.offlineBatches.filter((batch) => batch.status === '证据上传中' && batch.evidence.some((item) => item.uploadState !== '已上传'));
    return pending.length ? { ...state, syncMessage: `恢复 ${pending.length} 个未完成批次，继续上传现场证据` } : state;
}), 
// —— 断网期间中心侧动作 ——
(0, store_1.on)(tailings_actions_1.TailingsActions.centerReviseReading, (state, { baseReadingId, value }) => {
    const dataset = (0, domain_1.reviseCenterReading)(state.dataset, baseReadingId, value, '中心值班员', domain_1.nowIso, exports.ids);
    return dataset === state.dataset ? state : { ...state, dataset, syncMessage: `中心已将 ${baseReadingId} 正式读数修订为 ${value}` };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.centerPublishThreshold, (state, { thresholdId, warning, alarm }) => {
    const dataset = (0, domain_1.publishThreshold)(state.dataset, thresholdId, { warning, alarm }, '阈值管理员', domain_1.nowIso, exports.ids);
    const threshold = dataset.thresholds.find((item) => item.id === thresholdId);
    return dataset === state.dataset ? state : { ...state, dataset, syncMessage: `中心发布 ${thresholdId} V${threshold?.version}，相关异常将在下批对账时失效重算` };
}), (0, store_1.on)(tailings_actions_1.TailingsActions.selectAnomaly, (state, { anomalyId }) => ({ ...state, selectedAnomalyId: anomalyId })), (0, store_1.on)(tailings_actions_1.TailingsActions.updateKeyword, (state, { keyword }) => ({ ...state, keyword })), (0, store_1.on)(tailings_actions_1.TailingsActions.updateStatus, (state, { status }) => ({ ...state, status: status })), (0, store_1.on)(tailings_actions_1.TailingsActions.addAudit, (state, { entry }) => ({ ...state, dataset: { ...state.dataset, audit: [entry, ...state.dataset.audit] } })), (0, store_1.on)(tailings_actions_1.TailingsActions.resetDemo, () => ({ ...exports.initialTailingsState, dataset: structuredClone(seed_1.seedDataset), selectedAnomalyId: seed_1.seedDataset.anomalies[0].id, syncMessage: '已恢复演示数据' })));
/** 可恢复：除加载中外，每次提交都把数据集写入本地，刷新/崩溃后继续。 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistenceMetaReducer = (reducer) => {
    return (state, action) => {
        const nextState = reducer(state, action);
        const dataset = nextState.tailings?.dataset;
        if (typeof localStorage !== 'undefined' && dataset) {
            try {
                if (action.type === tailings_actions_1.TailingsActions.resetDemo.type) {
                    localStorage.removeItem(STORAGE_KEY);
                }
                else if (action.type !== tailings_actions_1.TailingsActions.hydrateFromStorage.type && action.type !== tailings_actions_1.TailingsActions.loadDataset.type) {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataset));
                }
            }
            catch {
                // 存储不可用时退化为内存态，不影响对账逻辑
            }
        }
        return nextState;
    };
};
exports.persistenceMetaReducer = persistenceMetaReducer;
const readPersistedDataset = () => {
    if (typeof localStorage === 'undefined')
        return null;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    }
    catch {
        return null;
    }
};
exports.readPersistedDataset = readPersistedDataset;
