'use client';
import React from "react";

export default function WebRegisterPage(): JSX.Element {
  return (
    <>
      {/* Google Fonts for Poppins */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div
        style={{
          background: "#1e1e1e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          minHeight: "100vh",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            width: 400,
            background: "#777076",
            borderRadius: 32,
            border: "1px solid #0d0e14",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
            padding: 32,
          }}
        >
          <form style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label
                htmlFor="name"
                style={{
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 4,
                }}
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Value"
                style={{
                  minWidth: 180,
                  padding: "12px 16px",
                  background: "#60515c",
                  borderRadius: 12,
                  border: "1px solid #0d0e14",
                  color: "#e0e0e0",
                  fontSize: 16,
                  outline: "none",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label
                htmlFor="surname"
                style={{
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 4,
                }}
              >
                Surname
              </label>
              <input
                id="surname"
                placeholder="Value"
                style={{
                  minWidth: 180,
                  padding: "12px 16px",
                  background: "#60515c",
                  borderRadius: 12,
                  border: "1px solid #0d0e14",
                  color: "#e0e0e0",
                  fontSize: 16,
                  outline: "none",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label
                htmlFor="email"
                style={{
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 4,
                }}
              >
                Email
              </label>
              <input
                id="email"
                placeholder="Value"
                style={{
                  minWidth: 180,
                  padding: "12px 16px",
                  background: "#60515c",
                  borderRadius: 12,
                  border: "1px solid #0d0e14",
                  color: "#e0e0e0",
                  fontSize: 16,
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label
                htmlFor="password"
                style={{
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 4,
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Value"
                style={{
                  minWidth: 180,
                  padding: "12px 16px",
                  background: "#60515c",
                  borderRadius: 12,
                  border: "1px solid #0d0e14",
                  color: "#e0e0e0",
                  fontSize: 16,
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label
                htmlFor="confirm-password"
                style={{
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 4,
                }}
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Value"
                style={{
                  minWidth: 180,
                  padding: "12px 16px",
                  background: "#60515c",
                  borderRadius: 12,
                  border: "1px solid #0d0e14",
                  color: "#e0e0e0",
                  fontSize: 16,
                  outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px 12px",
                background: "#2C2C2C",
                borderRadius: 12,
                border: "1px solid #777076",
                color: "#fff",
                fontWeight: 600,
                fontSize: 18,
                cursor: "pointer",
                marginTop: 8,
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
