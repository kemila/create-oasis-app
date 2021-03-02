import { IFact, IResult, IRule } from "./i_process_system";
import { EN_RULE } from "./rule_manager";

// 先支持正向逻辑
class ResultManagerImpl {
    private _results: IResult[] = [];
    public getResults(){
        return this._results;
    }
    public initResult() {
        this._results.push({
            name: 'Snake',
            ruleIds: [EN_RULE.LIVED, EN_RULE.COLDBLOOD, EN_RULE.LEG]
        })
        this._results.push({
            name: 'Bird',
            ruleIds: [EN_RULE.FLY, EN_RULE.FEATHER]
        })
        this._results.push({
            name: 'Lizard',
            ruleIds: [EN_RULE.RUN, EN_RULE.COLDBLOOD]
        })
        this._results.push({
            name: 'Cat',
            ruleIds: [EN_RULE.LIVED, EN_RULE.COLDBLOOD, EN_RULE.LEG]
        })
        this._results.push({
            name: 'Airplane',
            ruleIds: [EN_RULE.FLY]
        })
    }
}
export const ResultManager = new ResultManagerImpl();

