import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const scriptURL = "https://script.google.com/macros/s/AKfycbwiBa9Vdc_wWdjvhNqYswChtR4K8hf5c_q4LRGGElh3Mvi2eHM--u8S-mOJoX5IZMFPFw/exec"; // Replace this with the Web App URL

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("firstName", firstName);
        data.append("lastName", lastName);
        data.append("email", email);
        data.append("message", message);

        fetch(scriptURL, {
            method: "POST",
            body: data,
            mode: "no-cors", // Bypasses CORS issues
        })
        .then(() => {
            setSubmitted(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
        })
        .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="contact-container">
            <h2>Chat with us!</h2>
            {submitted && <p className="success-message">Your message has been sent! We will get back to you as soon as possible!</p>}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="name-fields">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        required
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;