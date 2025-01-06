import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import { Button, Input, Logo } from "../components";
import { useDispatch } from "react-redux";
import authservices from "../appwrite/auth";
import {useForm } from "react-hook-form";

function login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authservices.login();
      if (session) {
        const userdata = await authservices.getcurrentuser();
        if (userdata) {
          dispatch(authlogin(userdata));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 
        rounded-xl p-10 border border-black/10`}>
      <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl
         font-bold leading-tight">Sign in to your account</h2>
         <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium tex
                        t-primary transition-all duration-200 
                        hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}
        className="mt-8" >
            <div className="space-y-5">
              <Input label = "email"
                    placeholder="Enter your email"
                    type="email"
                    {...register('email' , {
                      required: true,
                      
                      
                    }) }
              />
              <Button
              type="submit"
              className="w-full"
              > Signin</Button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default login;
