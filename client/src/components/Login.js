import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
}

const Login = () => {
  let [formValues, setFormValues] = useState(initialFormValues);

  let history = useHistory();

  const onChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }
  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', formValues)
      .then(res => window.localStorage.setItem('token', res.data.payload))
      .catch(err => console.log(err))
    history.push('/bubbles')
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form className="login-form" onSubmit={onSubmit}>
        <input 
        type='text'
        name='username'
        placeholder='enter username...'
        value={formValues.username}
        onChange={onChange}
        />
        <input 
        type='text'
        name='password'
        placeholder='enter password...'
        value={formValues.password}
        onChange={onChange}
        />
        <button>submit</button> 
      </form>
    </>
  );
};

export default Login;
