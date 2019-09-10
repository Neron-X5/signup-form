import React from 'react';

import SignupForm from '../signup-form';

import './style.css';

const SignupContainerComponent = () => {
    return (
        <main className='main-container'>
            <div className='sidebar' />
            <div className='signup-form'>
                <SignupForm />
            </div>
        </main>
    );
};

export default SignupContainerComponent;
