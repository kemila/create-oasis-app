class RuleManager{
    
}
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