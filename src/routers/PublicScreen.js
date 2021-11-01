import React from 'react';
import PropTypes  from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

export const PublicScreen = ({authenticated,component:Component, ...rest})=>{
    //Rest => All propertys on the params
    return(
        <Route 
            {...rest}
            component= {
                (props)=>(
                    (authenticated === false)
                    ? (<Component {...props} />) //We will send all propertys inside the Component= (*Name Component)
                    : (<Redirect to="/"/>)
                )
            }
        />
    )
}