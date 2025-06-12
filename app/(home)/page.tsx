// app/(home)/page.tsx

import { ArrowRight } from "lucide-react";
import React from "react";
import '../globals.css'

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
        },
        {
            tag: "ACTIVELY DEVELOPING",
            title: "Don't miss a thing",
            description:
                "With regular updates, new features, and community-driven improvements keeping you ahead of the curve. Our team will keep innovating to deliver a secure, seamless experience",
            alignRight: true,
        },
        {
            tag: "CUSTOMERS FIRST",
            title: "Your feedback drives everything we do",
            description:
                "Want a feature you think would be nice to have? Or having trouble using existing features? You can reach out to us anytime — we're just an email away!",
        },
    ];

    return (
        <div className="relative bg-[#0d0e14] min-h-screen w-full max-w-[1280px] mx-auto px-14">
            {/* Header/Navigation */}
            <header className="flex justify-between items-center pt-[30px]">
                <div className="[font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-[#777076] text-[55px]">
                    Ann-AI
                </div>

                <nav className="flex items-center gap-12">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="[font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-white text-[32px] [text-shadow:0px_4px_4px_#00000040] whitespace-nowrap hover:text-[#777076] transition-colors duration-300"
                        >
                            {item.title}
                        </a>
                    ))}

                    <button className="h-14 w-[177px] bg-gradient-to-r from-[#777076] to-[#404556] rounded-lg hover:opacity-90 transition-opacity duration-300">
                        <span className="[font-family:'Poppins-Medium',Helvetica] font-medium text-3xl text-white">
                            Log in
                        </span>
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="mt-[131px] flex justify-between">
                <div className="max-w-[957px]">
                    <h1 className="[font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[64px] leading-tight">
                        Take back your control
                    </h1>
                    <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#777076] text-[32px] mt-[37px] max-w-[949px] leading-relaxed">
                        Chat with top AI bots like ChatGPT, Claude, and Gemini—all in one
                        place. With Ann-AI, you can switch providers as you want in the same
                        conversation, seamlessly!
                    </p>

                    <div className="flex items-center gap-8 mt-[74px]">
                        <button className="h-[87px] w-[253px] bg-gradient-to-r from-[#777076] to-[#404556] rounded-lg hover:opacity-90 transition-opacity duration-300">
                            <span className="[font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[32px]">
                                Chat Now
                            </span>
                        </button>

                        <div className="flex items-center group cursor-pointer">
                            <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-2xl group-hover:text-[#777076] transition-colors duration-300">
                                How to get an api key
                            </span>
                            <ArrowRight className="w-[42px] h-[42px] ml-2 text-white group-hover:text-[#777076] transition-colors duration-300" />
                        </div>
                    </div>
                </div>

                <div className="relative w-[430px] h-[687px]">
                    <img
                        className="absolute w-[182px] h-[239px] top-0 left-[90px] object-cover rounded-xl shadow-2xl"
                        alt="AI visualization"
                        src="/image 1.png"
                    />
                    <img
                        className="absolute w-[229px] h-[201px] top-[286px] left-[201px] rounded-xl shadow-2xl"
                        alt="AI visualization"
                        src="/image 2.png"
                    />
                    <img
                        className="absolute w-[238px] h-[235px] top-[452px] left-0 object-cover rounded-xl shadow-2xl"
                        alt="AI visualization"
                        src="/image 4.png"
                    />
                </div>
            </section>

            {/* Stats Section */}
            <section className="mt-[154px] flex justify-between gap-6">
                {statsCards.map((stat, index) => (
                    <div
                        key={index}
                        className="w-[353px] h-[225px] bg-gradient-to-br from-[#777076] to-[#404556] rounded-[var(--shape-corner-large)] shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="p-0 flex flex-col items-center justify-center h-full">
                            <div className="[font-family:'Poppins-Medium',Helvetica] font-medium text-white text-8xl">
                                {stat.value}
                            </div>
                            <div className="[font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[28px] text-center mt-5 px-5">
                                {stat.description}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Feature Sections */}
            {featureSections.map((section, index) => (
                <section
                    key={index}
                    className={`mt-[139px] flex ${section.alignRight ? "flex-row-reverse" : "flex-row"} items-center gap-16`}
                >
                    {index === 1 && (
                        <img
                            className="w-[295px] h-[295px] rounded-xl shadow-2xl"
                            alt="Team members working online"
                            src="/image 1.png"
                        />
                    )}

                    <div
                        className={`max-w-[786px] ${section.alignRight ? "text-right" : "text-left"}`}
                    >
                        <div className="[font-family:'Poppins-Bold',Helvetica] font-bold text-[#597d7c] text-2xl">
                            {section.tag}
                        </div>
                        <h2 className="[font-family:'Poppins-Bold',Helvetica] font-bold text-white text-4xl mt-[10px]">
                            {section.title}
                        </h2>
                        <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#777076] text-2xl mt-[26px] leading-relaxed">
                            {section.description}
                        </p>
                    </div>

                    {index === 2 && (
                        <img
                            className="w-[410px] h-[340px] rounded-xl shadow-2xl"
                            alt="Male specialist working in support service"
                            src="/image 2.png"
                        />
                    )}
                </section>
            ))}
        </div>
    );
}