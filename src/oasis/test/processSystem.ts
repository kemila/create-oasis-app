
// 简单的只有是否逻辑
type id = number;
// 规则
export interface IRule {
    id: id;
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
// 结果 冷血 腿 毛 飞
export enum Result {
    Snake = '0001',
    Bird = '1110',
    Lizard = '0011',
    Cat = '0110',
}

const Rules: IRule[] = [];
const Facts: IFact[] = [];
// 人机交互界面、知识库、综合数据库、推理机、解释器、知识获取等6个部分构成
export function processSystem() {
    initRules();
    inputFactor();
    const res = matchRules();
    matchResult(res);
    console.log('res:!!!!!!!!!!!!!!!!!!!!!!!!!!!!', res);
    // 1. 实现流程：

    // 1)    初始化规则集合

    // 2)    初始化规则事实集合
    // 3)    使用规则推导
    // 2. 加入规则信息：

    // ”冷血”,”有腿”,”羽毛”,”会飞”

    // 3. 规则事实：

    // 冷血+没有腿 -> 蛇

    // 冷血+有腿 -> 蜥蜴

    // 非冷血+有羽毛+不会飞 -> 鸡

    // 非冷血+没有羽毛 -> 猫

    // 4. 推理过程：
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
function inputFactor() {
    Facts.push({
        ruleId: 0,
        confidence: 1,
        bool: false,
    });
    Facts.push({
        ruleId: 10,
        confidence: 1,
        bool: true,
    });
    Facts.push({
        ruleId: 100,
        confidence: 1,
        bool: true,
    });
    Facts.push({
        ruleId: 1000,
        confidence: 1,
        bool: true,
    });
}
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
            console.log('this is a Bird');
            break;
        case parseInt(Result.Lizard, 2):
            console.log('this is a Bird');
            break;
        case parseInt(Result.Snake, 2):
            console.log('this is a Bird');
            break;
        default:
            console.log('known');
            break;
    }
}
