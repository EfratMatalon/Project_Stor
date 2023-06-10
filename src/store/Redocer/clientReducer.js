import produce from 'immer'
const listClient = {
    thisClient: {},
    name: "",
    password:0,
    ifIsMenagment:false,//האם מנהל
    ifIsClient: false,// אם לקוח
    seeError: false //לראות הודעת שגיאה 
}
export default produce((stat, action) => {
    //לקוח קיים 
    switch (action.type) {
        case "לקוח קיים": {
            //אם יש אי אלו משתמשים 
            if (stat.thisClient != undefined) {
                 //אם מנהל 
                if (action.payload.data[0].password== 1)//&&action.payload.data.name=="efrat")
                   { stat.ifIsMenagment = true
                    debugger
                }
                //אם לקוח רגיל 

                else
                {   debugger
                 stat.ifIsMenagment = false
                stat.name = action.payload.data[0].name
                stat.password = action.payload.data.password
                stat.ifIsClient = true
                }
                  
            }
            else {
                stat.seeError = true
            }
            break;
        }
        case "האם להציג הודעה ":{ 
          stat.seeError=false 
           break;
        }  
    }
}, listClient)