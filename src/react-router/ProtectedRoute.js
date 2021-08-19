import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {           //...rest: grabs the props passed into it

    const loggedIn = window.sessionStorage.userId;

    return <Route {...rest} render={(props) => {
        if (loggedIn){
            return <Component />
        } else {
            return <Redirect to={{pathname:'/', state: {from: props.location}}}/>
        }
    }}/>
}
export default ProtectedRoute;