import axios from 'axios';

const loadCloset = async (dispatch) =>{

    // axios request is actually a get request. using post to send userId to the server so it can retrieve the correct clothes
    const res = await axios.post('/api/closet/getClothingImages', {userId: sessionStorage.getItem('userId')});
    const data = res.data

    for(let i=0; i < data.length; i++){
       if(data[i].clothingCategory === "outerwear"){
          
        dispatch({
            type: 'loadOutfit/loadOuterwear',
            payload: data[i]
        })
       }
       if(data[i].clothingCategory === "layer"){
           
        dispatch({
            type: 'loadOutfit/loadLayer',
            payload: data[i]
        })
       }
       if(data[i].clothingCategory === "shirt"){
       
        dispatch({
            type: 'loadOutfit/loadShirt',
            payload: data[i]
        })
        }
        if(data[i].clothingCategory === "pants"){
          
            dispatch({
                type: 'loadOutfit/loadPants',
                payload: data[i]
            })
        }
    }

}

export default loadCloset;