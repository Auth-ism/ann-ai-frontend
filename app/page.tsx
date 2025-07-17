'use client';

import {useRouter} from "next/navigation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Home() {

    const router = useRouter();

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
    const colors = {
        background: "#18171c",
        muted: "#777076",
        accent: "#597d7c",
        white: "#fff",
        text: "#b3b3b3",
    };
    const navItems = [
        { title: "What's New?", href: "#" },
        { title: "Contact Us", href: "#" },
        { title: "Document", href: "#" },
    ];

  return (
      <>
          <div className="min-h-[100vh] w-full max-w-full mx-auto pl-6 pr-6 box-border font-poppins">
              {/* Header/Navigation */}
              <header className="flex justify-between items-center pt-8 pb-4">
                  <div className="font-extrabold text-[44px] tracking-[-0.03em] select-none" style={{color: colors.muted}}>
                      Ann-AI
                  </div>
                  <nav className="flex items-center gap-8">
                      {navItems.map((item, index) => (
                          <a
                              key={index}
                              href={item.href}
                              className="font-bold text-[22px] no-underline mr-0 transition-colors duration-200 whitespace-nowrap"
                              style={{color: colors.white}}
                              onMouseOver={e => (e.currentTarget.style.color = colors.muted)}
                              onMouseOut={e => (e.currentTarget.style.color = colors.white)}
                          >
                              {item.title}
                          </a>
                      ))}
                      <button
                          className="h-[48px] w-[140px] rounded-xl font-semibold text-[20px] border-0 cursor-pointer transition-colors duration-200"
                          style={{background: colors.muted, color: colors.white}}
                          onMouseOver={e => (e.currentTarget.style.background = "#a3a3a3")}
                          onMouseOut={e => (e.currentTarget.style.background = colors.muted)}
                          onClick={()=>router.push("/login")}
                      >
                          Log in
                      </button>
                  </nav>
              </header>

              {/* Hero Section */}
              <section className='mt-20 flex flex-row justify-between items-start gap-10'>
                  <div className='max-w-[700px]'>
                      <h1 className="font-extrabold text-[56px] leading-[1.1] mb-6" style={{color: colors.white}}>
                          Take back your control
                      </h1>
                      <p className="font-medium text-[26px] mb-10 leading-[1.5]" style={{color: colors.muted}}>
                          Chat with top AI bots like ChatGPT, Claude, and Gemini—all in one
                          place. With Ann-AI, you can switch providers as you want in the same
                          conversation, seamlessly!
                      </p>

                      <div className='flex items-center'>
                          <button
                              className="h-12 w-[180px] rounded-xl font-bold text-[22px] border-0 cursor-pointer transition-colors duration-200"
                              style={{background: colors.muted, color: colors.white}}
                              onMouseOver={e => (e.currentTarget.style.background = "#a3a3a3")}
                              onMouseOut={e => (e.currentTarget.style.background = colors.muted)}
                              onClick={()=> router.push("/register")}>
                              Register
                          </button>

                          <div
                              className="flex items-center cursor-pointer text-xl font-normal transition-colors duration-200"
                              style={{color: colors.white}}
                              onMouseOver={e => (e.currentTarget.style.color = colors.muted)}
                              onMouseOut={e => (e.currentTarget.style.color = colors.white)}
                          >
                              <span>How to get an api key</span>
                              <ArrowRight className='w-8 h-8 ml-2'/>
                          </div>
                      </div>
                  </div>

                  <div className='relative w-[430px] h-[320px]'>
                      <Image
                          width={182}
                          height={182}
                          className='absolute object-contain rounded-2xl top-0 left-20 bg-none'
                          alt="AI visualization 1"
                          src="/image%201.png"
                      />
                      <Image
                          width={140}
                          height={140}
                          className='absolute object-contain rounded-2xl top-[140px] left-[200px]'
                          alt="AI visualization 2"
                          src="/image%202.png"
                      />
                      <Image
                          width={160}
                          height={160}
                          className='absolute object-contain rounded-2xl top-[240px] left-0'
                          alt="AI visualization 3"
                          src="/image%204.png"
                      />
                  </div>
              </section>

              {/* Stats Section */}
              <section className='mt-20 flex flex-row justify-between gap-6'>
                  {statsCards.map((stat, index) => (
                      <div
                          key={index}
                          style={{boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)"}}
                          className='flex-1 min-w-[220px] bg-[#23222a] rounded-2xl p-6 flex flex-col items-center justify-center transition-shadow duration-300'>
                          <div className="font-bold text-[36px] mb-2" style={{color: colors.white}}>
                              {stat.value}
                          </div>
                          <div className="font-medium text-[20px] text-center" style={{color: colors.white}}>
                              {stat.description}
                          </div>
                      </div>
                  ))}
              </section>

              {/* Feature Sections */}
              {featureSections.map((section, index) => (
                  <section
                      key={index}
                      className={`flex justify-between items-center gap-4 mt-20 ${section.alignRight ? "flex-row-reverse" : "flex-row"}`}>
                      <Image
                          width={180}
                          height={180}
                          className='rounded-2xl object-contain bg-none'
                          alt={section.title}
                          src={section.src}
                      />
                      <div className={`max-w-[600px] ${section.alignRight ? "text-right" : "text-left"}`}>
                          <div className="font-bold text-[18px] mb-2 tracking-[1px] uppercase" style={{color: colors.accent}}>
                              {section.tag}
                          </div>
                          <h2 className="font-extrabold text-[28px] mb-2" style={{color: colors.white}}>
                              {section.title}
                          </h2>
                          <p className="font-medium text-[20px] leading-[1.5]" style={{color: colors.muted}}>
                              {section.description}
                          </p>
                      </div>
                  </section>
              ))}
          </div>
      </>
  );
}
