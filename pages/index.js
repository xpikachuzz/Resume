/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useRef } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import vite from "../public/Vitejs-logo.png";
import js from "../public/js.png";
import py from "../public/py.png";
import redux from "../public/redux.png";
import ts from "../public/ts.png";
import pf from "../public/pf.png";
import pf2 from "public/pf2.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const { contextSafe } = useGSAP();

    useGSAP(() => {
        // Nav-Bar
        gsap.from("nav h1", {
            opacity: 0,
            y: -50,
            duration: 0.6,
            delay: 0.1,
        });
        gsap.from(
            "nav ul li",
            {
                opacity: 0,
                y: -50,
                duration: 0.6,
                delay: 0.1,
                stagger: 0.3,
            },
            "<"
        );

        // Hero
        gsap.from(".hero-name span", {
            transform: "translateY(-30px)",
            opacity: 0,
            stagger: 0.1,
            delay: 1,
        });
        gsap.from(
            ".hero-job",
            {
                transform: "translateX(-30px)",
                opacity: 0,
            },
            ">"
        );

        gsap.from(
            ".hero-p-span",
            {
                transform: "translateX(-30px)",
                opacity: 0,
                stagger: 0.3
            },
            ">"
        );

        gsap.from(
            ".profile-cont-1",
            {
                opacity: 0,
            },
            ">"
        );

        gsap.to(
            ".profile-cont-2",
            {
                opacity: 0,
            },
            "<"
        );

        // Skills
        const tlSkills = gsap.timeline({
            scrollTrigger: {
                trigger: "#skills",
                scroller: "body",
                start: "top 80%",
            },
        });

        tlSkills.from(".skills-title", {
            opacity: 0,
            x: -50,
        });

        tlSkills.from(".skills-p", {
            x: -200,
            opacity: 0,
        });

        tlSkills.from(
            ".skills-p-2",
            {
                x: -200,
                opacity: 0,
            },
            ">-0.1"
        );

        // Portfolio
        const tlPortfolio = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "#portfolio",
        //         scroller: "body",
        //         start: "top 40%",
        //     },
        });

        tlPortfolio.from(".portfolio-title", {
            x: -50,
            duration: 0.7,
        });

        tlPortfolio.from(".portfolio-p", {
            x: -75,
            duration: 0.4,
            opacity: 0
        });

        tlPortfolio.from(".portfolio-p-2", {
            x: -75,
            duration: 0.4,
            opacity: 0
        }, ">-0.3");

        // Skills - Cont
        const tlSkillsCard = gsap.timeline({
            scrollTrigger: {
                trigger: "#skills",
                scroller: "body",
                start: "top 80%",
                end: "top: 40%",
                scrub: 2,
            },
        });

        tlSkillsCard.from(".skills-cont-1, .skills-cont-2", {
            opacity: 0,
            scale: 0.8,
            y: -100,
            transformOrigin: "50% 50%",
        });

        tlSkillsCard.from(
            ".skills-cont-3",
            {
                opacity: 0,
                scale: 0.8,
                y: -100,
                transformOrigin: "50% 50%",
            },
            "<"
        );

        // Projects
        const tlProjectsCard = gsap.timeline({
            scrollTrigger: {
                trigger: "#project-1-img",
                scroller: "body",
                markers: "true",
                start: `top ${0}px`,
                end: `top -${window.innerHeight}px`,
                scrub: 0,
                pin: true
            },
            immediateRender: false
        })

        tlProjectsCard.to("#project-1-img", {
            bottom: "0%"
        })
        tlProjectsCard.to("#project-1-img", {
            yPercent: -100,
            ease: "none"
        }, ">")

        
        const tlProjectsCard2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#project-2-img",
                scroller: "body",
                markers: "true",
                start: `top ${0}px`,
                end: `top -${window.innerHeight}px`,
                scrub: 0,
                pin: true
            },
            immediateRender: false
        })

        tlProjectsCard2.to("#project-2-img", {
            bottom: "0%"
        })
        tlProjectsCard2.to("#project-2-img", {
            yPercent: -100,
            ease: "none"
        }, ">")
                
        const tlProjectsCard3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#project-3-img",
                scroller: "body",
                markers: "true",
                start: `top ${0}px`,
                end: `top -${window.innerHeight}px`,
                scrub: 0,
                pin: true
            },
            immediateRender: false
        })

        tlProjectsCard3.to("#project-3-img", {
            bottom: "0%"
        })
        tlProjectsCard3.to("#project-3-img", {
            yPercent: -100,
            ease: "none"
        }, ">")

        // Portfolio - Cards
        // const tlPortfolioCardRow1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".left.r-1",
        //         scroller: "body",
        //         start: "top 75%",
        //         end: "top -70%",
        //         scrub: 2,
        //     },
        // });

        // tlPortfolioCardRow1.from(
        //     ".left.r-1",
        //     {
        //         x: -100,
        //         opacity: 0,
        //     },
        //     "row-1"
        // );
        // tlPortfolioCardRow1.from(
        //     ".right.r-1",
        //     {
        //         x: 100,
        //         opacity: 0,
        //     },
        //     "row-1"
        // );

        // const tlPortfolioCardRow2 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".left.r-2",
        //         scroller: "body",
        //         start: "top 75%",
        //         end: "top: -70%",
        //         scrub: 2,
        //     },
        // });

        // tlPortfolioCardRow2.from(
        //     ".left.r-2",
        //     {
        //         x: -100,
        //         opacity: 0,
        //     },
        //     "row-2"
        // );
        // tlPortfolioCardRow2.from(
        //     ".right.r-2",
        //     {
        //         x: 100,
        //         opacity: 0,
        //     },
        //     "row-2"
        // );

        // const tlPortfolioCardRow3 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".right.r-3",
        //         scroller: "body",
        //         start: "top 75%",
        //         end: "top: -30%",
        //         scrub: 2,
        //     },
        // });
        // tlPortfolioCardRow3.from(
        //     ".right.r-3",
        //     {
        //         x: -100,
        //         opacity: 0,
        //     },
        //     "row-3"
        // );
    });

    const onMouseMove = contextSafe((e) => {
        const distFromCentX = -(e.clientX - e.target.x - 25) / 0.5;
        const distFromCentY = -(e.clientY - e.target.y - 25) / 1;
        gsap.to(e.target, {
            transformOrigin: "50% 50%",
            rotateY: distFromCentX,
            rotateX: distFromCentY,
            scale: 1.2,
        });
    });

    const onMouseMoveSkills = contextSafe((e) => {
        gsap.to(e.target, {
            transformOrigin: "50% 50%",
            scale: 1.5,
        });
    });

    const onMouseLeave = contextSafe((e) => {
        console.log(e);
        const distFromCentX = -(e.clientX - e.target.x - 35) / 3;
        const distFromCentY = -(e.clientY - e.target.y - 35) / 3;

        gsap.fromTo(
            e.target,
            {
                scale: 1.2,
            },
            {
                transformOrigin: "50% 50%",
                rotateY: 0,
                rotateX: 0,
                scale: 1,
            }
        );
    });

    const onMouseLeaveSkills = contextSafe((e) => {
        gsap.fromTo(
            e.target,
            {
                scale: 1.5,
            },
            {
                transformOrigin: "50% 50%",
                scale: 1,
            }
        );
    });


    return (
        <div className={!darkMode ? "dark" : ""}>
            <Head>
                <title>Rudra Bassi - Resume</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white  dark:bg-gray-900 ">
                <section className="px-10 md:px-20 lg:px-40 min-h-[1080px]">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <div className="overflow-y-hidden">
                            <h1 className="font-burtons text-xl">
                                Rudra Bassi
                            </h1>
                        </div>
                        <div className="overflow-y-hidden py-3">
                            <ul className="flex items-center">
                                <li>
                                    <BsFillMoonStarsFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className=" cursor-pointer text-2xl"
                                    />
                                </li>
                                <li className="">
                                    <a
                                        className="bg-gradient-to-r from-red-500 text- to-red-600 text-white px-4 py-2 border-none rounded-md ml-8"
                                        href="#"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="text-center p-10 py-10 h-screen">
                        <h2 className="hero-name text-5xl py-2 text-teal-600 font-medium dark:text-red-400 md:text-6xl overflow-y-hidden">
                            <span>R</span>
                            <span>u</span>
                            <span>d</span>
                            <span>r</span>
                            <span>a</span>
                            <span> </span>
                            <span>B</span>
                            <span>a</span>
                            <span>s</span>
                            <span>s</span>
                            <span>i</span>
                        </h2>
                        <h3 className="hero-job text-2xl py-2 dark:text-white md:text-3xl">
                            React Developer
                        </h3>
                        <p className="hero-p h-34 text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            <span className="hero-p-span block">
                                Along side my Computer Science and Science
                                degree I taught myself from the fundamentals of
                                web development to building an eCommerce website
                                from scratch.
                            </span>
                            <br />
                            <span className="font-bold hero-p-span block">
                                Join me in my journey to become a complete
                                software engineer & app developer!
                            </span>
                        </p>
                        <div className="hero-logo-cont text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                            <div className="icon-cont border border-black px-3 pt-3">
                                <Image
                                    onMouseMove={onMouseMove}
                                    onMouseLeave={onMouseLeave}
                                    width={"70px"}
                                    height={"70px"}
                                    src={vite}
                                    alt="alt"
                                />
                            </div>
                            <div className="border border-black h-fit px-3 pt-3">
                                <Image
                                    onMouseMove={onMouseMove}
                                    onMouseLeave={onMouseLeave}
                                    src={js}
                                    width={"70px"}
                                    height={"70px"}
                                    alt="alt"
                                />
                            </div>
                            <div className="border border-black h-fit px-3 pt-3">
                                <Image
                                    onMouseMove={onMouseMove}
                                    onMouseLeave={onMouseLeave}
                                    src={redux}
                                    width={"70px"}
                                    height={"70px"}
                                    alt="alt"
                                />
                            </div>
                            <div className="border border-black h-fit px-3 pt-3">
                                <Image
                                    onMouseMove={onMouseMove}
                                    onMouseLeave={onMouseLeave}
                                    src={py}
                                    width={"70px"}
                                    height={"70px"}
                                    alt="alt"
                                />
                            </div>
                            <div className="border border-black h-fit px-3 pt-3">
                                <Image
                                    onMouseMove={onMouseMove}
                                    onMouseLeave={onMouseLeave}
                                    src={ts}
                                    width={"70px"}
                                    height={"70px"}
                                    alt="alt"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="profile-cont-1 mx-auto bg-gradient-to-b from-blue-900 absolute left-1/2 -translate-x-1/2 rounded-full w-80 h-80 overflow-hidden mt-20 md:h-96 md:w-96">
                                <Image
                                    src={pf2}
                                    alt="good"
                                    className="object-fill"
                                />
                            </div>
                            <div className="profile-cont-2 mx-auto bg-gradient-to-b from-blue-900 absolute left-1/2 -translate-x-1/2 rounded-full w-80 h-80 overflow-hidden mt-20 md:h-96 md:w-96">
                                <Image
                                    src={pf}
                                    alt="good"
                                    className="object-fill"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className=" px-10 md:px-10 lg:px-10">
                    <div>
                        <h3 className="skills-title text-3xl py-1 dark:text-white ">
                            Skills
                        </h3>
                        <p className="skills-p text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Skilled in React for building dynamic and responsive
                            web applications, with experience in JavaScript,
                            HTML5, and CSS3.{" "}
                            <span className="text-red-500 font-semibold">
                                {" "}
                                Eager to expand knowledge{" "}
                            </span>
                            in backend development (Node.js, firebase, AWS) and
                            mobile app development using React Native.
                        </p>
                        <p className="skills-p-2 text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including
                            brand design, programming and teaching.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="skills-cont-1 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                            <div className="shadow-xl shadow-cyan-500/50 border border-cyan-500 w-fit px-2 pt-2  mx-auto rounded-md">
                                <Image
                                    onMouseMove={onMouseMoveSkills}
                                    onMouseLeave={onMouseLeaveSkills}
                                    src={design}
                                    alt="GOOD"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h3 className="text-lg font-medium pt-8 pb-2  ">
                                Relevant University Skills
                            </h3>
                            <p className="py-2">
                                I can carry over what my Computer Science degree
                                taught me to find more simplier ways to find a
                                solution.
                            </p>
                            <h4 className="py-4 text-red-600">For example:</h4>
                            <p className="text-gray-800 py-1">
                                Object Orientied Programming
                            </p>
                            <p className="text-gray-800 py-1">
                                SOLID principles
                            </p>
                            <p className="text-gray-800 py-1">Python</p>
                            <p className="text-gray-800 py-1">
                                Advanced Data Structures
                            </p>
                            <p className="text-gray-800 py-1">
                                Problem-Solving and Algorithms
                            </p>
                        </div>
                        <div className="skills-cont-2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <div className="shadow-xl shadow-indigo-500/50 border border-indigo-500 w-fit px-2 pt-2  mx-auto rounded-md">
                                <Image
                                    onMouseMove={onMouseMoveSkills}
                                    onMouseLeave={onMouseLeaveSkills}
                                    src={code}
                                    alt="good"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h3 className="text-lg font-medium pt-8 pb-2 ">
                                Self taught Skills
                            </h3>
                            <p className="py-2">
                                Do you have an idea for your next great website?
                                Lets make it a reality.
                            </p>
                            <br />
                            <h4 className="py-4 text-red-600">
                                My relevant skills are:
                            </h4>
                            <p className="text-gray-800 py-1">HTML, CSS, JS</p>
                            <p className="text-gray-800 py-1">React</p>
                            <p className="text-gray-800 py-1">
                                Beginner in Node js (can make blog w/ security &
                                PSQL)
                            </p>
                            <p className="text-gray-800 py-1">
                                Redux | Tailwind | Router-Dom
                            </p>
                            <p className="text-gray-800 py-1">
                                Reusabile components and custom hooks
                            </p>
                            <p className="text-gray-800 py-1">
                                Learning from articles & documentation
                            </p>
                        </div>
                        <div className="skills-cont-3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                            <div className="shadow-xl shadow-yellow-500/50 border border-yellow-500 w-fit px-2 pt-2  mx-auto rounded-md">
                                <Image
                                    onMouseMove={onMouseMoveSkills}
                                    onMouseLeave={onMouseLeaveSkills}
                                    src={consulting}
                                    alt="good"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <h3 className="text-lg font-medium pt-8 pb-2 ">
                                Character
                            </h3>
                            <p className="py-2">What kind of person I am</p>
                            <br />
                            <br />
                            <h4 className="py-4 text-red-600">Traits</h4>
                            <p className="text-gray-800 py-1">
                                Want to learn wide-variety of skills
                            </p>
                            <p className="text-gray-800 py-1">Dedicated</p>
                            <p className="text-gray-800 py-1">Problem-solver</p>
                            <p className="text-gray-800 py-1">
                                Find multiple solutions
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects New */}
                <section id="new-portfolio " className="py-10 px-15 w-screen overflow-x-clip ">
                    <div className="px-10 md:px-20 lg:px-40">
                        <h3 className="portfolio-title text-3xl py-1 dark:text-white ">
                            Portfolio
                        </h3>
                        <p className="portfolio-p text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Front-end React developer with expertise in creating
                            dynamic, responsive user interfaces. Proficient in
                            using modern JavaScript frameworks to deliver
                            seamless user experiences across web and mobile
                            platforms.
                        </p>
                        <p className="portfolio-p-2 text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Below are some of the projects showcasing my ability
                            to build interactive, user-focused applications
                            using React and modern front-end technologies.{" "}
                        </p>
                    </div>
                    <div className="h-screen w-screen bg-slate-100 flex relative border-y-2 border-slate-400">
                        <div id="project-1" className="h-screen  w-2/5 bg-blue-700 relative">
                            <img
                                src={"https://imgur.com/ORWYNIE.png"}
                                alt="good"
                                className=" h-screen w-full object-cover"
                            />
                        </div>
                        <div className="w-full h-screen bg-slate-100 relative flex">
                            <div className="px-4 w-3/5 font-[Roboto]">
                                <div className="mt-4 font-mono">
                                    <a
                                        href="https://trip-flex.netlify.app"
                                        className="px-4 py-2 pt-4 text-5xl  font-[200]"
                                    >
                                        ⭐ Animated Trip Website ✈️🌍
                                    </a>
                                    <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer">
                                        <a
                                            href="https://github.com/xpikachuzz/travel-git"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"<git />"}
                                        </a>
                                    </h1>
                                </div>
                                <div className="px-4 text-sm flex flex-col font-[Roboto]">
                                    <div className="mt-5">
                                        <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="text-4xl font-[200] tracking-tight">Skills 🛠️:</h3>
                                        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base font-[300] text-gray-600 mt-3 ">
                                            • 🎨 Applied <b className="font-[700]">GSAP</b> skills to recreate an <b className="font-[700]">AWWWARDS</b> 🏆 website designed by 
                                            <a
                                                href="www.giuligartner.com"
                                                className="text-blue-700 underline"
                                            >
                                                Thomas Bosc
                                            </a>.

                                            <br/> 
                                            • 📜 Implemented <b className="font-[700]">scroll-triggered</b> animations.
                                            <br/> 
                                            • 🎞️ Built <b className="font-[700]">page transition</b> animations for smoother navigation.
                                            <br/> 
                                        </p>
                                    </div>
                                    <br />
                                    <div className="mt-5">
                                        <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="text-4xl font-[200] tracking-tight">Future Improvements 🚀:</h3>
                                        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base font-[300] text-gray-600 mt-3">
                                            Learn the optimal file types for
                                            gifs 🎞️ (as backgrounds) and images. Properly
                                            fill out the different pages 📄.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="project-1-img" className="w-2/5 h-fit absolute right-0 top-0 bg-blue-200">
                                <iframe 
                                    src="https://www.loom.com/embed/b0fa98ad28664e019c0b706367ec313e?sid=d9f1ea5d-cf67-4d16-8179-3723aeeef28d" 
                                    frameBorder="0" 
                                    allowfullscreen 
                                    className="aspect-video"
                                    width={"100%"}
                                >
                                </iframe>
                            </div>

                            
                        </div>
                    </div>
                    <div className="h-screen w-screen bg-slate-100 flex relative border-y-2 border-slate-400">
                        <div id="project-3" className="h-screen  w-2/5 bg-blue-700 relative">
                            <a 
                                href="https://harmonious-yeot-8243ad.netlify.app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={"https://imgur.com/Z2jszeu.png"}
                                    alt="good"
                                    className=" h-screen w-full object-cover"
                                />
                            </a>
                        </div>
                        <div className="w-full h-screen bg-slate-100 relative flex">
                            <div className="px-4 w-3/5 font-[Roboto]">
                                <div className="mt-4 font-mono">
                                    <a
                                        href="https://harmonious-yeot-8243ad.netlify.app"
                                        className="px-4 py-2 pt-4 text-5xl  font-[200]"
                                    >
                                        ⭐ Cloud Technologies ⭐
                                    </a>
                                    <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer">
                                        <a
                                            href="https://github.com/xpikachuzz/Interview"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"<git />"}
                                        </a>
                                    </h1>
                                </div>
                                <div className="px-4 text-sm mt-4 flex flex-col font-[Roboto]">
                                    <div className="mt-5">
                                        <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="text-4xl font-[200] tracking-tight">Skills:</h3>
                                        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base font-[300] text-gray-600 mt-3">
                                            <b className="font-[900]">Use of Supabase to create a website which lets users apply to jobs by answering text/video based questions.</b>
                                            <br />
                                            • 💬 The user is able to answer question using text or <b className="font-[700]"> video recorded</b> 🎥.
                                            <br />
                                            • 🛢️ Integrated <b className="font-[700]">Supabase</b> to handle database, video storage, and RLS 🔐.
                                            <br />
                                            • 📧 Use of authentication and <b className="font-[700]">email verification</b> when signing up.
                                        </p>
                                    </div>
                                    <br />
                                    <div className="mt-5">
                                        <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="text-4xl font-[200] tracking-tight">Improvements:</h3>
                                        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base font-[300] text-gray-600 mt-3">
                                            • 🧑‍💻 Have a senior check your website is secure before deploying.
                                            <br />
                                            • 🎨 Fix the Front-End design (I was focused on Integrating Supabase).
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/5 absolute right-0 top-0 flex flex-col hover:scale-[1.3] origin-top-right transition ">
                                <img 
                                    src={"https://imgur.com/qbIg8X2.png"}
                                    className="inline-block z-30 "
                                    alt="good"
                                    id="project-3-img"
                                />
                                <img 
                                    src={"https://imgur.com/ZFw94Kt.png"}
                                    className="inline-block"
                                    alt="good"
                                    id="project-3-img2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-screen  w-screen bg-slate-100 flex relative border-y-2 border-slate-400">
                        <div id="project-2" className="h-screen  w-2/5 bg-blue-700 relative">
                            <img
                                src={"https://imgur.com/nuri7Tm.png"}
                                alt="good"
                                className=" h-screen w-full object-cover"
                            />
                        </div>
                        <div className="w-full h-screen bg-slate-100 relative flex">
                            <div className="px-4 w-3/5 font-[Roboto]">
                                <div className="mt-4 font-mono">
                                    <a
                                        href="https://github.com/xpikachuzz/polling"
                                        className="px-4 py-2 pt-4 text-5xl  font-[200]"
                                    >
                                        ⭐ Live Polling 📊⚡
                                    </a>
                                    <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer">
                                        <a
                                            href="https://github.com/xpikachuzz/polling"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"<git />"}
                                        </a>
                                    </h1>
                                </div>
                                <div className="px-4 text-sm mt-4 flex flex-col font-[Roboto] ">
                                    <div className="mt-5">
                                        <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="text-4xl font-[200] tracking-tight">Skills 🛠️:</h3>
                                        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base font-[300] text-gray-600 mt-3">
                                            <b className="font-[900]">The purpose of this project was to allow users to create polls and see live changes in voting via the use of Web Sockets. </b>
                                            <br />
                                            • 🐘 Use of <b className="font-[700]">PSQL </b> for secure and persistent storage, especially for login and poll details. 
                                            <br />
                                            • 🧭 <b className="font-[700]">React Router DOM </b> for routing and enabling smooth navigation between pages. 
                                            <br />
                                            • ⚡ <b className="font-[700]">Redis </b> for in-memory storage with less overhead than typical JS storage, and fast data retrieval. 
                                            <br />
                                            • 🔌 <b className="font-[700]">Web Sockets </b> for live updates as votes are changing. 
                                            <br />
                                            • 🍪 <b className="font-[700]">Cookies </b> to stay logged in and authorize future actions. 
                                            <br />
                                            • 🚫 <b className="font-[700]">IP rate limiting </b> to restrict login attempts.
                                        </p>
                                    </div>
                                    <br />
                                    <div className="mt-3">
                                        <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="text-4xl font-[200] tracking-tight">Improvements 🔧:</h3>
                                        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base font-[300] text-gray-600 mt-3">
                                            • 🚀 Learn to deploy backend technologies . 
                                            <br />
                                            • 🔒 Have a senior check your website is secure before deploying .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img 
                                src={"https://imgur.com/nuri7Tm.png"}
                                className="w-2/5 absolute right-0 top-0 "
                                alt="good"
                                id="project-2-img"
                            />
                        </div>
                    </div>
                </section>

                <section id="portfolio" className="py-10 px-10 md:px-20 lg:px-40">
                    <div className="portfolio-card-cont flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                {/* Row 2 */}
                        <div className="portfolio-card left r-2 basis-1/3 flex-1 bg-slate-200 flex-row  rounded-md justify-between">
                            <div className="pt-0  pb-3 my-1 flex-1 px-2">
                                <div className="flex flex-row">
                                    <a
                                        href="https://course-shopy.netlify.app"
                                        className="px-4 py-2 pt-4 text-xl"
                                    >
                                        eCommerce Website
                                    </a>
                                    <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer">
                                        <a
                                            href="https://github.com/xpikachuzz/course-shop"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"<git />"}
                                        </a>
                                    </h1>
                                </div>
                                <div className="px-4 text-sm">
                                    <p className="font-bold my-1">Skills:</p>
                                    From this I learnt a library I didnt know I
                                    needed, Redux, it simplified global state
                                    mangement and removed the need for
                                    irrelevant prop drillings. I also learnt how
                                    to create <b>google sign in</b>. And fetched
                                    data from local json server.
                                    <br />
                                    <p className="font-bold my-1">
                                        Improvements:
                                    </p>
                                    Learn how to move local json server to
                                    backend and use it to store registered
                                    emails and product details.
                                </div>
                            </div>
                            <div className="pb-2 px-2">
                                <a
                                    href="https://course-shopy.netlify.app"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        className="w-full rounded-b h-full object-cover"
                                        src={web3}
                                        width={"100%"}
                                        height={"100%"}
                                        layout="responsive"
                                        alt="site_cover"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-card right r-2 basis-1/3 flex-1 h-full bg-slate-200  rounded-md overflow-hidden justify-between">
                            <div className="pt-0 px-2 pb-3 my-1">
                                <div className="flex flex-row">
                                    <a
                                        href="https://animemate.netlify.app"
                                        className="px-4 py-2 pt-4 text-xl"
                                    >
                                        Anime Search
                                    </a>
                                    <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer">
                                        <a
                                            href="https://github.com/xpikachuzz/absCinema"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"<git />"}
                                        </a>
                                    </h1>
                                </div>
                                <div className="px-4 text-sm">
                                    <p className="font-bold my-1">Skills:</p>
                                    Handling filters, states, public api calls
                                    and searches at the same time.
                                    <br />
                                    <p className="font-bold my-1">
                                        Improvements:
                                    </p>
                                    Display trailers (available through the
                                    api), improve the design and adding a dark
                                    mode.
                                </div>
                            </div>
                            <div className="w-full h-full px-2 pb-2">
                                <a
                                    href="https://animemate.netlify.app"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        className="w-full rounded-b h-full object-cover"
                                        src={web1}
                                        width={"100%"}
                                        height={"100%"}
                                        layout="responsive"
                                        alt="site_cover"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="w-screen">
                            <div className="portfolio-card right r-3 w-1/2 bg-slate-200  rounded-md overflow-hidden justify-between">
                                <div className="pt-0 px-2 pb-3 my-1">
                                    <div className="flex flex-row">
                                        <a
                                            href="https://chess-maty.netlify.app"
                                            className="px-4 py-2 pt-4 text-xl"
                                        >
                                            Chess OOP
                                        </a>
                                        <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer">
                                            <a
                                                href="https://github.com/xpikachuzz/chessy"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {"<git />"}
                                            </a>
                                        </h1>
                                    </div>
                                    <div className="px-4 text-sm">
                                        <p className="font-bold my-1">
                                            Skills:
                                        </p>
                                        <b>
                                            I enjoyed discovering how react
                                            (especially the useState) lends
                                            itself to OOP, you return a new
                                            object and set it as the newState
                                            then it refreshes.
                                        </b>
                                        <br />
                                        Object Orientied Programming. Reusable
                                        classes. I can add any piece anywhere on
                                        the board and the game will still work.
                                        I can create customer pieces limited
                                        consequences.
                                        <br />
                                        <p className="font-bold my-1">
                                            Improvements:
                                        </p>
                                        Add easy to add key features such as 2
                                        steps first a pawns first move. Add
                                        animations for when pieces move. Show
                                        killed pieces. Modularize the process of
                                        finding possible moves.
                                    </div>
                                    <div className="w-full h-full mt-4">
                                        <a
                                            href="https://chess-maty.netlify.app"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Image
                                                className="w-full rounded-b h-full object-cover"
                                                src={web4}
                                                width={"100%"}
                                                height={"100%"}
                                                layout="responsive"
                                                alt="site_cover"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
