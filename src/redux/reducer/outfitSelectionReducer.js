
const initialState = {
    outerwear: [],
    layer: [],
    shirt: [],
    pants: []
}


const outfitSelectionReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case 'addOutfit/addOuterwear':
            return {...state, outerwear: [...state.outerwear, action.payload]};
        case 'addOutfit/addLayer':
            return {...state, layer: [...state.layer, action.payload]};
        case 'addOutfit/addShirt':
            return {...state, shirt: [...state.shirt, action.payload]};
        case 'addOutfit/addPants':
            return {...state, pants: [...state.pants, action.payload]};
            case 'addOutfit/reset':
                return initialState;
        default:
            return state;
    }
}

export default outfitSelectionReducer;