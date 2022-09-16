import { WEEK_DAYS } from "./config";
import { 
    getLastMonthRestDays,
    getMonthDayCount,
    getNextMonthRestDays
} from "./utils";

export function createWeekDaysNode(){
    const oTr = document.createElement('tr')
    oTr.className = 'week-day'
    oTr.innerHTML = WEEK_DAYS.map(item => (
        `<th>${item}</th>`
    )).join('');
    return oTr;
}

// 创建时间节点
export function createDateNode(currentMonthDayCount,year,month){
    const lastMonthRestDays = getLastMonthRestDays(year,month);
    const currentMonthDays = getMonthDayCount(year,month)
    const nextMonthrestdays = getNextMonthRestDays(year,month)
    const dataTrArr = createDateTrs(6)


    const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays);
    const currentMonthDaysTD = createCurrentDaysTD(currentMonthDayCount,year,month)
    const nextMonthRestDayCount = createRestDaysTD(nextMonthrestdays)
    return {
        lastMonthRestDaysTD,
        currentMonthDaysTD,
        nextMonthRestDayCount
    }
}

export function createDateTrs(count){
    const trArr = []
    for(var i=0;i<count;i++){
        const oTr = document.createElement('tr');
        trArr.push(oTr)
    }
    return trArr
}

// 工具函数
// 渲染其他月份的日期
function createRestDaysTD(restDays){
    return restDays.map(item =>{
        const oTd = document.createElement('td');
        oTd.className = 'day rest-day';
        oTd.innerHTML = item

        return oTd
    })
}

// 渲染当前月份的日期
function createCurrentDaysTD(currentDayCount,year,month){
    let tdArr = [];
    const [
        currentYear,
        currentMonth,
        currentDate
    ] = getDateInfo();

    for(let i =1;i<currentDayCount;i++){
        const oTd = document.createElement('td');
        if(currentYear === year && currentMonth === month && currentDate ===i){
            oTd.className = 'day current-day current';
        } else {
            oTd.className = 'day current-day'
        }
        oTd.innerHTML=i
    }
}