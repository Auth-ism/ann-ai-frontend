"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage(): React.ReactElement {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <div className='bg-[#1e1e1e] flex justify-center items-center w-full h-full p-4'>
                <div
                    style={{boxShadow: "0 4px 24px rgba(0,0,0,0.2)"}}
                    className='flex flex-row w-[850px] bg-[#777076] rounded-4xl border border-[#0d0e14] overflow-hidden'
                >
                    {/* Left Side */}
                    <div className='flex-[1] bg-[#e0e0e0] flex items-center justify-center p-8'>
                        <Image
                            src="/annai.gif" // örnek GIF veya PNG
                            alt="Register illustration"
                            width={250}
                            height={250}
                            className='rounded-2xl'
                            unoptimized
                        />
                    </div>

                    {/* Right Side */}
                    <div className='flex-[1.2] p-8'>
                        <div className='text-right text-[14px] text-[#f0f0f0]'>
                            Already have an account?{" "}
                            <a href="/login" className='text-[#a9e0ff] underline'>
                                Sign in
                            </a>
                        </div>

                        <h2 className='text-[28px] font-bold text-white mt-6 mb-2'>
                            Create Account
                        </h2>
                        <p className='text[#e0e0e0] mb-6'>
                            Join us and start your journey!
                        </p>

                        <form className='flex flex-col gap-4'>
                            <input
                                type="text"
                                placeholder="Enter username"
                                style={inputStyle}
                            />

                            <input
                                type="email"
                                placeholder="Enter email"
                                style={inputStyle}
                            />

                            {/* Password */}
                            <div className='relative w-full'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    style={inputStyle}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={iconButtonStyle}
                                >
                                    {showPassword ? <EyeOff size={20} color="#ccc" /> : <Eye size={20} color="#ccc" />}
                                </button>
                            </div>

                            {/* Confirm Password */}
                            <div className='relative w-full'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm password"
                                    style={inputStyle}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={iconButtonStyle}
                                >
                                    {showConfirmPassword ? <EyeOff size={20} color="#ccc" /> : <Eye size={20} color="#ccc" />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className='bg-[#2C2C2C] p-3 rounded-2xl text-[#fff] font-semibold text-[18px] cursor-pointer border border-[#777076]'>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

const inputStyle: React.CSSProperties = {
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid #0d0e14",
    background: "#60515c",
    color: "#fff",
    fontSize: 16,
    width: "100%",
    outline: "none",
    boxSizing: "border-box",
};

const iconButtonStyle: React.CSSProperties = {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    padding: 0,
};
