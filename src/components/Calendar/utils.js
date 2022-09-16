// 查找每月的第一天是星期几
export function getFirstWeelDay(year,month){
    const data = new Date(year,month-1,1) //哪一年，哪一月的第一天
    return data.getDay();
}

// 获取当月的天数
export function getMonthDayCount (year,month){
    //month 0-11代表12个月份  8就代表9月
    // 此时就是获取上一个月的第0天代表，当前值月份的天数
    const date = new Date(year,month,0) 
    return date.getDate()
}

// 获取上个月的渲染天数
export function getLastMonthRestDays (year,month){
    const days = getFirstWeelDay(year,month)
    // 上一个月的天数
    let lastDate = getMonthDayCount(year,month-1)
    let restday = []
    while(restday.length<days){
        restday.push(lastDate--)
    }
    return restday.reverse();  //翻转数组
}

// 获取下个月剩余的天数
export function getNextMonthRestDays(year,month){
    // 上个月剩余的天数相当这个月的周几
    const lastMonthRestDayCount = getFirstWeelDay(year,month);
    // 获取这个月的天数
    const currentMonthDayCount = getMonthDayCount(year,month);
    // 42 - 上个剩余的和这个月的天数就是下个月需要补上的
    const nextMonthRestDayCount = 42 - (lastMonthRestDayCount+currentMonthDayCount)

    let restDays = []
    for(var i=0;i<nextMonthRestDayCount;i++){
        restDays.push(i)
    }
    return restDays;
}

// 工具函数
// 判断是否有选择固定事件没有选择 默认是当前天数
export function getDateInfo(timeStamp){
    var data = timeStamp ? new Date(timeStamp) : new Date();
    return [
        data.getFullYear(),
        data.getMonth(),
        data.getDate()
    ]
}

// 时间格式化
export function getFormatDate(year,month,data){
    const dataArr = [year,month,data]
    for(var i=1;i<dataArr.length;i++){
        if(dataArr[i]<10){
            dataArr[i] = '0'+dataArr[i]
        }
    }
    return dataArr.join('-')
}