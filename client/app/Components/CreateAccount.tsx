import React, { useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const CreateAccount = () => {
  function handleGoogleLogin(cred: CredentialResponse) {
    useCallback(() => {}, []);
  }

  return (
    <div className="flex flex-col justify-center items-center py-6">
      <div>
        <GoogleLogin onSuccess={(cred) => console.log(cred)} />
      </div>
    </div>
  );
};

export default CreateAccount;
