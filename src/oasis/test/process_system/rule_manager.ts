import { IRule } from "./i_process_system";
export enum EN_RULE {
    LIVED = 0,
    BLOOD,
    COLDBLOOD,
    LEG,
    RUN,
    FEATHER,
    FLY,
    WING,
}
class RuleManagerImpl {
    private _rules: IRule[] = [];
    private ruleKey = [];
    public getRules() {
        return this._rules;
    }
    public addRule(rule: IRule) {
        const r = rule;
        // 指定 范围应该不能太大
        const bit = this._rules.length;
        r.bit = bit;
        this._rules.push(r);
    }
    public initRules() {
        this.addRule({
            id: EN_RULE.LIVED,
            description: '是否有生命',
            preRules: [],
            nextRules: [],
        });
        this.addRule({
            id: EN_RULE.BLOOD,
            description: '是否有血',
            preRules: [],
            nextRules: [],
        });
        this.addRule({
            id: EN_RULE.COLDBLOOD,
            description: '是否冷血',
            preRules: [EN_RULE.BLOOD],
            nextRules: [],
        });
        this.addRule({
            id: EN_RULE.LEG,
            description: '是否有腿',
            preRules: [],
            nextRules: [],
        });
        this.addRule({
            id: EN_RULE.RUN,
            description: '是否会跑',
            preRules: [EN_RULE.LEG],
            nextRules: [EN_RULE.LIVED],
        });
        this.addRule({
            id: EN_RULE.FEATHER,
            description: '是否有羽毛',
            preRules: [],
            nextRules: [],
        });
        this.addRule({
            id: EN_RULE.FEATHER,
            description: '是否有翅膀',
            preRules: [],
            nextRules: [],
        });
        this.addRule({
            id: EN_RULE.FLY,
            description: '是否会飞',
            preRules: [],
            nextRules: [EN_RULE.FEATHER],
        });
    }
}
export const RuleManager = new RuleManagerImpl();
