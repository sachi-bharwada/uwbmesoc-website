import React,{useState} from 'react';
import './Home.css';
import star1 from '../images/star1.png';
import star2 from '../images/star2.png';
import asterisk from '../images/asterisk.png';
import swirl from '../images/swirl.png';

function Home(){
  const [email,setEmail] = useState('');
  const [submitted,setSubmitted] = useState(false);
  const [showInput,setShowInput] = useState(false);

  const handleNotifyClick = () => {
    setShowInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sheetUrl = 'https://script.google.com/macros/s/AKfycbz5pnWLijwO9Vj6cdgisNpnjePSLULUHfJdzLYwySQF3liOlJzF4rmGHRvkf9yFRfVS/exec';
    const data = new FormData();
    data.append('email',email);

    fetch(sheetUrl,{
      method:'POST',
      body:data,
      mode:'no-cors'
    }).then(() => {
      setSubmitted(true);
      setEmail('');
    }).catch((error) => console.error('Error:',error));
  };

  const welcome = 'WELCOME TO'.split('').map((letter,index) => (
    <span
      className="letter"
      key={index}
      style={{animationDelay:`${index * 0.1}s`}}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  const society = 'BME SOCIETY!'.split('').map((letter,index) => (
    <span
      className="letter"
      key={index + 20}
      style={{animationDelay:`${(index + 20) * 0.1}s`}}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  return (
    <div className="app">
      <main className="app-content">
        <div className="image-container">
          <img src={swirl} alt="Purple Swirl" className="purpleSwirl" />
        </div>
        <h1 className="coming-soon">
          {welcome}
          <br />
          {society}
        </h1>
        <div className="image-container">
          <img src={star1} alt="Purple and Yellow Stars" className="star1" />
        </div>
        <div className="image-container">
          <img src={star2} alt="Purple and Yellow Stars" className="star2" />
          <img src={asterisk} alt="Yellow Asterisk" className="asterisk" />
        </div>
        <p className="description">
          Exciting things are on the way! 🚀 We're working hard behind the scenes to bring you something amazing. Tap Notify Me to be the first to hear about upcoming events and updates!
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
        <p>&copy; 2026: UW BME SOCIETY</p>
      </footer>
    </div>
  );
}

export default Home;
