import React,{useState} from 'react';
import { Icon } from '@iconify/react';
import TextInput from '../shared/TextInput';
import PasswordInput from '../shared/PasswordInput';
import {Link,useNavigate} from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';

import { useCookies } from 'react-cookie'; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie,setCookie] = useCookies(["token"]);

  const navigate= useNavigate();


  const login = async () => {
  
    
    const data = {email,password};
   
    const response = await makeUnauthenticatedPOSTRequest("/auth/login",data);
    console.log(response);
     if(response && !response.err) {

      //cookie set 
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() +30);
      setCookie("token",token,{path:"/",expires:date});


      alert("Success");

      navigate('/home');

     } else {
      alert("Failure");
     }
  }
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='logo p-5 border-b border-solid border-gray-400 w-full flex justify-center'>
      <Icon icon="logos:spotify" width="150"  />
      </div>
      
      <div className='inputRegion w-1/5 py-10  flex item-center justify-center flex-col'>
             <div className='font-bold mb-8 text-4xl'>Log in To Spotify</div>
              <TextInput label="Email or username" placeholder="Email or Username" className="my-2"
              value={email} setValue={setEmail}
              />
              <PasswordInput label="Password" placeholder="Password" className="my-2"
              value={password} setValue={setPassword}
              />
              <div className='w-full flex item-center justify-center flex-col mt-12 my-8'>
                 <button className='bg-green-500 rounded-full font-semibold text-lg' onClick={(e)=>{
                  e.preventDefault();
                  login();
                 }}>Log In</button>
              </div>
              <div className='w-full border border-solid border-gray-300'></div>
              <div className='w-full my-6 flex item-center justify-center text-lg font-semibold'>
                Dont have an Account?
              </div>

              <div className='border border-gray-500 w-full flex items-center justify-center text-gray-500 py-2 rounded-full font-semibold'>
                <Link to='/signup'>Sign Up for Spotify</Link>
              </div>
              
            
              

      </div>
    </div> 
  )
}

export default Login
