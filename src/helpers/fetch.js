const baseUrl = process.env.REACT_APP_API_URL;
const test = 'https://mern-calendar-ezequiel.herokuapp.com/api';

const fetchQuery = (endpoint,data,method = 'GET')=>{
    const url = `${test}/${endpoint}`;
    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url,{
            method:method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
}

const fetchQueryWithToken = (endpoint,data,method='GET')=>{
    const url = `${test}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    //console.log(token);
    if(method === 'GET'){
        return fetch(url,{
            method:method,
            headers:{
                'x-token':token
            }
        })
    }else{
        return fetch(url,{
            method:method,
            headers:{
                'x-token':token,
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
    }
}
export{
    fetchQuery,
    fetchQueryWithToken
}