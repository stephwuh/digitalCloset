
const initialState = []


const outfitCategoryReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case 'addOutfit/addOutfitCategory':
            return state = action.payload;                              //not best practice
        default:
            return state;
    }
}

export default outfitCategoryReducer;