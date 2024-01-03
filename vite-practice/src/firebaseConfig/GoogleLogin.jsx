import React, { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";
import GooglePayButton from "@google-pay/button-react";

const GoogleLogin = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    idToken: "",
    photoUrl: "",
  });

  // Log in -
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, idToken, photoUrl } = result._tokenResponse;
      setUser({ displayName, email, idToken, photoUrl });
      console.log("signIn", result);
    } catch (error) {
      console.log(error);
    }
  };

  // Log out -
  const handleLogout = () => {
    signOut(auth);
    setUser({ displayName: "", email: "", idToken: "", photoUrl: "" });
  };

  useEffect(() => {
    // checkOffline();
    getLocation();
  }, []);

  // Check Offline-
  const checkOffline = async () => {
    try {
      const result = await axios.get("http://localhost:8000");
      console.log(result);
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") {
        alert("Server is off");
      }
    }
  };

  // Check Location-
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
    });
  };

  return (
    <>
      <div>
        <h2>Sign In With Google</h2>
        {Object.values(user)?.every((value) => value === "") ? (
          <button onClick={handleGoogleSignIn}>
            <img
              src="https://img.icons8.com/?size=1x&id=17949&format=png"
              alt=""
            />
          </button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
        <div>
          <div>
            <img src={user?.photoUrl} alt={user?.displayName} />
          </div>
          <div>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>{user?.idToken}</p>
          </div>
        </div>
      </div>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "1",
            currencyCode: "USD",
            countryCode: "US",
          },
          shippingAddressRequired: false,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log(paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("paymentData " + paymentData);
          return { transactionState: "SUCCESS" };
        }}
        existingPaymentMethodRequired="false"
        buttonColor="black"
        buttonType="buy"
      />
    </>
  );
};

export default GoogleLogin;
