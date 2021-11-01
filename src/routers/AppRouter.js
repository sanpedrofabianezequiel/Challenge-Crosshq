import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { AboutUs } from '../components/home/AboutUs';
import { HomeScreen } from '../components/home/HomeScreen';
import { PrivateScreen } from './PrivateScreen';
import { PublicScreen } from './PublicScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = ()=>{
    const dispatch = useDispatch();
    const {uid} = useSelector(state=>state.auth);

    //We need check with ONE action if we have in local store, token and check y that is valid.
    useEffect(()=>{
        dispatch(startChecking());
    },[dispatch]);
    return(
        <Router>
            <div>
                <Switch>
                    <PublicScreen  exact path="/login" component={LoginScreen} authenticated={!!uid} />
                    <PublicScreen  exact path="/register" component={RegisterScreen} authenticated={!!uid} />
                    <PrivateScreen exact path="/" component={HomeScreen} authenticated={!!uid}/>
                    <PrivateScreen exact path="/about-us" component={AboutUs} authenticated={!!uid}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}