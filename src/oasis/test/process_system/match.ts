
function matchRules() {
    let res = 0;
    Facts.forEach((fact) => {
        const rule = Rules.find((ru) => ru.id === fact.ruleId);
        if (rule) {
            const { bool } = fact;
            if (bool) {
                res |= 1 << rule.bit;
            }
        }
    });
    return res;
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