import React from 'react';
import './help.css';
import Sidebar from '../../components/sidebar/Sidebar';

function Help() {
  return (
    <div className='help'>
        <div className='helpWrapper'>
            <div className='helpTitle'>
                <span className='settingUpdateTitle'>Help User</span>
            </div>  
            <p>Welcome to the Food Donation Management Application! This documentation will guide you through the process of managing the application effectively. The application is designed to facilitate the management of food donations, connecting donors with organizations and individuals in need. By following the instructions provided, you'll be able to navigate the application smoothly and make the most out of its features.</p>
            <h3>User Registration</h3>
            <p>To use the Food Donation Management Application, you need to create an account. Follow these steps to register as a user:</p>
            <p>
                <ol>
                    <li>Click on the "Sign Up" or "Register" button.</li>
                    <li>Fill out the registration form with your personal details, including name, email address, and password.</li>
                    <li>Read and accept the terms and conditions.</li>
                    <li>Click on the "Register" or "Create Account" button.</li>
                </ol>
            </p>
            <h3>User Login</h3>
            <p>Once you have registered, you can log in to the Food Donation Management Application using your credentials. Follow these steps to log in:</p>
            <p>
                <ol>
                    <li>Click on the "Log In" or "Sign In" button.</li>
                    <li>Enter your email address and password in the provided fields.</li>
                    <li>Click on the "Log In" or "Sign In" button.</li>
                </ol>
            </p>
            <h3> Donating Food</h3>
            <p>To donate food through the application, follow these steps:</p>
            <p>
                <ol>
                    <li>Log in to the application using your credentials.</li>
                    <li>Click on the "Donate Food" or "Make a Donation" button.</li>
                    <li>Fill out the donation form with the relevant information, including the type of food, quantity, expiration date, and any special instructions.</li>
                    <li>Click on the "Submit" or "Donate" button.</li>
                    <li>Your donation will be listed on the platform, and interested organizations or individuals can request it.</li>
                </ol>
            </p>
            <h3>Account Settings</h3>
            <p>You can manage your account settings and profile information through the following steps:</p>
            <p>
                <ol>
                    <li>Log in to the application using your credentials.</li>
                    <li>Click on the "Account Settings" or "Profile" section.</li>
                    <li>Update your personal information, such as name, email address, and contact details.</li>
                    <li>Change your password if needed.</li>
                    <li>Save your changes to update your account information.</li>
                </ol>
             </p>
        </div>
        <Sidebar/>
    </div>
  );
}

export default Help;
