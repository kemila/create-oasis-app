import { FactManager } from "./fact_manager";
import { matchRulesAndFacts } from "./match";
import { RuleManager } from "./rule_manager";
// https://blog.csdn.net/jjccwwbb/article/details/36873181
// 人机交互界面、知识库、综合数据库、推理机、解释器、知识获取等6个部分构成
export function processSystem() {
    RuleManager.initRules();
    FactManager.inputFactor();
    const res = matchRulesAndFacts(RuleManager.getRules(), FactManager.getFacts());
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