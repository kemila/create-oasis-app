import { IFact, IRule } from "./i_process_system";
import { Result } from "./result_manager";

export function matchRulesAndFacts(rules: IRule[],facts: IFact[]) {
    let res = 0;
    facts.forEach((fact) => {
        const rule = rules.find((ru) => ru.id === fact.ruleId);
        if (rule) {
            const { bool } = fact;
            if (bool) {
                res |= 1 << rule.bit;
            }
        }
    });
    return matchResult(res);
}

function matchResult(res: number) {
    switch (res) {
        case parseInt(Result.Bird, 2):
            console.log('this is a Bird');
            break;
        case parseInt(Result.Cat, 2):
            console.log('this is a Cat');
            break;
        case parseInt(Result.Lizard, 2):
            console.log('this is a Lizard');
            break;
        case parseInt(Result.Snake, 2):
            console.log('this is a Snake');
            break;
        default:
            console.log('known');
            break;
    }
}