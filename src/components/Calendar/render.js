import {
    createWeekDaysNode,
    createDateNode
} from './creator'

export function render (container){
    const oTHead = document.createElement('thead');
    const oTBody = document.createElement('tbody')
    const weekDayNode = createWeekDaysNode()

    return function (year,month){
        oTHead.appendChild(weekDayNode);
        container.appendChild(oTHead);
        
        const obj = createDateNode(year,month);
        console.log(obj)
        return container;
    }
}

export function update(){}