import React, { useState } from 'react';

import './style.css';

const SignupFormComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const _handleEmailChange = e => {
        setEmail(e.target.value || '');
    };

    const _handlePasswordChange = e => {
        setPassword(e.target.value || '');
    };

    const _handleSubmit = e => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Invalid email.');
        } else if (password.length < 8) {
            setError('Weak password.');
        } else {
            setError(false);
            alert('Form Submitted');
        }
    };

    return (
        <div className="signup-container">
            <div className="top-space">
                <div className="circle" />
            </div>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        email
                    </label>
                    <input
                        id="email"
                        className="form-input"
                        type="email"
                        autoComplete="off"
                        value={email}
                        onChange={_handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        password
                    </label>
                    <input
                        id="password"
                        className="form-input"
                        type="password"
                        autoComplete="off"
                        value={password}
                        onChange={_handlePasswordChange}
                    />
                </div>
                <div className="form-button">
                    <button onClick={_handleSubmit}>SIGN UP</button>
                </div>
                {error && <div className="form-error">{error}</div>}
            </form>
        </div>
    );
};

export default SignupFormComponent;
