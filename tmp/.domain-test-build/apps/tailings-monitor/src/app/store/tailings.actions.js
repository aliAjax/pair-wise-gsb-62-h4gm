"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailingsActions = void 0;
const store_1 = require("@ngrx/store");
exports.TailingsActions = (0, store_1.createActionGroup)({
    source: 'Tailings',
    events: {
        'Load Dataset': (0, store_1.emptyProps)(),
        'Load Dataset Success': (0, store_1.props)(),
        'Load Dataset Failure': (0, store_1.props)(),
        'Hydrate From Storage': (0, store_1.props)(),
        'Submit Field Review': (0, store_1.props)(),
        'Add Expert Opinion': (0, store_1.props)(),
        'Save Disposition Plan': (0, store_1.props)(),
        'Approve Plan': (0, store_1.props)(),
        'Close Anomaly': (0, store_1.props)(),
        'Create Emergency Link': (0, store_1.props)(),
        'Select Anomaly': (0, store_1.props)(),
        'Update Keyword': (0, store_1.props)(),
        'Update Status': (0, store_1.props)(),
        'Add Audit': (0, store_1.props)(),
        // 离线巡检批次（可恢复提交）
        'Set Online': (0, store_1.props)(),
        'Create Offline Batch': (0, store_1.props)(),
        'Add Remeasure Draft': (0, store_1.props)(),
        'Add Evidence Draft': (0, store_1.props)(),
        'Submit Batch When Online': (0, store_1.props)(),
        'Evidence Upload Attempt': (0, store_1.props)(),
        'Finish Batch Reconcile': (0, store_1.props)(),
        'Retry Failed Evidence': (0, store_1.props)(),
        'Resume Pending Batches': (0, store_1.emptyProps)(),
        // 断网期间中心侧事件（演示对账条件）
        'Center Revise Reading': (0, store_1.props)(),
        'Center Publish Threshold': (0, store_1.props)(),
        'Reset Demo': (0, store_1.emptyProps)()
    }
});
