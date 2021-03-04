#！/bin/bash
WARNINFO="`df |grep -E '^/dev/sd*' |tr -s ' ' |cut -d ' ' -f1,5,6 |sort -nr -k2 |head -n3`"
#LARSET="`df |grep -E '^/dev/sd*' |tr -s ' ' |cut -d ' ' -f1,5,6 |sort -nr -k2 |head -n1`"
#LARSET="`echo ${WARNINF} |tr -s ' ' '%' |cut -d% -f2 |sort -nr|head -n1`"
VALURE="`echo $WARNINFO |tr -s '%' ' '|sort -nr |head -n1|cut -d ' ' -f2 `"
if
        [[ $VALURE -ge 10 ]]
then
        echo -e "Your host's disk rate is more than 10%\n${WARNINFO}" |mail -v -s "disk_rate " 949786521@qq.com
        echo "The rate is ${VAlURE} "
else
        echo "正常"
fi