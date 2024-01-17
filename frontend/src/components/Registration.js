import React from 'react';

function Registration() {
  const api = 'http://localhost:9001/registration';

  function Reg() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const data = {
      login: login,
      password: password,
      email: email
    }

    console.log(data);

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
    }) 

  }

  return (
    <>
      <h1>Регистрация</h1>
      <input id='login' type='text' placeholder='Логин' />
      <input id='password' type='password' placeholder='Пароль' />
      <input id='email' type='email' placeholder='Почта' />
      <button onClick={Reg}>Сохранить</button>
    </>
  )
}

export default Registration;
