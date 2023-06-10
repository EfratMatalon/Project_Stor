
import produce from 'immer'
const myState = {
    item: [],
    flag: false,
    sumOfAll: 0,//סך כל הקניה
    BugIsEmpty: true,
    numBuy: 2,
    
}
export default produce((stat, action) => {
    switch (action.type) {
        case "הוספת מוצר לסל":
            { 
                stat.BugIsEmpty = false
                debugger
                        stat.item.push(action.payload)
                        stat.sumOfAll = stat.sumOfAll + action.payload.price
                      
             } 
         break
        case "מחיקת מוצר מהסל":
            {
                stat.sumOfAll = stat.sumOfAll - action.payload.price
                stat.item = stat.item.filter((x) => x.GameName != action.payload.GameName)
            };
            break
        case "קידום מוצר בסל":
            {
                stat.sumOfAll = stat.sumOfAll + action.payload.price
                stat.item.forEach(element => {
                    if (element.GameName == action.payload.GameName) {
                        element.quantity = element.quantity + 1
                        element.sum = element.sum + action.payload.price
                    }
                });
                break
            }
        case "חיסור מוצר בסל ":
            stat.sumOfAll = stat.sumOfAll - (action.payload.price)
            stat.item.forEach(element => {
                if (element.GameName == action.payload.GameName) {
                    element.quantity = element.quantity - 1
                    element.sum = element.sum - (action.payload.price)
                    if (element.quantity == 0) {
                        stat.item = stat.item.filter((x) => x.GameName != action.payload.GameName)
                    }
                }
            });
            break
    }
}, myState)