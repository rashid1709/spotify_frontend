import React, { useState } from 'react';
import { Icon } from '@iconify/react';


import TextInput from '../shared/TextInput';
import PasswordInput from '../shared/PasswordInput';
import {Link} from 'react-router-dom';
import {makeUnauthenticatedPOSTRequest} from '../utils/serverHelper';

//import cookie hooks
import {useCookies} from 'react-cookie';

import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email,setEmail] = useState('');
  const [confirmEmail,setConfirmEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');

  const navigate = useNavigate();

  //cookie hooks declaration
  const [cookie,setCookie] = useCookies(["token"]);

  const signUp = async () => {
    if(email !== confirmEmail) {
      alert("Email and confirm email fields are not same"); return;
    }; 
    
    const data = {email,password,username,firstname,lastname};
   
    const response = await makeUnauthenticatedPOSTRequest("/auth/register",data);
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
             <div className='font-bold mb-8 text-2xl'>Sign up For free to start listening.</div>
             <div className='inputRegion w-full flex item-center justify-center flex-col' >
             <TextInput 
             label="Email address" 
             placeholder="Enter Your Email" 
             className="my-6"
             value={email}
             setValue={setEmail}
             />
              <TextInput 
              label="Confirm Email address" 
              placeholder="Confirm Your Email Again" 
              className="mb-6"
              value={confirmEmail}
              setValue={setConfirmEmail}
              />
              <TextInput label="Username" placeholder="Enter Your username" 
              className="mb-6"
              value={username}
              setValue={setUsername}
              />
              <PasswordInput label="Create Password" 
              placeholder="Enter Strong Password" className="my-6"
              value={password}
              setValue={setPassword}
              />
              <div className=' flex items-center space-x-4'>
              <TextInput label="First Name" placeholder="Enter Your Firt Name" className="my-6"  
              value={firstname}
             setValue={setFirstName}
             />
              <TextInput label="Last Name" placeholder="Enter Your Last Name" className="my-6"
               value={lastname}
               setValue={setLastName}
               />
              </div>
              
              <div className='w-full flex item-center justify-center flex-col mt-12 my-8'>
                 <button className='bg-green-500 rounded-full font-semibold text-lg' onClick={(e)=>{
                  e.preventDefault();
                  signUp();
                  }}
                  >
                    Sign Up
                    </button>
              </div>
             </div>
          
              <div className='w-full border border-solid border-gray-300'></div>
              <div className='w-full my-6 flex item-center justify-center text-lg font-semibold'>
                Already have an Account?
              </div>

              <div className='border border-gray-500 w-full flex items-center justify-center text-gray-500 py-2 rounded-full font-semibold'>
               <Link to='/login'>LOG IN INSTEAD</Link> 
              </div>
              
            
               

      </div>
    </div> 
  )
}

export default Signup
