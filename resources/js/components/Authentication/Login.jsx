// import Hooks useEffect and useState
import { React, useEffect, useState } from "react";
// import Image For background login
import back from '../../assets/backgroundLogin.png';
// creation of the function
export const Login = () => {
    // creation of the Hook useEffect
    const [input, setInput] = useState();
    // creation of the Variables input login
    const inputLogin = [
        {
            id: 1,
            type: "email",
            placeholder: "enter your email",
            name: "email",
        },
        {
            id: 2,
            type: "password",
            placeholder: "enter your password",
            name: "password",
        }
    ];
    // creation of the Hook useEffect and declare setInput of useState and done param variables input login
    useEffect(() => {
        setInput(inputLogin);
    }, []);
    return (
        <>
            <form action="">
                <div className="Auth">
                    <div id="auth">
                        <div className="img" style={{ backgroundImage: `url(${back})` }}></div>
                        <div className="inputs">
                            {input?.map((input) => {
                                return (
                                    <>
                                        <div key={input.id}>
                                            <input
                                                type={input.type}
                                                name={input.name}
                                                placeholder={input.placeholder}
                                            />
                                        </div>
                                    </>
                                );
                            })}
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="remember_me"
                                                id="remember_me"
                                            />
                                            <label htmlFor="remember_me">
                                                remember me
                                            </label>
                                        </div>
                                        <div>
                                            <a href="#">forgotten password</a>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="submit"
                                            name="login"
                                            placeholder="login"
                                        />
                                    </div>
                                    <div>
                                        <h3>
                                            you don't have an account ?
                                            <a href="#">sign up</a>
                                            or 
                                            <button>just visitor</button>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
