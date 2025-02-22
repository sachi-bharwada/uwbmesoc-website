import React, {useState} from 'react';
import './ComingSoon.css'; 
import star1 from './images/star1.png'; 
import star2 from './images/star2.png';
import asterisk from './images/asterisk.png';
import swirl from './images/swirl.png';

function ComingSoon(){
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const handleNotifyClick = () => {
        setShowInput(true); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const sheetUrl = 'https://script.google.com/macros/s/AKfycbz5pnWLijwO9Vj6cdgisNpnjePSLULUHfJdzLYwySQF3liOlJzF4rmGHRvkf9yFRfVS/exec'; // Replace with your Google Sheets URL
        const data = new FormData();
        data.append('email', email); 

        fetch(sheetUrl, {
            method: 'POST',
            body: data,
            mode: 'no-cors', 
        })
        .then(() => {
            setSubmitted(true); 
            setEmail(''); 
        })
        .catch((error) => console.error('Error:', error));
    };

    const coming = "COMING".split('').map((letter, index) => (
        <span className="letter" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
        </span>
    ));

    const soon = "SOON!".split('').map((letter, index) => (
        <span className="letter" key={index + 6} style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
            {letter}
        </span>
    ));

    return (
        <div className="app">
            <main className="app-content">
                <div className="image-container">
                    <img src={swirl} alt="Purple Swirl" className="purpleSwirl" />
                </div>
                <h1 className="coming-soon">
                    {coming}
                    <br />
                    {soon}
                </h1>
                <div className="image-container">
                    <img src={star1} alt="Purple and Yellow Stars" className="star1" />
                </div>
                <div className="image-container">
                    <img src={star2} alt="Purple and Yellow Stars" className="star2" />
                    <img src={asterisk} alt="Yellow Asterisk" className="asterisk" />
                </div>
                <p className="description">
                    Exciting things are on the way! 🚀 We're working hard behind the scenes to bring you something amazing. Stay tuned for updates and be the first to know when we go live!
                </p>
                {!showInput ? (
                    <button className="notify-button" onClick={handleNotifyClick}>Notify me!</button>
                ) : (
                    <form onSubmit={handleSubmit} className="notify-form">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="email-input"
                        />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                )}
                {submitted && <p>Thank you for signing up!</p>} 
            </main>
            <footer className="app-footer">
                <p>&copy; 2024: UW BME SOCIETY</p>
            </footer>
        </div>
    );
}

export default ComingSoon;