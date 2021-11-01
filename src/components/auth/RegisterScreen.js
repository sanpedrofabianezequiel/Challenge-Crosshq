import React from 'react';
import { useForm } from '../../hooks/useForm';
import {
    Image
} from 'semantic-ui-react'
import Logo from'../../assets/img_login_candidate.png';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = (props)=>{
    const dispatch = useDispatch();
    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName:'Your Name',
        rEmail:'email@gmail.com',
        rPassword1:'******',
        rPassword2:'******'
    })

    const {rName, rEmail,rPassword1, rPassword2} =formRegisterValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(formRegisterValues);
        if(rEmail === ''){
            return Swal.fire('Error','Email is required','error');
        }
        if(rName === ''){
            return Swal.fire('Error','Name is required','error');
        }
        if(rPassword1 !== rPassword2){
            return Swal.fire('Error','Las contraseñas deben de ser iguales','error');
        }
        dispatch(startRegister(rEmail,rPassword1,rName));
    }
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                   <Image src={Logo} style={{height: '210px'}} centered />
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form onSubmit={handleLogin} >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={rName}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={rEmail}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword1"
                                value={rPassword1}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="rPassword2"
                                value={rPassword2}
                                onChange= {handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group" style={{ textAlign:'center'}}>
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Create your account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}