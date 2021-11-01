import React, { useEffect, useRef, useState } from 'react';
import './login.css';
import Logo from'../../assets/img_login_candidate.png';
import {
  Image,
  Header,
  Container,
  Button,
  Divider,
  Checkbox,
  Grid,
  Label
} from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../actions/auth';
import Swal from 'sweetalert2';




export const LoginScreen = (props)=>{

    const dispatch = useDispatch();
    const {button} = useSelector(state => state.auth)
    const [stateButton,setStateButton] =  useState(true);
    const [formLoginValues,handleLoginInputChange,reset] = useForm({
        lEmail:'',
        lPassword:''
    });
    

    const {lEmail,lPassword} = formLoginValues;
    
    const handleLogin=(e)=>{
        e.preventDefault();
        //console.log(lEmail,lPassword);
        //console.log(process.env.REACT_APP_API_URL)
        dispatch(startLogin(lEmail,lPassword));
        setStateButton(false)
        //Dispatch Login
         //Activamos el boton si esta authenticado o no con el Reducer
        reset();
    }
   
    useEffect(()=>{
        setStateButton(true)
    },[button]);


    const handlePassword = ()=>{
        Swal.fire('Information','Try again in a  few minutes','info')
    }

    const handleRegister = ()=>{
        props.history.push('/register')
    }

    return (
        <div style={{marginTop:'30vh'}}>
        <Container fluid  >
          
            <Grid container  >
                <Grid.Column  mobile={16} tablet={16} computer={8}>
                
                    <Image src={Logo} style={{height: '210px'}} centered />
                
                    </Grid.Column>
                <Grid.Column  mobile={16} tablet={16} computer={8}>
                
                        <Header as='h1' textAlign='center'>
                        Candidate Login.
                        <Header.Subheader>
                        Please login here to access your <strong>account</strong>.
                        </Header.Subheader>
                        </Header>
                        <Form 
                        name='form'
                        size='large'
                        onSubmit={handleLogin}
                        >
                    
                        <Form.Input
                            type='email'
                            name='lEmail'
                            value={lEmail}
                            onChange={handleLoginInputChange}
                            label='Email'
                            placeholder='inbox@mail.com'
                            size='large'
                            required
                            validations='isEmail'
                            
                        
                        />
                        <Form.Input
                            type='password'
                            name='lPassword'
                            value={lPassword}
                            onChange={handleLoginInputChange}
                            label='Password'
                            placeholder='•••••••'
                            size='large'
                            required
                        
                        />
                        <Label className="labelCustom" >
                           
                        </Label>
                        <div className="form-group" onClick={handlePassword}>
                            <input 
                                type="submit" 
                                className="labelCustom" 
                                value="Forgot your password?" />
                        </div>
                        <div className="form-group" onClick={handleRegister}>
                            <input 
                                type="submit" 
                                className="labelCustom" 
                                value="Create an account" />
                        </div>
                        {
                            (stateButton) 
                            ? (<Button positive fluid active size='large'> Login</Button>)
                            : (<Button positive fluid disabled  loading primary size='large'> Login</Button>)
                        }
                       
                        </Form>
                
                    </Grid.Column>
            </Grid>
          
        </Container>
        </div>
    )
}