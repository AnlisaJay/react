import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({setPage, setModalBox}) {

    /* function changePage(){
        setPage('Basket')
    }
*/
  return (
    <div className="Header">
        <ul>
            <li onClick={() => setPage('Main')}>Главная</li>
            <li onClick={() => setPage('Basket')}>Корзина</li>
        </ul>
        <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;
