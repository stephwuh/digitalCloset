

export const addOuterwear = (outerwear) =>{
    return (dispatch) => {
        dispatch({
            type: 'addOutfit/addOuterwear',
            payload: outerwear
        })
    }
}

export const addLayer = (layer) =>{
    return (dispatch) => {
        dispatch({
            type: 'addOutfit/addLayer',
            payload: layer
        })
    }
}

export const addShirt = (shirt) =>{
    return (dispatch) => {
        dispatch({
            type: 'addOutfit/addShirt',
            payload: shirt
        })
    }
}

export const addPants = (pants) =>{
    return (dispatch) => {
        dispatch({
            type: 'addOutfit/addPants',
            payload: pants
        })
    }
}

export const outfitReset = ()=>{
    return (dispatch) => {
        dispatch({
            type: 'addOutfit/reset'
        })
    }
}


export const addOutfitCategory = (category) =>{
    return (dispatch) => {
        dispatch({
            type: 'addOutfit/addOutfitCategory',
            payload: category
        })
    }
}

export const toggleSignInStatus = (userId) =>{
    return (dispatch) => {
        dispatch({
            type: 'signInStatus/toggleSignInStatus',
            payload: userId
        })
    }
}




