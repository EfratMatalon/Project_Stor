import produce from 'immer'
const mystate = {
    listCategory: []
}

export default produce((state, action) => {
    switch (action.type) {
        case "הצג את כל הקטגוריות": {
            state.listCategory = action.payload
            break;
        }
    }
}, mystate)