
function initRules() {
    Rules.push({
        id: 0,
        bit: 0,
        description: '是否冷血',
        preRules: [],
        nextRules: [],
    });
    Rules.push({
        id: 10,
        bit: 1,
        description: '是否有腿',
        preRules: [],
        nextRules: [],
    });
    Rules.push({
        id: 100,
        bit: 2,
        description: '是否有羽毛',
        preRules: [],
        nextRules: [],
    });
    Rules.push({
        id: 1000,
        bit: 3,
        description: '是否会飞',
        preRules: [],
        nextRules: [],
    });
}
function inputFactor() {
    Facts.push({
        ruleId: 0,
        confidence: 1,
        bool: true,
    });
    Facts.push({
        ruleId: 10,
        confidence: 1,
        bool: true,
    });
    Facts.push({
        ruleId: 100,
        confidence: 1,
        bool: false,
    });
    Facts.push({
        ruleId: 1000,
        confidence: 1,
        bool: false,
    });
}