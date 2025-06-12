'use client';

// app/(home)/page.tsx

import { ArrowRight } from "lucide-react";
import React from "react";

export default function WebHomePage(): JSX.Element {
    // Navigation items
    const navItems = [
        { title: "What's New?", href: "#" },
        { title: "Contact Us", href: "#" },
        { title: "Document", href: "#" },
    ];

    // Stats cards data
    const statsCards = [
        {
            value: "-50%",
            description: "Save your money to another day",
        },
        {
            value: "60%",
            description: "Reaching out to all planned features",
        },
        {
            value: "+23%",
            description: "Faster than other competitors",
        },
    ];

    // Feature sections data
    const featureSections = [
        {
            tag: "QUANTUM LEVEL PROTECTION",
            title: "You and for you only",
            description:
                "As part of our open-source initiative, the project is fully transparent and trusted by all our users. And with cutting-edge, quantum-level encryption technology, your data is protected like never before",
            src: "/image 1.png",
        },
        {
            tag: "ACTIVELY DEVELOPING",
            title: "Don't miss a thing",
            description:
                "With regular updates, new features, and community-driven improvements keeping you ahead of the curve. Our team will keep innovating to deliver a secure, seamless experience",
            alignRight: true,
            src: "/image 2.png",
        },
        {
            tag: "CUSTOMERS FIRST",
            title: "Your feedback drives everything we do",
            description:
                "Want a feature you think would be nice to have? Or having trouble using existing features? You can reach out to us anytime — we're just an email away!",
            src: "/image 4.png",
        },
    ];

    // Color palette for inline styles
    const colors = {
        background: "#18171c",
        muted: "#777076",
        accent: "#597d7c",
        white: "#fff",
        text: "#b3b3b3",
    };

    return (
        <>
            {/* Google Fonts for Poppins */}
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <div
                style={{
                    background: colors.background,
                    minHeight: "100vh",
                    width: "100%",
                    maxWidth: "100%",
                    margin: "0 auto",
                    paddingLeft: 24,
                    paddingRight: 24,
                    boxSizing: "border-box",
                    fontFamily: "Poppins, sans-serif",
                }}
            >
                {/* Header/Navigation */}
                <header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 32,
                        paddingBottom: 16,
                    }}
                >
                    <div
                        style={{
                            fontWeight: 800,
                            color: colors.muted,
                            fontSize: 44,
                            letterSpacing: "-0.03em",
                            userSelect: "none",
                        }}
                    >
                        Ann-AI
                    </div>
                    <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                style={{
                                    fontWeight: 700,
                                    color: colors.white,
                                    fontSize: 22,
                                    textDecoration: "none",
                                    marginRight: 0,
                                    transition: "color 0.2s",
                                    whiteSpace: "nowrap",
                                }}
                                onMouseOver={e => (e.currentTarget.style.color = colors.muted)}
                                onMouseOut={e => (e.currentTarget.style.color = colors.white)}
                            >
                                {item.title}
                            </a>
                        ))}
                        <button
                            style={{
                                height: 48,
                                width: 140,
                                background: colors.muted,
                                color: colors.white,
                                borderRadius: 12,
                                fontWeight: 600,
                                fontSize: 20,
                                border: "none",
                                cursor: "pointer",
                                transition: "background 0.2s",
                            }}
                            onMouseOver={e => (e.currentTarget.style.background = "#a3a3a3")}
                            onMouseOut={e => (e.currentTarget.style.background = colors.muted)}
                        >
                            Log in
                        </button>
                    </nav>
                </header>

                {/* Hero Section */}
                <section
                    style={{
                        marginTop: 80,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 40,
                    }}
                >
                    <div style={{ maxWidth: 700 }}>
                        <h1
                            style={{
                                fontWeight: 800,
                                color: colors.white,
                                fontSize: 56,
                                lineHeight: 1.1,
                                marginBottom: 24,
                            }}
                        >
                            Take back your control
                        </h1>
                        <p
                            style={{
                                fontWeight: 500,
                                color: colors.muted,
                                fontSize: 26,
                                marginBottom: 40,
                                lineHeight: 1.5,
                            }}
                        >
                            Chat with top AI bots like ChatGPT, Claude, and Gemini—all in one
                            place. With Ann-AI, you can switch providers as you want in the same
                            conversation, seamlessly!
                        </p>

                        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                            <button
                                style={{
                                    height: 48,
                                    width: 180,
                                    background: colors.muted,
                                    color: colors.white,
                                    borderRadius: 12,
                                    fontWeight: 700,
                                    fontSize: 22,
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "background 0.2s",
                                }}
                                onMouseOver={e => (e.currentTarget.style.background = "#a3a3a3")}
                                onMouseOut={e => (e.currentTarget.style.background = colors.muted)}
                            >
                                Chat Now
                            </button>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    color: colors.white,
                                    fontSize: 20,
                                    fontWeight: 400,
                                    transition: "color 0.2s",
                                }}
                                onMouseOver={e => (e.currentTarget.style.color = colors.muted)}
                                onMouseOut={e => (e.currentTarget.style.color = colors.white)}
                            >
                                <span>How to get an api key</span>
                                <ArrowRight style={{ width: 32, height: 32, marginLeft: 8 }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ position: "relative", width: 430, height: 320 }}>
                        <img
                            style={{
                                position: "absolute",
                                width: 182,
                                height: 182,
                                objectFit: "contain",
                                borderRadius: 16,
                                
                                top: 0,
                                left: 80,
                                background: "none",
                            }}
                            alt="AI visualization 1"
                            src="/image 1.png"
                        />
                        <img
                            style={{
                                position: "absolute",
                                width: 140,
                                height: 140,
                                objectFit: "contain",
                                borderRadius: 16,
                            
                                top: 140,
                                left: 200,
                                
                            }}
                            alt="AI visualization 2"
                            src="/image 2.png"
                        />
                        <img
                            style={{
                                position: "absolute",
                                width: 160,
                                height: 160,
                                objectFit: "contain",
                                borderRadius: 16,
                                
                                top: 240,
                                left: 0,
                                
                            }}
                            alt="AI visualization 3"
                            src="/image 4.png"
                        />
                    </div>
                </section>

                {/* Stats Section */}
                <section
                    style={{
                        marginTop: 80,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 24,
                    }}
                >
                    {statsCards.map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                flex: 1,
                                minWidth: 220,
                                background: "#23222a",
                                borderRadius: 16,
                                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
                                padding: 24,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "box-shadow 0.3s",
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: 700,
                                    color: colors.white,
                                    fontSize: 36,
                                    marginBottom: 8,
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                style={{
                                    fontWeight: 500,
                                    color: colors.white,
                                    fontSize: 20,
                                    textAlign: "center",
                                }}
                            >
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Feature Sections */}
                {featureSections.map((section, index) => (
                    <section
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 16,
                            marginTop: 80,
                            flexDirection: section.alignRight ? "row-reverse" : "row",
                        }}
                    >
                        <img
                            style={{
                                width: 180,
                                height: 180,
                                borderRadius: 16,
                                
                                objectFit: "contain",
                                background: "none",
                            }}
                            alt={section.title}
                            src={section.src}
                        />
                        <div
                            style={{
                                maxWidth: 600,
                                textAlign: section.alignRight ? "right" : "left",
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: 700,
                                    color: colors.accent,
                                    fontSize: 18,
                                    marginBottom: 8,
                                    letterSpacing: 1,
                                    textTransform: "uppercase",
                                }}
                            >
                                {section.tag}
                            </div>
                            <h2
                                style={{
                                    fontWeight: 800,
                                    color: colors.white,
                                    fontSize: 28,
                                    marginBottom: 8,
                                }}
                            >
                                {section.title}
                            </h2>
                            <p
                                style={{
                                    fontWeight: 500,
                                    color: colors.muted,
                                    fontSize: 20,
                                    lineHeight: 1.5,
                                }}
                            >
                                {section.description}
                            </p>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}