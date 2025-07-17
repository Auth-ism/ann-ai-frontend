"use client";
import React, { useState } from "react";
import Image from "next/image";
import {Eye,EyeClosed} from "lucide-react";

export default function WebLoginPage(): React.ReactElement {
    const [showPassword, setShowPassword] = useState(false);

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
                    {/* Left Side (Illustration) */}
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
                            src="/annai.gif" // public klasörüne ekle
                            alt="Login illustration"
                            width={250}
                            height={250}
                            style={{ borderRadius: 16 }}
                        />
                    </div>

                    {/* Right Side (Form) */}
                    <div style={{ flex: 1.2, padding: 32 }}>
                        <div style={{ textAlign: "right", fontSize: 14, color: "#f0f0f0" }}>
                            Not a member?{" "}
                            <a href="/register" style={{ color: "#a9e0ff", textDecoration: "underline" }}>
                                Register now
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
                            Hello Again!
                        </h2>
                        <p style={{ color: "#e0e0e0", marginBottom: 24 }}>
                            Welcome back you've been missed!
                        </p>

                        <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <input
                                type="text"
                                placeholder="Enter username"
                                style={{
                                    padding: "12px 16px",
                                    borderRadius: 12,
                                    border: "1px solid #0d0e14",
                                    background: "#60515c",
                                    color: "#fff",
                                    fontSize: 16,
                                    outline: "none",
                                }}
                            />

                            <div style={{  position: "relative", width: "100%" }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    style={{
                                        padding: "12px 16px",
                                        borderRadius: 12,
                                        border: "1px solid #0d0e14",
                                        background: "#60515c",
                                        color: "#fff",
                                        fontSize: 16,
                                        width: "100%",
                                        outline: "none",
                                        boxSizing: "border-box",
                                    }}
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: "absolute",
                                        right: 12,
                                        top: 12,
                                        cursor: "pointer",
                                        color: "#ccc",
                                    }}
                                >
                  {showPassword ? <EyeClosed size={20} color="#ccc" /> : <Eye size={20} color="#ccc" />}
                </span>
                            </div>

                            <a
                                href="#"
                                style={{
                                    color: "#fff",
                                    fontSize: 14,
                                    textDecoration: "underline",
                                    alignSelf: "flex-end",
                                }}
                            >
                                Recovery Password
                            </a>

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
                                Sign In
                            </button>

                            <p style={{ color: "#ccc", textAlign: "center", marginTop: 8 }}>
                                Or continue with
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 16,
                                }}
                            >
                                {["google", "apple", "facebook"].map((provider) => (
                                    <button
                                        key={provider}
                                        style={{
                                            background: "#fff",
                                            borderRadius: 8,
                                            padding: 10,
                                            border: "none",
                                            width: 40,
                                            height: 40,
                                            fontWeight: 600,
                                            fontSize: 18,
                                            cursor: "pointer",
                                        }}
                                    >
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
