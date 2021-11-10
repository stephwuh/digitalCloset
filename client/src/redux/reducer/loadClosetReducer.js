
const initialState = {
    outerwear: [],
    layer: [],
    shirt: [],
    pants: []
}


const loadClosetReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case 'loadOutfit/loadOuterwear':
            return {...state, outerwear: [...state.outerwear, action.payload]};
        case 'loadOutfit/loadLayer':
            return {...state, layer: [...state.layer, action.payload]};
        case 'loadOutfit/loadShirt':
            return {...state, shirt: [...state.shirt, action.payload]};
        case 'loadOutfit/loadPants':
            return {...state, pants: [...state.pants, action.payload]};
        default:
            return state;
    }
}

export default loadClosetReducer;