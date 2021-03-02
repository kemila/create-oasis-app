// 执行简单的只有是否逻辑
type id = number;
// 规则
export interface IRule {
    id: id;
    description: string;
    // 规则的决定关系 暂定只能是 true => ture 先不支持详细逻辑
    preRules: id[];
    nextRules: id[];
    bit?: number;
}
// 事实
export interface IFact {
    ruleId: id;
    confidence: number;
    bool: boolean;
}
export interface IResult {
    name: string;
    ruleIds: id[]
}