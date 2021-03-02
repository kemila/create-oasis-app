// 执行简单的只有是否逻辑
type id = string;
// 规则
export interface IRule {
    id: string;
    bit: number;
    description: string;
    preRules: id[];
    nextRules: id[];
}
// 事实
export interface IFact {
    ruleId: id;
    confidence: number;
    bool: boolean;
}