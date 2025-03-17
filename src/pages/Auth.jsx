import {useDispatch} from "react-redux";
import {loginSuccess} from "../features/authSlice.js";

import axios from "axios";

import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router";
import {getPosts} from "../features/feedSlice.js";

const Auth = () => {
    const dispatch = useDispatch();
    const {handleSubmit, register, reset, formState: {errors}} = useForm();
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const url = isSignUp
                ? "http://49.13.31.246:9191/signup"
                : "http://49.13.31.246:9191/signin";

            const body = isSignUp
                ? {
                    username: data.username,
                    password: data.password,
                    confirm_password: data.confirm_password,
                }
                : {
                    username: data.username,
                    password: data.password,
                };

            const response = await axios.post(url, body, {
                headers: {"Content-Type": "application/json"},
            });

            console.log("Ответ сервера:", response.data);

            if (response.data.token) {
                dispatch(loginSuccess(response.data.token));
                reset();
                navigate("/feed");
            }
            if (response.data.jwt) {
                dispatch(loginSuccess(response.data.jwt));
                reset();
                navigate("/feed");
            }
        } catch
            (error) {
            console.error("Ошибка запроса:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex flex-col items-center text-white gap-3">
            <h1 className="text-7xl text-teal-400 font-bold m-20">
                SwapLink
            </h1>
            <h1 className="text-2xl font-bold">
                {isSignUp ? "SignUp" : "SignIn"}
            </h1>
            <form
                className="flex flex-col items-center gap-3"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="border border-teal-400 rounded-lg py-1 px-2"
                    type="text"
                    placeholder="username..."
                    {...register("username", {required: "username required"})}
                />
                {errors.username && <span className="text-red-500">{errors.username.message}</span>}

                <input
                    className="border border-teal-400 rounded-lg py-1 px-2"
                    type="password"
                    placeholder="pasword..."
                    {...register("password", {required: "password required"})}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                {isSignUp && (
                    <>
                        <input
                            className="border border-teal-400 rounded-lg py-1 px-2"
                            type="password"
                            placeholder="confirm password..."
                            {...register("confirm_password", {required: "confirm password..."})}
                        />
                        {errors.confirm_password &&
                            <span className="text-red-500">{errors.confirm_password.message}</span>}
                    </>
                )}
                <button
                    // onClick={() => dispatch(getPosts())}
                    className="bg-zinc-800 text-teal-400 rounded-2xl py-2 px-4 cursor-pointer"
                    type="submit"
                >
                    {isSignUp ? "SignUp" : "SignIn"}
                </button>
            </form>
            <button
                onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? `Already have an account? SignIn` : `Dont have any account? SignUp`}
            </button>
        </div>
    );
};

export default Auth;

