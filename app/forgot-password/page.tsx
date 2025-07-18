"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ForgotPasswordPage(): React.ReactElement {
    const [emailSent, setEmailSent] = useState(false);

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
                        width: 750,
                        background: "#777076",
                        borderRadius: 32,
                        border: "1px solid #0d0e14",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                        overflow: "hidden",
                    }}
                >
                    {/* Left Side Illustration */}
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
                            src="/annai.gif" // örnek gif veya png ekle
                            alt="Forgot password illustration"
                            width={200}
                            height={200}
                            style={{ borderRadius: 16 }}
                            unoptimized
                        />
                    </div>

                    {/* Right Side */}
                    <div style={{ flex: 1.2, padding: 32 }}>
                        <h2
                            style={{
                                fontSize: 28,
                                fontWeight: 700,
                                color: "#ffffff",
                                marginBottom: 8,
                            }}
                        >
                            Forgot Password
                        </h2>
                        <p style={{ color: "#e0e0e0", marginBottom: 24 }}>
                            Enter your email and we’ll send you a link to reset your password.
                        </p>

                        {!emailSent ? (
                            <form
                                style={{ display: "flex", flexDirection: "column", gap: 16 }}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setEmailSent(true);
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    style={inputStyle}
                                />

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
                                    Send Reset Link
                                </button>
                            </form>
                        ) : (
                            <p style={{ color: "#d4ffcc", fontSize: 16 }}>
                                ✅ Password reset link has been sent to your email.
                            </p>
                        )}

                        <a
                            href="/login"
                            style={{
                                marginTop: 28, // üstten biraz boşluk
                                fontSize: 15,
                                color: "#fff",
                                textDecoration: "underline",
                                display: "block", // inline yerine blok gibi davransın
                            }}
                        >
                            ← Back to login
                        </a>

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
