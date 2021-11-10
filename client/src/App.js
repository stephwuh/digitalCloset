import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './features/auth/Login.js';
import Signup from './features/auth/Signup.js';
import Closet from './features/closet/Closet.js';
import AddClothes from './features/clothes/addClothes/AddClothes.js';
import Weather from './features/weather/Weather.js';
import AddOutfit from './features/outfits/addOutfit/AddOutfit.js';
import Outfits from './features/outfits/outfits/Outfits.js';
import ClothingDetails from './features/clothes/clothingDetails/ClothingDetails.js';
import OutfitDetails from './features/outfits/outfitDetails/OutfitDetails.js';
import AddClothesToOutfit from './features/outfits/addOutfit/AddClothesToOutfit.js';
import LoadOutfitCategory from './features/outfits/LoadOutfitCategory.js';
import ProtectedRoute from './react-router/ProtectedRoute.js';
import Lookbook from './features/lookbook/Lookbook'




function App() {
  return (
    <>
      <Switch>
        <ProtectedRoute
          path="/add-clothes"
          component={AddClothes}
          isAuth={window.sessionStorage.userId}
        />
        <ProtectedRoute
          path="/clothing-details"
          component={ClothingDetails}
          isAuth={window.sessionStorage.userId}
        />
        <ProtectedRoute
          path="/closet"
          component={Closet}
          isAuth={window.sessionStorage.userId}
        />
        <ProtectedRoute
          path="/add-outfits"
          component={AddOutfit}
          isAuth={window.sessionStorage.userId}
        />
        <ProtectedRoute
          path="/lookbook"
          component={Lookbook}
          isAuth={window.sessionStorage.userId}
        />
        <ProtectedRoute
          path="/outfit-details"
          component={OutfitDetails}
          isAuth={window.sessionStorage.userId}
        
        />
        <ProtectedRoute
          path="/select-outfit"
          component={AddClothesToOutfit}
          isAuth={window.sessionStorage.userId}
        />
        <ProtectedRoute
          path="/outfits"
          component={Outfits}
          isAuth={window.sessionStorage.userId}
        />
        <ProtectedRoute
          path="/weather"
          component={Weather}
          isAuth={window.sessionStorage.userId}
        />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
      <LoadOutfitCategory />
    </>
  );
}

export default App;
