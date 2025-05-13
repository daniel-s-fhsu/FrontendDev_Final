import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormHeader from "../components/form/FormHeader";
import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";
import BasicLink from "../components/BasicComponents/BasicLink";
import { UserAuth } from "../UserContext";



export default function SignInForm() {
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { createUser, login } = UserAuth();
    const navigate = useNavigate();

    const onFormSwitch = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setShowRegisterForm(!showRegisterForm);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        //const data = {name, email, password, confirmPassword };

        try {
            await createUser(email, password, name).then((userCredential) => {
                // Sign in success
                const user = userCredential.user;
                
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await login(email, password).then((userCredential) => {
                const user = userCredential.user;

            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    const renderForm = () => {
        if (showRegisterForm) {
            return (<>
                <FormHeader title="Register" />
                <form className="my-5" onSubmit={handleOnSubmit}>
                    <FormInput
                        description="Name"
                        type="text"
                        className="nameInput"
                        placeholder="Enter your full name"
                        id="name" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormInput
                        description="Email"
                        type="email"
                        className="email-input"
                        placeholder="Enter your email"
                        id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        description="Password"
                        type="password"
                        className="password-input"
                        placeholder="Enter your password"
                        id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormInput
                        description="Confirm Password"
                        type="password"
                        className="password-input"
                        placeholder="Confirm your password"
                        id="cpassword" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FormButton title="Register" />
                    <div className="text-center">
                        <p className="text-sm">Already have an account?</p>
                        <BasicLink linkUrl="#" id="registerLink" handleClick={onFormSwitch}>
                            Back to Login
                        </BasicLink>
                    </div>

                </form>
            </>);
        }

        return (
            <div>
                <FormHeader title="Login" />
                <form className="my-5" onSubmit={handleSignIn}>
                    <FormInput
                        description="Email"
                        type="email"
                        className="email-input"
                        placeholder="Enter your email"
                        id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        description="Password"
                        type="password"
                        className="password-input"
                        placeholder="Enter your password"
                        id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormButton title="Log In" />
                    <div className="text-center">
                        <p className="text-sm">Don't have an account?</p>
                        <BasicLink linkUrl="#" id="registerLink" handleClick={onFormSwitch}>
                            Register Here!
                        </BasicLink>
                    </div>

                </form>
            </div>
        );
    };

    return (
        <div className="flex justify-center items-start pt-24 px-4">
          <div className="w-full max-w-sm p-6 border border-gray-200 rounded shadow-sm bg-[#402d4a]">
            {renderForm()}
          </div>
        </div>
      );

};