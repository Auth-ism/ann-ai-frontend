'use client'

import AnimatedColorfulText from "@/coponents/animatedColorfulText";
import AnimatedPlaceholderInput from "@/coponents/animatedPlaceholderInput";
import {useState} from "react";


export default function Home() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [step, setStep] = useState("login");
    return (
        <main className="flex min-h-screen flex-col items-center gap-10 p-24">
            <div>
                <AnimatedColorfulText text={"Ann-AI"}/>
                <p className="text-2xl" style={{color: "rgba(250,250,250,0.45)"}}>Start chatting with your feature.</p>
            </div>
            <form action="/api/login" className={"backdrop-blur-lg bg-white/10 border border-none rounded-2xl drop-shadow-lg flex flex-col gap-5 w-[40%] p-4"}>
                {step === "login" && <>
                    <h1 style={{
                        color: "rgba(250,250,250,0.45)",
                        fontWeight: "bold",
                        fontSize: "2rem",
                    }}>
                        Log in</h1>
                    <AnimatedPlaceholderInput type={"email"} placeholder={"Email"} onChange={setEmailValue}
                                              value={emailValue}/>
                    <AnimatedPlaceholderInput type={"password"} placeholder={"Password"} onChange={setPasswordValue}
                                              value={passwordValue}/>
                    <div className="flex flex-row justify-between items-center">
                        <a onClick={() => setStep("forgor")}
                           className={"text-[rgba(250,250,250,0.43)] hover:text-[rgba(250,250,250,0.53)] cursor-pointer"}>Forgor
                            your password?</a>
                        <button type="submit"
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300">Login
                        </button>
                    </div>
                </>}
                {step === "forgor" && <>
                    <h1 style={{
                        color: "rgba(250,250,250,0.45)",
                        fontWeight: "bold",
                        fontSize: "2rem",
                    }}>
                        Forgor Password</h1>
                    <AnimatedPlaceholderInput type={"email"} placeholder={"Email"} onChange={setEmailValue}
                                              value={emailValue}/>
                    <div className="flex flex-row justify-between items-center">
                        <a onClick={() => setStep("login")}
                           className={"text-[rgba(250,250,250,0.43)] hover:text-[rgba(250,250,250,0.53)] cursor-pointer"}>Back
                            to login</a>
                        <button type="submit"
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300">Send
                            Reset Link
                        </button>
                    </div>
                </>}
            </form>
        </main>
    );
}