import React, { useState } from 'react'
import { auth } from './firebaseConfig';
import { ProviderId, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const PhoneNumberLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [user, setUser] = useState(null);

    // Send Verification code-
    const handleSendVerificationCode = async () => {
        try {
            // const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            //     size: 'normal', // or 'normal'
            //     callback: () => {
            //         // reCAPTCHA solved, send verification code
            //         signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
            //             .then((result) => {
            //                 setVerificationId(result.verificationId);
            //                 console.log('Verification code sent.', result);
            //             })
            //             .catch((error) => {
            //                 console.log('Error sending verification code:', error);
            //             });
            //     },
            // });

            // recaptchaVerifier.render();
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                    signInWithPhoneNumber(auth, phoneNumber)
                        .then((result) => {
                            setVerificationId(result.verificationId);
                            console.log('Verification code sent.', result);
                        })
                        .catch((error) => {
                            console.log('Error sending verification code:', error);
                        });
                }
              });

        } catch (error) {
            // console.log('Error initializing reCAPTCHA:', error);
            const result = await signInWithPhoneNumber(auth, phoneNumber);
            console.log(result);
        }
    };


    return (
        <div>
        <h2>Phone Number Login</h2>
        <div id="recaptcha-container"></div>
        <div>
            <input
                type="number"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSendVerificationCode}>Send Verification Code</button>
        </div>
        {/* {verificationId && (
            <div>
                <input
                    type="text"
                    placeholder="Enter verification code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                />
                <button onClick={handleVerifyCode}>Verify Code</button>
            </div>
        )}
        {user && (
            <div>
                <p>Authenticated User:</p>
                <p>{user.uid}</p>
                <p>{user.phoneNumber}</p>
            </div>
        )} */}
    </div>
    )
}

export default PhoneNumberLogin
