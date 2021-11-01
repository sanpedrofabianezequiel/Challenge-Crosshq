import Swal from 'sweetalert2';
import { fetchQuery,fetchQueryWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email,password)=>{
    return async(dispatch)=>{
        const resp  = await fetchQuery('auth',{email,password},'POST');
        const body  = await resp.json();
        console.log('DATEEEEEEEEEEEEEEEEEEEEEEEEEE')
        console.log(JSON.stringify(body));
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(authLogin({
                uid:body.uid,
                name:body.name
            }))
        }else{
            Swal.fire('Error',body.msg,'error');
        }
    }
}
//We need check with ONE action if we have in local store, token and check y that is valid.
export const startChecking=()=>{
    return async(dispatch)=>{
        //This method will check with the token (localStore) if is valid
        const resp =  await fetchQueryWithToken('auth/renew',{},'GET');
        const body =  await resp.json();
        
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(authLogin({
                uid:body.uid,
                name:body.name
            }))
        }else{
            dispatch(checkingFinish());
        }
    }
}

export const startRegister=(email, password,name)=>{
    return async (dispatch)=>{
        const resp = await fetchQuery('auth/new',{email,password,name},'POST');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(authLogin({
                uid:body.uid,
                name:body.name
            }))
        }else{
            Swal.fire('Error',body.msg,'error');
        }
    }
}
const authLogin = (user)=>({
    type:types.authLogin,
    payload:user
});

const checkingFinish = ()=>({type:types.authCheckingFinish})

///
export const startLogout = ()=>{
    return (dispatch)=>{
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = ()=>({
    type:types.authLogout
})