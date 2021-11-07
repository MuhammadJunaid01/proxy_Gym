import React from "react";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import UseFirebase from "./../../hooks/useFirebase/UseFirebase";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { LoginWithGoole, user, setUser, error, setError } = UseFirebase();
  console.log("login", user);
  const handleGoogleLogin = () => {
    LoginWithGoole()
      .then((result) => {
        setUser(result.user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.

        // ...
      });
  };
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <br />
        <input {...register("lastName")} />
        <br />

        <input type="number" {...register("age")} />
        <br />

        <input type="submit" />
      </form>
      <div>
        <h1>
          login With Google
          <br />
          <GoogleIcon
            onClick={handleGoogleLogin}
            style={{
              color: "red",
              backgroundColor: "gainsboro",
              padding: "20px",
              borderRadius: "10px",
            }}
          ></GoogleIcon>
        </h1>
      </div>
    </div>
  );
};

export default Login;
