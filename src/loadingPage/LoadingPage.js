import React, { useState } from 'react';
import './loadingPage.css';

function LoadingPage() {
    const [selectedMessage, setSelectedMessage] = useState(null);
    const loadingMess = [
        {icon: 'https://img.icons8.com/wired/100/000000/vagina.png', message: 'pussy', type: 'pulse'},
        {icon: 'https://img.icons8.com/wired/100/000000/penis.png', message: 'dick', type: 'rotate'}];
    const randomNumber = Math.floor(Math.random() * loadingMess.length);
    return(
        <div className="loading-container">
            <div >
                <img className={loadingMess[randomNumber].type} src={loadingMess[randomNumber].icon}/>
            </div>
            <div className="loading-text">
                Eat a {loadingMess[randomNumber].message}
            </div>
        </div>
    );
}

function randomize() {
    
}

export default LoadingPage;