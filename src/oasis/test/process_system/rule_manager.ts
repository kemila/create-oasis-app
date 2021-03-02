import { IRule } from "./i_process_system";

class RuleManagerImpl {
    private _rules: IRule[] = [];
    public getRules(){
        return this._rules;
    }
    public initRules() {
        this._rules.push({
            id: 'cold-blooded',
            bit: 0,
            description: '是否冷血',
            preRules: [],
            nextRules: [],
        });
        this._rules.push({
            id: 'leg',
            bit: 1,
            description: '是否有腿',
            preRules: [],
            nextRules: [],
        });
        this._rules.push({
            id: 'feather',
            bit: 2,
            description: '是否有羽毛',
            preRules: [],
            nextRules: [],
        });
        this._rules.push({
            id: 'fly',
            bit: 3,
            description: '是否会飞',
            preRules: [],
            nextRules: [],
        });
    }
}
export const RuleManager = new RuleManagerImpl();
