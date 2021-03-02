import { IFact, IRule } from "./i_process_system";
import { RuleManager } from "./rule_manager";

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
            case 'cold-blooded':
                bool = true;
                confidence = 1;
                break;
            case 'leg':
                bool = true;
                confidence = 1;
                break;
            case 'feather':
                bool = false;
                confidence = 1;
                break;
            case 'fly':
                bool = false;
                confidence = 1;
                break;
            default:
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

