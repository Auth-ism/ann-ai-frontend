"use client";
import React, { useState } from "react";
import Image from "next/image";
import {Eye,EyeClosed} from "lucide-react";

export default function WebLoginPage(): React.ReactElement {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className='bg-[#1e1e1e] flex justify-center items-center w-full min-h-screen p-4'>
                <div
                    style={{boxShadow: "0 4px 24px rgba(0,0,0,0.2)"}}
                    className='flex flex-row w-[850px] bg-[#777076] rounded-4xl border border-[#0d0e14] overflow-hidden'
                >
                    {/* Left Side (Illustration) */}
                    <div className='flex-1/2 bg-[#e0e0e0] flex items-center justify-center p-8'>
                        <Image
                            src="/annai.gif" // public klasörüne ekle
                            alt="Login illustration"
                            width={250}
                            height={250}
                            className='rounded-2xl'
                        />
                    </div>

                    {/* Right Side (Form) */}
                    <div className='flex-[1.2] p-8'>
                        <div className='text-right text-[14px] text-[#f0f0f0]'>
                            Not a member?{" "}
                            <a href="/register" className='text-[#a9e0ff] underline'>
                                Register now
                            </a>
                        </div>

                        <h2 className='text-[28px] font-bold text-white mb-2 mt-6'>
                            Hello Again!
                        </h2>
                        <p className='text-[#e0e0e0] mb-6'>
                            Welcome back you've been missed!
                        </p>

                        <form className='flex flex-col gap-4'>
                            <input
                                type="text"
                                placeholder="Enter username"
                                className='p-[12px_16px] rounded-xl border border-[#0d0e14] bg-[#60515c] text-[#fff] text-[16px] outline-none'
                            />

                            <div className='relative w-full'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className='p-[12px_16px] rounded-xl border border-[#0d0e14] bg-[#60515c] text-[#fff] text-[16px] outline-none w-full box-border'
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-3 top-3 cursor-pointer text-[#ccc]'
                                >
                  {showPassword ? <EyeClosed size={20} color="#ccc" /> : <Eye size={20} color="#ccc" />}
                </span>
                            </div>

                            <a href="/forgot-password"
                                className='text-[#fff] text-[14px] underline self-end'>
                                Recovery Password
                            </a>

                            <button
                                type="submit"
                                className='bg-[#2C2C2C] text-[#fff] font-semibold text-[18px] rounded-xl border border-[#777076] cursor-pointer p-3'>
                                Sign In
                            </button>

                            <p className='text-[#ccc] text-center mt-2'>
                                Or continue with
                            </p>

                            <div className='flex justify-center gap-4'>
                                {["google", "apple", "facebook"].map((provider) => (
                                    <button
                                        key={provider}
                                        className='bg-[#fff] rounded-lg p-[10px] border-none w-[40px] h-[40px] font-semibold text-[18px] cursor-pointer'>
                                        {provider === "google" && "G"}
                                        {provider === "apple" && "A"}
                                        {provider === "facebook" && "f"}
                                    </button>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
