import { IFact, IRule } from "./i_process_system";
import { EN_RULE, RuleManager } from "./rule_manager";

class FactManagerImpl {
    private _facts: IFact[] = [];
    public getFacts(){
        return this._facts;
    }
    public inputFactor() {
        const rules = RuleManager.getRules();
        rules.forEach((r) => {
            this.factJudge(r);
        });
    }
    // 模拟输入
    public factJudge(rule: IRule) {
        let bool = false;
        let confidence = 1;
        switch (rule.id) {
            case EN_RULE.LIVED:
                bool = true;
                confidence = 1;
            case EN_RULE.COLDBLOOD:
                bool = true;
                confidence = 1;
                break;
            case EN_RULE.LEG:
                bool = true;
                confidence = 1;
                break;
            case EN_RULE.FEATHER:
                bool = false;
                confidence = 1;
                break;
            case EN_RULE.FLY:
                bool = false;
                confidence = 1;
                break;
            default:
                confidence = 0.5;
                break;
        }
        this._facts.push({
            ruleId: rule.id,
            confidence,
            bool,
        });
    }
}
export const FactManager = new FactManagerImpl();

