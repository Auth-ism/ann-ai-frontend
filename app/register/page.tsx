"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage(): React.ReactElement {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div
                style={{
                    background: "#1e1e1e",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    minHeight: "100vh",
                    fontFamily: "Poppins, sans-serif",
                    padding: 16,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: 850,
                        background: "#777076",
                        borderRadius: 32,
                        border: "1px solid #0d0e14",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                        overflow: "hidden",
                    }}
                >
                    {/* Left Side */}
                    <div
                        style={{
                            flex: 1,
                            background: "#e0e0e0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 32,
                        }}
                    >
                        <Image
                            src="/annai.gif" // örnek GIF veya PNG
                            alt="Register illustration"
                            width={250}
                            height={250}
                            style={{ borderRadius: 16 }}
                            unoptimized
                        />
                    </div>

                    {/* Right Side */}
                    <div style={{ flex: 1.2, padding: 32 }}>
                        <div style={{ textAlign: "right", fontSize: 14, color: "#f0f0f0" }}>
                            Already have an account?{" "}
                            <a href="/login" style={{ color: "#a9e0ff", textDecoration: "underline" }}>
                                Sign in
                            </a>
                        </div>

                        <h2
                            style={{
                                fontSize: 28,
                                fontWeight: 700,
                                color: "#ffffff",
                                marginTop: 24,
                                marginBottom: 8,
                            }}
                        >
                            Create Account
                        </h2>
                        <p style={{ color: "#e0e0e0", marginBottom: 24 }}>
                            Join us and start your journey!
                        </p>

                        <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                            <div style={{ position: "relative", width: "100%" }}>
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
                            <div style={{ position: "relative", width: "100%" }}>
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
                                style={{
                                    background: "#2C2C2C",
                                    padding: "12px",
                                    borderRadius: 12,
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: 18,
                                    cursor: "pointer",
                                    border: "1px solid #777076",
                                }}
                            >
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
