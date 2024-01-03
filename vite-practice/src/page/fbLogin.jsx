import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";

const FbLogin = () => {
  return (
    <div>
      <LoginSocialFacebook
        appId="1269978800551856"
        onResolve={(e) => console.log("Resolve", e)}
        onReject={(e) => console.log("Reject", e)}
      >
        <button style={{ marginTop: "1rem" }}>Facebook Login</button>
      </LoginSocialFacebook>

      <div style={{border:"1px solid", width:"50%",margin:"auto" }}>
        <h2>Facebook Auth Steps-</h2>
        <ul style={{textAlign: "left"}}>
            <li>Search Create An App Facebook Developer in google.</li>
            <li>Register account as a META Developer or logged in your facebook account.</li>
            <li>Move to META Developer account.</li>
            <li>Verify your account if you are creating new account.</li>
            <li>Create an app</li>
            <li>Move to app dashboard.</li>
            <li>Install react-js social login npm package.</li>
            <li>Import { "LoginSocialFacebook" } from react-js social login npm.</li>
            <li>Try this <LoginSocialFacebook appId="" onResolve={(e) => console.log("Resolve", e)} onReject ={(e) => console.log("Reject", e)} ></LoginSocialFacebook></li>
            <li>Finish</li>
        </ul>
      </div>
    </div>
  );
};

export default FbLogin;
