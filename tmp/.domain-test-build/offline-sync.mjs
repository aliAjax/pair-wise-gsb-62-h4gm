// tmp/domain-tests/offline-sync.test.ts
import assert from "node:assert/strict";

// apps/tailings-monitor/src/app/data/seed.ts
var seedDataset = {
  points: [
    { id: "P-D01", name: "\u4E3B\u575D\u9876\u90E8\u4F4D\u79FB\u70B9 D01", zone: "\u4E3B\u575D", type: "\u4F4D\u79FB", longitude: 112.832, latitude: 40.116, status: "\u5F02\u5E38", currentValue: 18.7, unit: "mm", thresholdId: "T-D", lastInspectionAt: "2026-09-29T08:20:00" },
    { id: "P-D02", name: "\u4E3B\u575D\u4E0B\u6E38\u4F4D\u79FB\u70B9 D02", zone: "\u4E3B\u575D", type: "\u4F4D\u79FB", longitude: 112.837, latitude: 40.111, status: "\u6B63\u5E38", currentValue: 9.4, unit: "mm", thresholdId: "T-D", lastInspectionAt: "2026-09-29T08:10:00" },
    { id: "P-W01", name: "\u5E93\u5185\u6C34\u4F4D\u8BA1 W01", zone: "\u5E93\u533A", type: "\u6C34\u4F4D", longitude: 112.846, latitude: 40.121, status: "\u9884\u8B66", currentValue: 873.4, unit: "m", thresholdId: "T-W", lastInspectionAt: "2026-09-29T07:55:00" },
    { id: "P-S01", name: "\u4E3B\u575D\u6E17\u6D41\u8BA1 S01", zone: "\u4E3B\u575D", type: "\u6E17\u6D41", longitude: 112.827, latitude: 40.106, status: "\u6B63\u5E38", currentValue: 1.8, unit: "L/s", thresholdId: "T-S", lastInspectionAt: "2026-09-29T07:40:00" },
    { id: "P-R01", name: "\u5E93\u533A\u96E8\u91CF\u7AD9 R01", zone: "\u5E93\u533A", type: "\u964D\u96E8", longitude: 112.861, latitude: 40.132, status: "\u6B63\u5E38", currentValue: 24.6, unit: "mm/h", thresholdId: "T-R", lastInspectionAt: "2026-09-29T08:00:00" }
  ],
  thresholds: [
    { id: "T-D", type: "\u4F4D\u79FB", warning: 10, alarm: 16, changeRate: 3, unit: "mm/d", enabled: true, version: 4, updatedAt: "2026-09-25T09:00:00" },
    { id: "T-W", type: "\u6C34\u4F4D", warning: 871, alarm: 873, changeRate: 0.5, unit: "m/h", enabled: true, version: 3, updatedAt: "2026-09-24T09:00:00" },
    { id: "T-S", type: "\u6E17\u6D41", warning: 2.2, alarm: 3, changeRate: 0.4, unit: "L/s", enabled: true, version: 5, updatedAt: "2026-09-26T09:00:00" },
    { id: "T-R", type: "\u964D\u96E8", warning: 30, alarm: 50, changeRate: 10, unit: "mm/h", enabled: true, version: 2, updatedAt: "2026-09-23T09:00:00" }
  ],
  readings: [
    { id: "RD-1", pointId: "P-D01", value: 18.7, unit: "mm", capturedAt: "2026-09-29T08:20:00", deviceId: "GNSS-D01", quality: "\u6709\u6548", origin: "\u8BBE\u5907\u539F\u59CB" },
    { id: "RD-2", pointId: "P-D01", value: 16.2, unit: "mm", capturedAt: "2026-09-29T07:20:00", deviceId: "GNSS-D01", quality: "\u6709\u6548", origin: "\u8BBE\u5907\u539F\u59CB" },
    { id: "RD-3", pointId: "P-D01", value: 13.8, unit: "mm", capturedAt: "2026-09-29T06:20:00", deviceId: "GNSS-D01", quality: "\u6709\u6548", origin: "\u8BBE\u5907\u539F\u59CB" },
    { id: "RD-4", pointId: "P-W01", value: 873.4, unit: "m", capturedAt: "2026-09-29T07:55:00", deviceId: "WL-W01", quality: "\u6709\u6548", origin: "\u8BBE\u5907\u539F\u59CB" },
    { id: "RD-5", pointId: "P-D02", value: 9.4, unit: "mm", capturedAt: "2026-09-29T08:10:00", deviceId: "GNSS-D02", quality: "\u6709\u6548", origin: "\u8BBE\u5907\u539F\u59CB" }
  ],
  anomalies: [
    {
      id: "AN-260929-01",
      pointId: "P-D01",
      title: "\u4E3B\u575DD01\u7D2F\u8BA1\u4F4D\u79FB\u8D85\u8FC7\u62A5\u8B66\u9608\u503C",
      severity: "\u91CD\u5927",
      status: "\u5F85\u8D1F\u8D23\u4EBA\u5BA1\u6279",
      openedAt: "2026-09-29T08:25:00",
      owner: "\u575D\u4F53\u5B89\u5168\u7EC4",
      triggerReadingId: "RD-1",
      observedValue: "18.7 mm\uFF0C\u6628\u65E5\u53D8\u53164.2 mm/d",
      version: 7,
      closedAt: "",
      thresholdVersion: "T-D V4",
      recalcState: "",
      recalcNote: "",
      recalcCount: 0,
      fieldReviews: [{ id: "FR-1", inspector: "\u5B8B\u7ACB", arrivedAt: "2026-09-29T09:10:00", observed: "\u575D\u9876\u6392\u6C34\u6C9F\u672A\u89C1\u660E\u663E\u5F00\u88C2\uFF0CD01\u9644\u8FD1\u65E0\u65B0\u589E\u88C2\u7F1D\uFF0C\u57FA\u51C6\u70B9\u7A33\u5B9A\u3002", evidence: "D01\u8FD1\u666F\u7167\u7247\u3001\u57FA\u51C6\u70B9\u590D\u6838\u8BB0\u5F55\u3001GNSS\u539F\u59CB\u89C2\u6D4B\u6587\u4EF6", reassessment: "\u8BFB\u6570\u6709\u6548\uFF0C\u4F4D\u79FB\u8D8B\u52BF\u4ECD\u4E0A\u5347\uFF0C\u5EFA\u8BAE\u7ACB\u5373\u964D\u4F4E\u5E93\u6C34\u4F4D\u5E76\u52A0\u5BC6\u76D1\u6D4B\u3002", version: 2 }],
      opinions: [
        { id: "OP-1", specialist: "\u5468\u5CA9", discipline: "\u5CA9\u571F", content: "\u8FD1\u4E09\u65E5\u4F4D\u79FB\u901F\u7387\u6301\u7EED\u9AD8\u4E8E\u9608\u503C\uFF0C\u9700\u7ED3\u5408\u5B54\u9699\u6C34\u538B\u529B\u5206\u6790\u6F5C\u5728\u6ED1\u9762\u3002", conclusion: "\u652F\u6301\u7ED3\u8BBA", createdAt: "2026-09-29T10:20:00" },
        { id: "OP-2", specialist: "\u8BB8\u6D01", discipline: "\u6C34\u6587", content: "\u5E93\u6C34\u4F4D\u4ECD\u63A5\u8FD1\u8B66\u6212\u7EBF\uFF0C\u5EFA\u8BAE\u4F18\u5148\u964D\u4F4E\u5E93\u6C34\u4F4D\u5E76\u6838\u5BF9\u4E0A\u6E38\u6765\u6C34\u3002", conclusion: "\u8865\u5145\u8BC1\u636E", createdAt: "2026-09-29T10:45:00" }
      ],
      plan: { id: "PL-1", action: "\u964D\u4F4E\u5E93\u6C34\u4F4D", owner: "\u5E93\u533A\u8C03\u5EA6\u73ED", deadline: "2026-09-29T18:00:00", conditions: "\u6BCF2\u5C0F\u65F6\u590D\u6D4BD01\u3001D02\u548CW01\uFF1B\u4F4D\u79FB\u901F\u7387\u6062\u590D\u81F33mm/d\u4EE5\u4E0B\u5E76\u7A33\u5B9A12\u5C0F\u65F6\u540E\uFF0C\u8D1F\u8D23\u4EBA\u53EF\u5173\u95ED\u5F02\u5E38\u3002", emergencyLinked: true, approvedBy: "", approvedAt: "" }
    },
    {
      id: "AN-260929-02",
      pointId: "P-W01",
      title: "\u5E93\u6C34\u4F4D\u77ED\u65F6\u4E0A\u5347\u901F\u7387\u8D85\u9884\u8B66\u503C",
      severity: "\u8F83\u9AD8",
      status: "\u539F\u56E0\u8C03\u67E5\u4E2D",
      openedAt: "2026-09-29T08:00:00",
      owner: "\u5E93\u533A\u8C03\u5EA6\u73ED",
      triggerReadingId: "RD-4",
      observedValue: "873.4 m\uFF0C1\u5C0F\u65F6\u4E0A\u53470.6 m",
      version: 4,
      closedAt: "",
      thresholdVersion: "T-W V3",
      recalcState: "",
      recalcNote: "",
      recalcCount: 0,
      fieldReviews: [],
      opinions: [{ id: "OP-3", specialist: "\u8BB8\u6D01", discipline: "\u6C34\u6587", content: "\u4E0A\u6E38\u964D\u96E8\u6C47\u6D41\u5BFC\u81F4\u5165\u6E56\u91CF\u589E\u52A0\uFF0C\u9700\u6838\u5B9E\u6CC4\u6D2A\u95F8\u72B6\u6001\u3002", conclusion: "\u652F\u6301\u7ED3\u8BBA", createdAt: "2026-09-29T09:00:00" }],
      plan: { id: "PL-2", action: "\u52A0\u5BC6\u76D1\u6D4B", owner: "\u5E93\u533A\u8C03\u5EA6\u73ED", deadline: "2026-09-29T14:00:00", conditions: "\u6BCF\u5C0F\u65F6\u8BB0\u5F55\u6C34\u4F4D\u4E0E\u5165\u5E93\u6D41\u91CF\uFF0C\u8FBE\u5230874.0m\u65F6\u542F\u52A8\u5E94\u6025\u8054\u52A8\u3002", emergencyLinked: false, approvedBy: "", approvedAt: "" }
    },
    {
      // 已按 V4 阈值关闭的历史异常：阈值版本变化后若仍超限，应失效重开
      id: "AN-260927-03",
      pointId: "P-D02",
      title: "\u4E3B\u575DD02\u4F4D\u79FB\u9636\u6BB5\u6027\u9884\u8B66\u590D\u6838\u5173\u95ED",
      severity: "\u5173\u6CE8",
      status: "\u5DF2\u5173\u95ED",
      openedAt: "2026-09-27T09:30:00",
      owner: "\u575D\u4F53\u5B89\u5168\u7EC4",
      triggerReadingId: "RD-5",
      observedValue: "9.4 mm\uFF0C\u901F\u7387\u56DE\u843D",
      version: 5,
      closedAt: "2026-09-28T17:00:00",
      thresholdVersion: "T-D V4",
      recalcState: "",
      recalcNote: "",
      recalcCount: 0,
      fieldReviews: [{ id: "FR-2", inspector: "\u5B8B\u7ACB", arrivedAt: "2026-09-27T10:00:00", observed: "D02\u5468\u8FB9\u65E0\u5F02\u5E38\u8FF9\u8C61\uFF0C\u4F4D\u79FB\u901F\u7387\u56DE\u843D\u3002", evidence: "D02\u5DE1\u68C0\u7167\u7247", reassessment: "\u8D8B\u52BF\u7A33\u5B9A\uFF0C\u6EE1\u8DB3\u5173\u95ED\u6761\u4EF6\u3002", version: 1 }],
      opinions: [],
      plan: { id: "PL-3", action: "\u52A0\u5BC6\u76D1\u6D4B", owner: "\u575D\u4F53\u5B89\u5168\u7EC4", deadline: "2026-09-28T17:00:00", conditions: "\u8FDE\u7EED\u4E24\u6B21\u590D\u6D4B\u4F4E\u4E8E\u9884\u8B66\u503C\u540E\u5173\u95ED\u3002", emergencyLinked: false, approvedBy: "\u4F55\u6E05", approvedAt: "2026-09-28T09:00:00" }
    }
  ],
  audit: [
    { id: "A-1", entityId: "P-D01", action: "\u751F\u6210\u5F02\u5E38", operator: "\u9608\u503C\u5F15\u64CE", detail: "\u7D2F\u8BA1\u4F4D\u79FB18.7mm\u8D85\u8FC7\u62A5\u8B66\u9608\u503C16mm", createdAt: "2026-09-29T08:25:00" },
    { id: "A-2", entityId: "AN-260929-01", action: "\u63D0\u4EA4\u73B0\u573A\u590D\u6838", operator: "\u5B8B\u7ACB", detail: "\u539F\u59CB\u8BFB\u6570\u6709\u6548\uFF0C\u4F4D\u79FB\u8D8B\u52BF\u4ECD\u4E0A\u5347", createdAt: "2026-09-29T09:25:00" },
    { id: "A-3", entityId: "AN-260929-01", action: "\u8865\u5145\u4E13\u4E1A\u610F\u89C1", operator: "\u5468\u5CA9", detail: "\u5EFA\u8BAE\u7ED3\u5408\u5B54\u9699\u6C34\u538B\u529B\u5206\u6790\u6F5C\u5728\u6ED1\u9762", createdAt: "2026-09-29T10:20:00" }
  ],
  offlineBatches: [],
  conflicts: []
};

// apps/tailings-monitor/src/app/domain/models.ts
var nowIso = () => (/* @__PURE__ */ new Date()).toISOString();

// apps/tailings-monitor/src/app/domain/offline-sync.ts
var createIdFactory = (seedStart = 100) => {
  let seed = seedStart;
  return { next: (prefix) => `${prefix}-${seed++}` };
};
var audit = (entry, log) => {
  if (entry.idemKey && log.some((item) => item.idemKey === entry.idemKey)) return;
  log.unshift(entry);
};
var snapshotThresholds = (thresholds) => thresholds.map((item) => ({ thresholdId: item.id, version: item.version }));
var createOfflineBatch = (dataset, inspector, zone, clock2 = nowIso, ids2 = createIdFactory()) => {
  const next = structuredClone(dataset);
  const at = clock2();
  const batch = {
    id: ids2.next("OB"),
    inspector: inspector || "\u73B0\u573A\u5DE1\u68C0\u5458",
    zone: zone || "\u5C71\u8C37\u73B0\u573A",
    createdAt: at,
    offlineSince: at,
    status: "\u79BB\u7EBF\u7F16\u8F91\u4E2D",
    remeasures: [],
    evidence: [],
    thresholdSnapshot: snapshotThresholds(next.thresholds),
    report: null
  };
  next.offlineBatches.unshift(batch);
  audit(
    { id: ids2.next("AUD"), entityId: batch.id, action: "\u5EFA\u7ACB\u79BB\u7EBF\u5DE1\u68C0\u6279\u6B21", operator: batch.inspector, detail: `${batch.zone}\u65AD\u7F51\u767B\u8BB0\uFF0C\u9608\u503C\u5FEB\u7167 ${batch.thresholdSnapshot.map((s) => `${s.thresholdId} V${s.version}`).join("\u3001")}`, createdAt: at, idemKey: `batch-create:${batch.id}`, batchId: batch.id },
    next.audit
  );
  return { dataset: next, batch };
};
var getBatch = (dataset, batchId) => dataset.offlineBatches.find((item) => item.id === batchId);
var addRemeasure = (dataset, batchId, input, clock2 = nowIso, ids2 = createIdFactory()) => {
  const next = structuredClone(dataset);
  const batch = getBatch(next, batchId);
  const base = next.readings.find((item) => item.id === input.baseReadingId && item.pointId === input.pointId);
  if (!batch || batch.status !== "\u79BB\u7EBF\u7F16\u8F91\u4E2D" || !base || Number.isNaN(input.value)) return dataset;
  const at = input.measuredAt ?? clock2();
  const remeasure = {
    id: ids2.next("RM"),
    pointId: input.pointId,
    baseReadingId: input.baseReadingId,
    value: input.value,
    unit: base.unit,
    measuredAt: at,
    note: input.note ?? "",
    mergedReadingId: ""
  };
  batch.remeasures.push(remeasure);
  audit(
    { id: ids2.next("AUD"), entityId: batch.id, action: "\u79BB\u7EBF\u767B\u8BB0\u590D\u6D4B", operator: batch.inspector, detail: `${input.pointId} \u590D\u6D4B ${input.value} ${base.unit}\uFF08\u5F85\u5BF9\u8D26\uFF09`, createdAt: at, idemKey: `remeasure:${remeasure.id}`, batchId: batch.id },
    next.audit
  );
  return next;
};
var addEvidence = (dataset, batchId, input, clock2 = nowIso, ids2 = createIdFactory()) => {
  const next = structuredClone(dataset);
  const batch = getBatch(next, batchId);
  if (!batch || batch.status !== "\u79BB\u7EBF\u7F16\u8F91\u4E2D" || !input.name) return dataset;
  const evidence = {
    id: ids2.next("EV"),
    kind: input.kind,
    name: input.name,
    note: input.note ?? "",
    capturedAt: clock2(),
    sizeBytes: input.sizeBytes ?? Math.round(800 + input.name.length * 137),
    uploadState: "\u5F85\u4E0A\u4F20",
    uploadedAt: "",
    failReason: "",
    attempts: 0
  };
  batch.evidence.push(evidence);
  audit(
    { id: ids2.next("AUD"), entityId: batch.id, action: "\u79BB\u7EBF\u7559\u5B58\u73B0\u573A\u8BC1\u636E", operator: batch.inspector, detail: `${input.kind}\u300A${input.name}\u300B\u5F85\u7F51\u7EDC\u6062\u590D\u4E0A\u4F20`, createdAt: evidence.capturedAt, idemKey: `evidence-capture:${evidence.id}`, batchId: batch.id },
    next.audit
  );
  return next;
};
var markBatchSyncing = (dataset, batchId) => {
  const next = structuredClone(dataset);
  const batch = getBatch(next, batchId);
  if (!batch || batch.status !== "\u79BB\u7EBF\u7F16\u8F91\u4E2D") return dataset;
  batch.status = "\u8BC1\u636E\u4E0A\u4F20\u4E2D";
  return next;
};
var applyEvidenceUploadResult = (dataset, batchId, evidenceId, success, failReason, clock2 = nowIso, ids2 = createIdFactory()) => {
  const next = structuredClone(dataset);
  const batch = getBatch(next, batchId);
  const evidence = batch?.evidence.find((item) => item.id === evidenceId);
  if (!batch || !evidence) return dataset;
  if (evidence.uploadState === "\u5DF2\u4E0A\u4F20") return next;
  evidence.attempts += 1;
  if (success) {
    evidence.uploadState = "\u5DF2\u4E0A\u4F20";
    evidence.uploadedAt = clock2();
    evidence.failReason = "";
    audit(
      { id: ids2.next("AUD"), entityId: batch.id, action: "\u73B0\u573A\u8BC1\u636E\u4E0A\u4F20", operator: batch.inspector, detail: `${evidence.kind}\u300A${evidence.name}\u300B\u4E0A\u4F20\u6210\u529F\uFF08\u7B2C${evidence.attempts}\u6B21\u5C1D\u8BD5\uFF09`, createdAt: evidence.uploadedAt, idemKey: `evidence-upload:${evidence.id}`, batchId: batch.id },
      next.audit
    );
  } else {
    evidence.uploadState = "\u4E0A\u4F20\u5931\u8D25";
    evidence.failReason = failReason || "\u7F51\u7EDC\u4E2D\u65AD";
  }
  return next;
};
var batchHasPendingEvidence = (batch) => batch.evidence.some((item) => item.uploadState !== "\u5DF2\u4E0A\u4F20");
var publishThreshold = (dataset, thresholdId, patch, operator, clock2 = nowIso, ids2 = createIdFactory()) => {
  const next = structuredClone(dataset);
  const threshold = next.thresholds.find((item) => item.id === thresholdId);
  if (!threshold) return dataset;
  const previous = threshold.version;
  Object.assign(threshold, patch, { version: previous + 1, updatedAt: clock2() });
  audit(
    { id: ids2.next("AUD"), entityId: thresholdId, action: "\u53D1\u5E03\u9608\u503C\u65B0\u7248\u672C", operator, detail: `V${previous} \u2192 V${threshold.version}\uFF0C\u9884\u8B66${threshold.warning} / \u62A5\u8B66${threshold.alarm} ${threshold.unit}`, createdAt: threshold.updatedAt, idemKey: `threshold:${thresholdId}:V${threshold.version}` },
    next.audit
  );
  return next;
};
var reviseCenterReading = (dataset, baseReadingId, value, operator, clock2 = nowIso, ids2 = createIdFactory()) => {
  const next = structuredClone(dataset);
  const base = next.readings.find((item) => item.id === baseReadingId);
  if (!base) return dataset;
  const at = clock2();
  const revision = {
    ...structuredClone(base),
    id: ids2.next("RD"),
    value,
    origin: "\u4E2D\u5FC3\u4FEE\u8BA2",
    baseReadingId: base.id,
    quality: "\u6709\u6548",
    capturedAt: at
  };
  next.readings.unshift(revision);
  audit(
    { id: ids2.next("AUD"), entityId: base.pointId, action: "\u4E2D\u5FC3\u4FEE\u8BA2\u6B63\u5F0F\u8BFB\u6570", operator, detail: `${base.id} \u6B63\u5F0F\u503C\u4FEE\u8BA2\u4E3A ${value} ${base.unit}\uFF0C\u539F\u8BFB\u6570\u4FDD\u7559`, createdAt: at, idemKey: `center-revision:${revision.id}` },
    next.audit
  );
  return next;
};
var officialReadingOf = (readings, pointId, baseReadingId) => {
  const family = readings.filter((item) => item.pointId === pointId && (item.id === baseReadingId || item.baseReadingId === baseReadingId));
  const revisions = family.filter((item) => item.origin === "\u4E2D\u5FC3\u4FEE\u8BA2");
  if (revisions.length) return revisions.reduce((latest, item) => item.capturedAt > latest.capturedAt ? item : latest, revisions[0]);
  return family.find((item) => item.id === baseReadingId) ?? readings.find((item) => item.id === baseReadingId);
};
var latestEffectiveReading = (readings, pointId) => readings.filter((item) => item.pointId === pointId && item.reconcileState !== "\u51B2\u7A81\u5F85\u6838\u5BF9").sort((a, b) => b.capturedAt.localeCompare(a.capturedAt))[0];
var classifyPoint = (threshold, value) => {
  if (!threshold || !threshold.enabled) return "\u6B63\u5E38";
  if (value >= threshold.alarm) return "\u5F02\u5E38";
  if (value >= threshold.warning) return "\u9884\u8B66";
  return "\u6B63\u5E38";
};
var severityOf = (threshold, value) => {
  if (value >= threshold.alarm * 1.1) return "\u91CD\u5927";
  if (value >= threshold.alarm) return "\u8F83\u9AD8";
  return "\u5173\u6CE8";
};
var reconcileBatch = (dataset, batchId, clock2 = nowIso, ids2 = createIdFactory()) => {
  const batch = dataset.offlineBatches.find((item) => item.id === batchId);
  if (!batch) return dataset;
  if (batch.status === "\u5DF2\u5BF9\u8D26" || batch.status === "\u5DF2\u5BF9\u8D26\xB7\u5F85\u6838\u5BF9") return dataset;
  if (batch.status !== "\u8BC1\u636E\u4E0A\u4F20\u4E2D" || batchHasPendingEvidence(batch)) return dataset;
  const next = structuredClone(dataset);
  const target = getBatch(next, batchId);
  const at = clock2();
  const conflicts = next.conflicts;
  let mergedCount = 0;
  let conflictCount = 0;
  for (const remeasure of target.remeasures) {
    const official = officialReadingOf(next.readings, remeasure.pointId, remeasure.baseReadingId);
    const centerChangedAfterOffline = official.origin === "\u4E2D\u5FC3\u4FEE\u8BA2" && official.capturedAt > target.offlineSince;
    const diverged = official.value !== remeasure.value;
    const merged = {
      id: ids2.next("RD"),
      pointId: remeasure.pointId,
      value: remeasure.value,
      unit: remeasure.unit,
      capturedAt: remeasure.measuredAt,
      deviceId: `\u79BB\u7EBF\u590D\u6D4B/${target.inspector}`,
      quality: "\u6709\u6548",
      origin: "\u79BB\u7EBF\u590D\u6D4B",
      batchId: target.id,
      baseReadingId: remeasure.baseReadingId,
      reconcileState: "\u5DF2\u5E76\u5165"
    };
    remeasure.mergedReadingId = merged.id;
    if (centerChangedAfterOffline && diverged) {
      merged.reconcileState = "\u51B2\u7A81\u5F85\u6838\u5BF9";
      const key = `${remeasure.pointId}@${remeasure.baseReadingId}`;
      const existing = conflicts.find((item) => item.readingKey === key && item.batchId === target.id);
      if (!existing) {
        const record = {
          id: ids2.next("CF"),
          pointId: remeasure.pointId,
          baseReadingId: remeasure.baseReadingId,
          readingKey: key,
          officialValue: official.value,
          offlineValue: remeasure.value,
          unit: remeasure.unit,
          centerUpdatedAt: official.capturedAt,
          offlineMeasuredAt: remeasure.measuredAt,
          mergedReadingId: merged.id,
          status: "\u51B2\u7A81\u5F85\u6838\u5BF9",
          batchId: target.id,
          resolvedNote: ""
        };
        conflicts.unshift(record);
        audit(
          { id: ids2.next("AUD"), entityId: record.pointId, action: "\u8BFB\u6570\u51B2\u7A81\u5F85\u6838\u5BF9", operator: "\u5BF9\u8D26\u5F15\u64CE", detail: `\u540C\u6B21\u8BFB\u6570${remeasure.baseReadingId}\uFF1A\u4E2D\u5FC3\u6B63\u5F0F\u503C ${official.value} ${remeasure.unit} \u5DF2\u4FDD\u7559\uFF0C\u8FDF\u5230\u79BB\u7EBF\u526F\u672C ${remeasure.value} ${remeasure.unit} \u5F85\u4EBA\u5DE5\u6838\u5BF9\uFF0C\u6B63\u5F0F\u8BFB\u6570\u672A\u88AB\u8986\u76D6`, createdAt: at, idemKey: `conflict:${record.id}`, batchId: target.id },
          next.audit
        );
      }
      conflictCount += 1;
    } else {
      mergedCount += 1;
      audit(
        { id: ids2.next("AUD"), entityId: remeasure.pointId, action: "\u5E76\u5165\u79BB\u7EBF\u590D\u6D4B", operator: "\u5BF9\u8D26\u5F15\u64CE", detail: `${target.id} \u590D\u6D4B ${remeasure.value} ${remeasure.unit} \u4F5C\u4E3A\u72EC\u7ACB\u7248\u672C\u5E76\u5165\u539F\u59CB\u8BFB\u6570\uFF0C\u539F\u503C\u4FDD\u7559`, createdAt: at, idemKey: `merge:${remeasure.id}`, batchId: target.id },
        next.audit
      );
    }
    next.readings.unshift(merged);
  }
  const recalculatedIds = [];
  const openedIds = [];
  const currentVersions = snapshotThresholds(next.thresholds);
  target.thresholdSnapshot = snapshotThresholds(next.thresholds);
  const changedThresholds = next.thresholds.filter((threshold) => {
    const old = batch.thresholdSnapshot.find((item) => item.thresholdId === threshold.id);
    return old && old.version !== threshold.version;
  });
  for (const threshold of changedThresholds) {
    const pointIds = next.points.filter((point) => point.thresholdId === threshold.id).map((point) => point.id);
    for (const pointId of pointIds) {
      const point = next.points.find((item) => item.id === pointId);
      const latest = latestEffectiveReading(next.readings, pointId);
      const value = latest?.value ?? point.currentValue;
      const exceeds = threshold.enabled && value >= threshold.warning;
      const pointStatus = classifyPoint(threshold, value);
      point.status = pointStatus;
      if (latest && latest.capturedAt > point.lastInspectionAt) {
        point.currentValue = value;
        point.lastInspectionAt = latest.capturedAt;
      }
      const related = next.anomalies.filter((anomaly) => anomaly.pointId === pointId);
      if (related.length === 0 && exceeds && latest) {
        const created = createRecalculatedAnomaly(ids2, pointId, threshold, value, latest.id, at);
        next.anomalies.unshift(created);
        openedIds.push(created.id);
        audit(
          { id: ids2.next("AUD"), entityId: created.id, action: "\u9608\u503C\u91CD\u7B97\u751F\u6210\u5F02\u5E38", operator: "\u9608\u503C\u5F15\u64CE", detail: `\u6309${threshold.id} V${threshold.version}\uFF0C\u6700\u65B0\u503C ${value} ${threshold.unit} \u8FBE\u5230${created.severity}\u7EA7\u522B`, createdAt: at, idemKey: `recalc-create:${created.id}`, batchId: target.id },
          next.audit
        );
        continue;
      }
      for (const anomaly of related) {
        const wasClosed = anomaly.status === "\u5DF2\u5173\u95ED";
        const recalc = evaluateAnomalyUnderThreshold(anomaly, threshold, value, exceeds, at);
        if (recalc.changed) {
          anomaly.status = recalc.status;
          anomaly.closedAt = recalc.closedAt;
          anomaly.recalcState = recalc.state;
          anomaly.recalcNote = recalc.note;
          anomaly.thresholdVersion = `${threshold.id} V${threshold.version}`;
          anomaly.version += 1;
          anomaly.recalcCount += 1;
          recalculatedIds.push(anomaly.id);
          if (wasClosed && anomaly.status !== "\u5DF2\u5173\u95ED") openedIds.push(anomaly.id);
          audit(
            { id: ids2.next("AUD"), entityId: anomaly.id, action: "\u9608\u503C\u7248\u672C\u53D8\u5316\u91CD\u7B97", operator: "\u9608\u503C\u5F15\u64CE", detail: recalc.note, createdAt: at, idemKey: `recalc:${anomaly.id}:${threshold.id}V${threshold.version}`, batchId: target.id },
            next.audit
          );
        }
      }
    }
  }
  for (const remeasure of target.remeasures) {
    const point = next.points.find((item) => item.id === remeasure.pointId);
    if (!point || changedThresholds.some((t) => t.id === point.thresholdId)) continue;
    const latest = latestEffectiveReading(next.readings, point.id);
    if (!latest) continue;
    const threshold = next.thresholds.find((item) => item.id === point.thresholdId);
    point.currentValue = latest.value;
    point.status = classifyPoint(threshold, latest.value);
    point.lastInspectionAt = latest.capturedAt > point.lastInspectionAt ? latest.capturedAt : point.lastInspectionAt;
  }
  target.report = {
    reconciledAt: at,
    remeasureCount: target.remeasures.length,
    evidenceCount: target.evidence.length,
    conflictCount,
    recalculatedAnomalyIds: recalculatedIds,
    openedAnomalyIds: openedIds,
    thresholdVersions: currentVersions,
    note: `\u5E76\u5165\u590D\u6D4B ${mergedCount} \u6761\uFF0C\u51B2\u7A81\u5F85\u6838\u5BF9 ${conflictCount} \u6761\uFF1B\u9608\u503C\u5347\u7EA7 ${changedThresholds.length} \u9879\uFF0C\u91CD\u7B97\u5F02\u5E38 ${recalculatedIds.length} \u4E2A${openedIds.length ? `\uFF0C\u91CD\u5F00 ${openedIds.length} \u4E2A` : ""}`
  };
  target.status = conflictCount > 0 ? "\u5DF2\u5BF9\u8D26\xB7\u5F85\u6838\u5BF9" : "\u5DF2\u5BF9\u8D26";
  audit(
    { id: ids2.next("AUD"), entityId: target.id, action: "\u79BB\u7EBF\u6279\u6B21\u5BF9\u8D26\u5408\u5E76", operator: "\u5BF9\u8D26\u5F15\u64CE", detail: target.report.note, createdAt: at, idemKey: `reconcile:${target.id}`, batchId: target.id },
    next.audit
  );
  return next;
};
var createRecalculatedAnomaly = (ids2, pointId, threshold, value, readingId, at) => ({
  id: ids2.next("AN"),
  pointId,
  title: `${pointId} \u6309\u65B0\u9608\u503C V${threshold.version} \u8D85\u9650`,
  severity: severityOf(threshold, value),
  status: "\u5F85\u73B0\u573A\u590D\u6838",
  openedAt: at,
  owner: "\u9608\u503C\u5F15\u64CE\u91CD\u7B97",
  triggerReadingId: readingId,
  observedValue: `${value} ${threshold.unit}\uFF08\u9608\u503C V${threshold.version}\uFF1A\u9884\u8B66 ${threshold.warning} / \u62A5\u8B66 ${threshold.alarm}\uFF09`,
  fieldReviews: [],
  opinions: [],
  plan: { id: ids2.next("PL"), action: "\u52A0\u5BC6\u76D1\u6D4B", owner: "", deadline: "", conditions: "", emergencyLinked: false, approvedBy: "", approvedAt: "" },
  closedAt: "",
  version: 1,
  thresholdVersion: `${threshold.id} V${threshold.version}`,
  recalcState: "\u6309\u65B0\u9608\u503C\u91CD\u5F00",
  recalcNote: `\u79BB\u7EBF\u5BF9\u8D26\u65F6\u6309 ${threshold.id} V${threshold.version} \u91CD\u7B97\u751F\u6210`,
  recalcCount: 1
});
var evaluateAnomalyUnderThreshold = (anomaly, threshold, value, exceeds, at) => {
  const base = `${threshold.id} V${threshold.version} \u4E0B\u6700\u65B0\u503C ${value} ${threshold.unit}`;
  if (!exceeds) {
    if (anomaly.status === "\u5DF2\u5173\u95ED") {
      return { changed: true, status: "\u5DF2\u5173\u95ED", closedAt: anomaly.closedAt, state: "\u9608\u503C\u5931\u6548\xB7\u5173\u95ED", note: `${base} \u4F4E\u4E8E\u9884\u8B66\u503C ${threshold.warning}\uFF0C\u5F02\u5E38\u6309\u65B0\u9608\u503C\u5931\u6548\uFF08\u4FDD\u6301\u5173\u95ED\uFF09` };
    }
    return { changed: true, status: "\u5DF2\u5173\u95ED", closedAt: at, state: "\u9608\u503C\u5931\u6548\xB7\u5173\u95ED", note: `${base} \u4F4E\u4E8E\u9884\u8B66\u503C ${threshold.warning}\uFF0C\u5F02\u5E38\u5931\u6548\u5E76\u81EA\u52A8\u5173\u95ED` };
  }
  if (value >= threshold.alarm) {
    const note2 = `${base} \u4ECD\u8FBE\u5230/\u8D85\u8FC7\u62A5\u8B66\u503C ${threshold.alarm}\uFF0C\u5F02\u5E38\u5931\u6548\u540E\u6309\u65B0\u9608\u503C\u91CD\u7B97\u91CD\u5F00`;
    return { changed: true, status: "\u91CD\u7B97\u91CD\u5F00", closedAt: "", state: "\u9608\u503C\u5931\u6548\xB7\u91CD\u5F00", note: note2 };
  }
  const note = `${base} \u5904\u4E8E\u9884\u8B66\u533A\u95F4\uFF08${threshold.warning}~${threshold.alarm}\uFF09\uFF0C\u6309\u65B0\u9608\u503C\u964D\u7EA7\u4E3A\u5F85\u73B0\u573A\u590D\u6838`;
  return { changed: true, status: "\u5F85\u73B0\u573A\u590D\u6838", closedAt: "", state: "\u9608\u503C\u5931\u6548\xB7\u91CD\u5F00", note };
};
var batchConsistencyView = (batch) => ({
  batchId: batch.id,
  status: batch.status,
  thresholdText: (batch.report?.thresholdVersions ?? batch.thresholdSnapshot).map((s) => `${s.thresholdId} V${s.version}`).join("\u3001"),
  reportNote: batch.report?.note ?? "\u5C1A\u672A\u5BF9\u8D26",
  evidenceUploaded: batch.evidence.filter((item) => item.uploadState === "\u5DF2\u4E0A\u4F20").length,
  evidenceTotal: batch.evidence.length
});

// tmp/domain-tests/offline-sync.test.ts
var passed = 0;
var check = (name, fn) => {
  fn();
  passed++;
  console.log(`  \u2713 ${name}`);
};
var tick = 0;
var clock = () => `2026-10-06T0${1 + Math.floor(tick++ / 60)}:${String(tick % 60).padStart(2, "0")}:00.000Z`;
var ids = createIdFactory(1);
var buildOfflineBatch = () => {
  const created = createOfflineBatch(structuredClone(seedDataset), "\u5DE1\u68C0\u5458 \u9AD8\u539F", "\u5317\u6C9F\u5C71\u8C37", clock, createIdFactory(1));
  return { dataset: created.dataset, batchId: created.batch.id };
};
console.log("1. \u65AD\u7F51\u767B\u8BB0\u4E0E\u8BC1\u636E\u7559\u5B58");
{
  let { dataset, batchId } = buildOfflineBatch();
  check("\u5EFA\u7ACB\u6279\u6B21\u5373\u51BB\u7ED3\u9608\u503C\u7248\u672C\u5FEB\u7167", () => {
    const batch = dataset.offlineBatches[0];
    assert.equal(batch.thresholdSnapshot.find((s) => s.thresholdId === "T-D")?.version, 4);
    assert.equal(batch.status, "\u79BB\u7EBF\u7F16\u8F91\u4E2D");
    assert.match(dataset.audit[0].detail, /T-D V4/);
  });
  dataset = addRemeasure(dataset, batchId, { pointId: "P-D01", baseReadingId: "RD-1", value: 19.2, note: "\u73B0\u573A\u590D\u6D4B" }, clock, createIdFactory(10));
  dataset = addEvidence(dataset, batchId, { kind: "\u7167\u7247", name: "D01\u88C2\u7F1D\u8FD1\u7167.jpg", note: "\u575D\u9876" }, clock, createIdFactory(20));
  check("\u590D\u6D4B\u4E0E\u8BC1\u636E\u79BB\u7EBF\u6302\u5230\u6279\u6B21\uFF0C\u4E0D\u6539\u52A8\u539F\u59CB\u8BFB\u6570", () => {
    const batch = dataset.offlineBatches[0];
    assert.equal(batch.remeasures.length, 1);
    assert.equal(batch.evidence.length, 1);
    assert.equal(batch.evidence[0].uploadState, "\u5F85\u4E0A\u4F20");
    const rd1 = dataset.readings.find((r) => r.id === "RD-1");
    assert.equal(rd1?.value, 18.7);
    assert.equal(dataset.readings.filter((r) => r.origin === "\u79BB\u7EBF\u590D\u6D4B").length, 0);
  });
}
console.log("2. \u4E24\u7AEF\u5206\u522B\u4FEE\u6539\u540C\u6B21\u8BFB\u6570\uFF1A\u4E2D\u5FC3\u6B63\u5F0F\u503C\u4E0D\u88AB\u8986\u76D6");
{
  let { dataset, batchId } = buildOfflineBatch();
  dataset = addRemeasure(dataset, batchId, { pointId: "P-D01", baseReadingId: "RD-1", value: 19.2 }, clock, createIdFactory(10));
  dataset = addEvidence(dataset, batchId, { kind: "\u7167\u7247", name: "d01.jpg" }, clock, createIdFactory(20));
  dataset = reviseCenterReading(dataset, "RD-1", 17.9, "\u4E2D\u5FC3\u503C\u73ED\u5458", clock, createIdFactory(30));
  dataset = markBatchSyncing(dataset, batchId);
  const evidenceId = dataset.offlineBatches[0].evidence[0].id;
  dataset = applyEvidenceUploadResult(dataset, batchId, evidenceId, true, "", clock, createIdFactory(40));
  const before = structuredClone(dataset);
  dataset = reconcileBatch(dataset, batchId, clock, createIdFactory(50));
  check("\u79BB\u7EBF\u526F\u672C\u5E76\u5165\u4F46\u6807\u8BB0\u51B2\u7A81\u5F85\u6838\u5BF9\uFF0C\u4E2D\u5FC3\u6B63\u5F0F\u503C\u4ECD\u751F\u6548", () => {
    const latest = latestEffectiveReading(dataset.readings, "P-D01");
    assert.equal(latest?.value, 17.9);
    assert.equal(latest?.origin, "\u4E2D\u5FC3\u4FEE\u8BA2");
    const offlineCopy = dataset.readings.find((r) => r.origin === "\u79BB\u7EBF\u590D\u6D4B");
    assert.equal(offlineCopy?.value, 19.2);
    assert.equal(offlineCopy?.reconcileState, "\u51B2\u7A81\u5F85\u6838\u5BF9");
    assert.equal(offlineCopy?.baseReadingId, "RD-1");
  });
  check("\u51B2\u7A81\u8BB0\u5F55\u53EA\u4FDD\u7559\u53CC\u65B9\u503C\uFF0C\u6279\u6B21\u8FDB\u5165\u201C\u5DF2\u5BF9\u8D26\xB7\u5F85\u6838\u5BF9\u201D", () => {
    assert.equal(dataset.conflicts.length, 1);
    const conflict = dataset.conflicts[0];
    assert.equal(conflict.officialValue, 17.9);
    assert.equal(conflict.offlineValue, 19.2);
    assert.equal(conflict.status, "\u51B2\u7A81\u5F85\u6838\u5BF9");
    assert.equal(dataset.offlineBatches[0].status, "\u5DF2\u5BF9\u8D26\xB7\u5F85\u6838\u5BF9");
  });
  check("\u539F\u8BFB\u6570RD-1\u548C\u4E2D\u5FC3\u4FEE\u8BA2\u7248\u672C\u5747\u88AB\u4FDD\u7559", () => {
    assert.equal(dataset.readings.find((r) => r.id === "RD-1")?.value, 18.7);
    assert.ok(dataset.readings.some((r) => r.origin === "\u4E2D\u5FC3\u4FEE\u8BA2" && r.value === 17.9));
  });
  check("\u91CD\u653E\u5BF9\u8D26\u662F\u5E42\u7B49 no-op\uFF0C\u72B6\u6001\u4E0E\u5BA1\u8BA1\u4E0D\u53D8\u5316", () => {
    const auditCount = dataset.audit.length;
    const replayed = reconcileBatch(dataset, batchId, clock, createIdFactory(999));
    assert.equal(replayed, dataset);
    assert.equal(dataset.audit.length, auditCount);
  });
}
console.log("3. \u65E0\u51B2\u7A81\u65F6\u79BB\u7EBF\u590D\u6D4B\u6B63\u5E38\u5E76\u5165");
{
  let { dataset, batchId } = buildOfflineBatch();
  dataset = addRemeasure(dataset, batchId, { pointId: "P-D02", baseReadingId: "RD-5", value: 9.8 }, clock, createIdFactory(10));
  dataset = addEvidence(dataset, batchId, { kind: "\u6587\u6863", name: "d02-note.pdf" }, clock, createIdFactory(20));
  dataset = markBatchSyncing(dataset, batchId);
  const evidenceId = dataset.offlineBatches[0].evidence[0].id;
  dataset = applyEvidenceUploadResult(dataset, batchId, evidenceId, true, "", clock, createIdFactory(40));
  dataset = reconcileBatch(dataset, batchId, clock, createIdFactory(50));
  check("\u590D\u6D4B\u4F5C\u4E3A\u72EC\u7ACB\u7248\u672C\u5E76\u5165\u539F\u59CB\u8BFB\u6570\uFF0C\u6279\u6B21\u6B63\u5E38\u5BF9\u8D26\u5B8C\u6210", () => {
    const merged = dataset.readings.find((r) => r.origin === "\u79BB\u7EBF\u590D\u6D4B");
    assert.equal(merged?.value, 9.8);
    assert.equal(merged?.reconcileState, "\u5DF2\u5E76\u5165");
    assert.equal(dataset.readings.find((r) => r.id === "RD-5")?.value, 9.4);
    assert.equal(dataset.conflicts.length, 0);
    assert.equal(dataset.offlineBatches[0].status, "\u5DF2\u5BF9\u8D26");
  });
}
console.log("4. \u9608\u503C\u7248\u672C\u53D8\u5316\uFF1A\u76F8\u5173\u5F02\u5E38\u5931\u6548\u91CD\u7B97\uFF0C\u5DF2\u5173\u95ED\u5F02\u5E38\u91CD\u65B0\u6253\u5F00");
{
  let { dataset, batchId } = buildOfflineBatch();
  dataset = addRemeasure(dataset, batchId, { pointId: "P-D02", baseReadingId: "RD-5", value: 18.2 }, clock, createIdFactory(10));
  dataset = addEvidence(dataset, batchId, { kind: "\u89C6\u9891", name: "d02-run.mp4" }, clock, createIdFactory(20));
  dataset = publishThreshold(dataset, "T-D", { warning: 9, alarm: 15 }, "\u9608\u503C\u7BA1\u7406\u5458", clock, createIdFactory(30));
  dataset = markBatchSyncing(dataset, batchId);
  const evidenceId = dataset.offlineBatches[0].evidence[0].id;
  dataset = applyEvidenceUploadResult(dataset, batchId, evidenceId, true, "", clock, createIdFactory(40));
  dataset = reconcileBatch(dataset, batchId, clock, createIdFactory(50));
  check("\u5DF2\u5173\u95ED\u7684 D02 \u5386\u53F2\u5F02\u5E38\u6309\u65B0\u9608\u503C\u5931\u6548\u5E76\u91CD\u65B0\u6253\u5F00", () => {
    const closed = dataset.anomalies.find((a) => a.id === "AN-260927-03");
    assert.equal(closed?.status, "\u91CD\u7B97\u91CD\u5F00");
    assert.equal(closed?.closedAt, "");
    assert.equal(closed?.recalcState, "\u9608\u503C\u5931\u6548\xB7\u91CD\u5F00");
    assert.equal(closed?.thresholdVersion, "T-D V5");
    assert.ok(closed.version > 5);
  });
  check("\u5904\u7F6E\u4E2D/\u5BA1\u6279\u4E2D\u7684\u76F8\u5173\u5F02\u5E38\u540C\u6837\u91CD\u7B97", () => {
    const d01 = dataset.anomalies.find((a) => a.id === "AN-260929-01");
    assert.equal(d01?.status, "\u91CD\u7B97\u91CD\u5F00");
    assert.match(d01?.recalcNote ?? "", /V5/);
  });
  check("\u4E0D\u76F8\u5173\u6D4B\u70B9\uFF08\u6C34\u4F4D/\u6E17\u6D41\uFF09\u7684\u5F02\u5E38\u4E0D\u88AB\u91CD\u7B97", () => {
    const water = dataset.anomalies.find((a) => a.id === "AN-260929-02");
    assert.equal(water?.status, "\u539F\u56E0\u8C03\u67E5\u4E2D");
    assert.equal(water?.recalcState, "");
  });
  check("\u5BF9\u8D26\u62A5\u544A\u8BB0\u5F55\u91CD\u7B97/\u91CD\u5F00\u6E05\u5355\u4E0E\u9608\u503C\u7248\u672C", () => {
    const report = dataset.offlineBatches[0].report;
    assert.ok(report?.recalculatedAnomalyIds.includes("AN-260927-03"));
    assert.ok(report?.openedAnomalyIds.includes("AN-260927-03"));
    assert.equal(report?.thresholdVersions.find((s) => s.thresholdId === "T-D")?.version, 5);
  });
  check("\u65B0\u9608\u503C\u4E0B\u4E0D\u518D\u8D85\u9650\u7684\u5F02\u5E38\u4F1A\u5931\u6548\u5173\u95ED", () => {
    let local = structuredClone(seedDataset);
    const c = createOfflineBatch(local, "x", "y", clock, createIdFactory(1));
    local = c.dataset;
    local = addRemeasure(local, c.batch.id, { pointId: "P-D02", baseReadingId: "RD-5", value: 9.4 }, clock, createIdFactory(10));
    local = addEvidence(local, c.batch.id, { kind: "\u7167\u7247", name: "x.jpg" }, clock, createIdFactory(20));
    local = publishThreshold(local, "T-D", { warning: 12, alarm: 20 }, "\u9608\u503C\u7BA1\u7406\u5458", clock, createIdFactory(30));
    local = markBatchSyncing(local, c.batch.id);
    const ev = local.offlineBatches[0].evidence[0].id;
    local = applyEvidenceUploadResult(local, c.batch.id, ev, true, "", clock, createIdFactory(40));
    local = reconcileBatch(local, c.batch.id, clock, createIdFactory(50));
    const closedAnomaly = local.anomalies.find((a) => a.id === "AN-260927-03");
    assert.equal(closedAnomaly?.status, "\u5DF2\u5173\u95ED");
    assert.equal(closedAnomaly?.recalcState, "\u9608\u503C\u5931\u6548\xB7\u5173\u95ED");
  });
}
console.log("5. \u8BC1\u636E\u4E0A\u4F20\u5931\u8D25\u540E\u6062\u590D\u91CD\u8BD5\uFF1B\u91CD\u653E\u4E0D\u4EA7\u751F\u591A\u4F59\u5BA1\u8BA1");
{
  let { dataset, batchId } = buildOfflineBatch();
  dataset = addEvidence(dataset, batchId, { kind: "\u7167\u7247", name: "ev1.jpg" }, clock, createIdFactory(20));
  dataset = addEvidence(dataset, batchId, { kind: "\u5F55\u97F3", name: "ev2.m4a" }, clock, createIdFactory(21));
  dataset = markBatchSyncing(dataset, batchId);
  const [ev1, ev2] = dataset.offlineBatches[0].evidence;
  dataset = applyEvidenceUploadResult(dataset, batchId, ev1.id, false, "\u536B\u661F\u94FE\u8DEF\u6296\u52A8", clock, createIdFactory(40));
  check("\u5931\u8D25\u65F6\u73B0\u573A\u8BC1\u636E\u4FDD\u7559\u5E76\u8BB0\u5F55\u539F\u56E0\uFF0C\u4E14\u6CA1\u6709\u6210\u529F\u5BA1\u8BA1", () => {
    const stored = dataset.offlineBatches[0].evidence.find((e) => e.id === ev1.id);
    assert.equal(stored?.uploadState, "\u4E0A\u4F20\u5931\u8D25");
    assert.equal(stored?.failReason, "\u536B\u661F\u94FE\u8DEF\u6296\u52A8");
    assert.equal(stored?.attempts, 1);
    assert.equal(dataset.audit.filter((a) => a.action === "\u73B0\u573A\u8BC1\u636E\u4E0A\u4F20").length, 0);
  });
  check("\u8BC1\u636E\u672A\u5168\u90E8\u4E0A\u4F20\u65F6\u5BF9\u8D26\u4E0D\u53EF\u63D0\u4EA4\uFF08\u53EF\u6062\u590D\uFF0C\u4E0D\u4EA7\u751F\u534A\u6279\u6B21\uFF09", () => {
    const blocked = reconcileBatch(dataset, batchId, clock, createIdFactory(50));
    assert.equal(blocked, dataset);
    assert.equal(dataset.offlineBatches[0].status, "\u8BC1\u636E\u4E0A\u4F20\u4E2D");
  });
  dataset = applyEvidenceUploadResult(dataset, batchId, ev2.id, true, "", clock, createIdFactory(41));
  dataset = applyEvidenceUploadResult(dataset, batchId, ev1.id, false, "\u518D\u6B21\u8D85\u65F6", clock, createIdFactory(42));
  check("\u7EE7\u7EED\u91CD\u8BD5\uFF1A\u5931\u8D25\u8BC1\u636E\u4FDD\u7559\uFF0C\u6279\u6B21\u4ECD\u6302\u8D77", () => {
    const stored = dataset.offlineBatches[0].evidence.find((e) => e.id === ev1.id);
    assert.equal(stored?.attempts, 2);
    assert.equal(reconcileBatch(dataset, batchId, clock, createIdFactory(50)), dataset);
  });
  dataset = applyEvidenceUploadResult(dataset, batchId, ev1.id, true, "", clock, createIdFactory(43));
  dataset = reconcileBatch(dataset, batchId, clock, createIdFactory(50));
  check("\u6062\u590D\u540E\u4E0A\u4F20\u6210\u529F\u5E76\u5B8C\u6210\u5BF9\u8D26\uFF1B\u6BCF\u6761\u8BC1\u636E\u6070\u597D\u4E00\u6761\u5BA1\u8BA1", () => {
    const stored = dataset.offlineBatches[0].evidence.find((e) => e.id === ev1.id);
    assert.equal(stored?.uploadState, "\u5DF2\u4E0A\u4F20");
    assert.equal(dataset.audit.filter((a) => a.action === "\u73B0\u573A\u8BC1\u636E\u4E0A\u4F20").length, 2);
    assert.equal(dataset.offlineBatches[0].status, "\u5DF2\u5BF9\u8D26");
  });
  check("\u5BF9\u5DF2\u4E0A\u4F20\u8BC1\u636E\u91CD\u590D\u5E94\u7528\u6210\u529F\u7ED3\u679C\u4E0D\u91CD\u590D\u8BA1\u6570\uFF1B\u518D\u6B21\u5BF9\u8D26\u4E0D\u65B0\u589E\u5BA1\u8BA1", () => {
    const auditBefore = dataset.audit.length;
    let replayed = applyEvidenceUploadResult(dataset, batchId, ev1.id, true, "", clock, createIdFactory(60));
    replayed = reconcileBatch(replayed, batchId, clock, createIdFactory(61));
    assert.equal(replayed.audit.length, auditBefore);
    assert.equal(replayed.audit.filter((a) => a.action === "\u73B0\u573A\u8BC1\u636E\u4E0A\u4F20").length, 2);
  });
}
console.log("6. \u603B\u89C8/\u8BE6\u60C5/\u5BFC\u51FA\u5171\u7528\u540C\u4E00\u6279\u6B21\u3001\u9608\u503C\u7248\u672C\u4E0E\u5BF9\u8D26\u72B6\u6001");
{
  let { dataset, batchId } = buildOfflineBatch();
  dataset = addRemeasure(dataset, batchId, { pointId: "P-D02", baseReadingId: "RD-5", value: 9.8 }, clock, createIdFactory(10));
  dataset = addEvidence(dataset, batchId, { kind: "\u7167\u7247", name: "d02.jpg" }, clock, createIdFactory(20));
  dataset = markBatchSyncing(dataset, batchId);
  const ev = dataset.offlineBatches[0].evidence[0].id;
  dataset = applyEvidenceUploadResult(dataset, batchId, ev, true, "", clock, createIdFactory(40));
  dataset = reconcileBatch(dataset, batchId, clock, createIdFactory(50));
  const view = batchConsistencyView(dataset.offlineBatches[0]);
  const exported = JSON.parse(JSON.stringify({ batches: dataset.offlineBatches, thresholds: dataset.thresholds }));
  check("\u4E00\u81F4\u6027\u89C6\u56FE\u4E0E\u5BFC\u51FA\u5305\u3001\u9608\u503C\u8868\u7248\u672C\u4E00\u81F4", () => {
    assert.equal(view.batchId, batchId);
    assert.equal(view.status, "\u5DF2\u5BF9\u8D26");
    assert.equal(view.evidenceUploaded, 1);
    assert.equal(view.evidenceTotal, 1);
    const tdVersion = exported.thresholds.find((t) => t.id === "T-D").version;
    assert.equal(view.thresholdText, `T-D V${tdVersion}\u3001T-W V3\u3001T-S V5\u3001T-R V2`);
    assert.equal(exported.batches[0].status, view.status);
    assert.equal(exported.batches[0].report.thresholdVersions.find((s) => s.thresholdId === "T-D").version, tdVersion);
  });
}
console.log(`
\u5168\u90E8 ${passed} \u9879\u65AD\u8A00\u901A\u8FC7`);
