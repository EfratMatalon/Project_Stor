import { Stats } from 'fs';
import produce from 'immer'
const state = {
    listGame: [],
    myGame: {}
}
export default produce((stat, action) => {
    switch (action.type) {
        case "קבלת הפריטים": 
        {
            stat.myGame.id = action.payload.id
            stat.myGame.name = action.payload.name
            stat.myGame.price = action.payload.price
            stat.myGame.pic = action.payload.pic
            stat.myGame.describtion = action.payload.describtion
            break;
        }
        case " עריכת רשימת המשחקים":
            {
                stat.listGame = action.payload
                break;
            }

    }

}, state)