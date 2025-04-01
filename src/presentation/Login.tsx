import logo from "../assets/logo.png";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { useState } from "react";
import { loginStart, loginSuccess, loginFailure } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [email,setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");


    const validateEmail = (value: string) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      };

    const handleEmailFocus = () => {
        setEmailError("");
    };

    const handlePasswordFocus = () => setPasswordError("");
    
    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
          setEmailError("Email không hợp lệ!");
        }
      };
    
    const handlePasswordBlur = () => {
        if (!password.trim()) {
            setPasswordError("Mật khẩu không được để trống!");
        }
    };

    const handleLogin = async () => {
        if (!validateEmail(email)) {
          setEmailError("Email không hợp lệ!");
          return;
        }
        if (!password.trim()) {
          setPasswordError("Mật khẩu không được để trống!");
          return;
        }
    
        dispatch(loginStart());
        
        try {
          const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            const data = await response.json();
            dispatch(loginSuccess({ email, response: { name: data.user.fullName, access_token: data.access_token } }));
            navigate("/absent-application");
          } else {
            const errorData = await response.json();
            dispatch(loginFailure(errorData.error));
          }
        } catch (error) {
          dispatch(loginFailure("Có lỗi xảy ra!"));
        }
      };
    

    return (
        <div className="flex px-20 gap-20 items-end pt-20">
            <div className="flex flex-col logo w-1/2 gap-12">
                <img src = {logo} alt = "logo" className="w-2/3 pt-5"/>
                <div className="text-[#757F8E]">{t("description")}</div>
            </div>
            <div className="form w-1/2 px-[49px] py-12 bg-white">
                <form className="flex flex-col gap-5">
                    <div className="">
                        <label className="block text-sm/6 font-medium">Email</label>
                        <div className="mt-2">
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                className="py-1.5 px-3 border-2 rounded-[4px] w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                    </div>
                    <div className="">
                        <label className="block text-sm/6 font-medium">Password</label>
                        <div className="mt-2">
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className="py-1.5 px-3 border-2 rounded-[4px] w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                            />
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        </div>
                    </div> 
                    <button 
                          type="button" 
                          className="w-fit text-sm/6 px-[13px] py-[7px] text-white bg-[#4154F1] rounded-[4px]"
                          onClick={handleLogin}
                    >
                      Sign in
                    </button>
                    <a href="/forgot-password" className="text-[#6C757D] hover:underline">
                        Forgot Password?
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Login;
