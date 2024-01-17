import React from 'react';

function Login() {

  const api = 'http://localhost:9001/login';
  
    function Log(){
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const data = {
            login: login,
            password: password
        }
       
        console.log(data)
        fetch(api, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then((result) => {
          console.log(result)
          localStorage.setItem('token', result.token)
        }) 

    }

  return (
    <>
      <h1>Логин</h1>
      <input type='text' id='login' placeholder='Логин' />
      <input type='password' id='password' placeholder='Пароль' />
      <button onClick={Log}>Войти</button>
    </>
  );
}

export default Login;
