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
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import vite from "../public/Vitejs-logo.png"
import js from "../public/js.png"
import py from "../public/py.png"
import redux from "../public/redux.png"
import ts from "../public/ts.png"
import pf from "../public/pf.png"

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const {contextSafe} = useGSAP()


  useGSAP(() => {
    gsap.from("nav h1", {
      opacity: 0,
      y: -50,
      duration: 0.6,
      delay: 0.1
    })
    gsap.from("nav ul li", {
      opacity: 0,
      y: -50,
      duration: 0.6,
      delay: 0.1,
      stagger: 0.3
    }, "<")

    // Hero
    gsap.from(".hero-name span", {
      transform: "translateY(-30px)",
      opacity: 0,
      stagger: 0.1,
      delay: 1
    })
    gsap.from(".hero-job", {
      text: ""
    }, ">")
    
    gsap.from(".hero-p span", {
      duration: 2,
      ease: "linear",
      stagger: 2,
      onComplete: () => {
        const tlProfile = gsap.timeline()
        
        tlProfile.to(".profile-cont", {
          yPercent: 35,
          scrollTrigger: {
            trigger: ".profile-cont",
            scroller: "body",
            start: "top 60%",
            end: "top 30%",
            scrub: true,
          }
        }, "<")

      }
    }, ">")

    // Skills
    const tlSkills = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        scroller: "body",
        start: "top 80%",
      }
    })

    tlSkills.from(".skills-title", {
      opacity: 0,
      x: -50
    })

    tlSkills.from(".skills-p", {
      text: '',
      duration: 3
    })

    tlSkills.from(".skills-p-2", {
      text: '',
      duration: 3,
    }, ">")

    // Portfolio
    const tlPortfolio = gsap.timeline({
      scrollTrigger: {
        trigger: "#portfolio",
        scroller: "body",
        markers: true,
        start: "top 80%",
      }
    })

    tlPortfolio.from(".portfolio-title", {
      x: -50,
      duration: 0.7,
    })

    tlPortfolio.from(".portfolio-p", {
      text: "",
      duration: 3
    })

    tlPortfolio.from(".portfolio-p-2", {
      text: "",
      duration: 2
    })
    

    // Skills - Cont
    const tlSkillsCard = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top: 40%",
        scrub: 2
      }
    })

    tlSkillsCard.from(".skills-cont-1, .skills-cont-2", {
      opacity: 0,
      scale: 0.8,
      y: -100,
      transformOrigin: "50% 50%"
    })
    
    tlSkillsCard.from(".skills-cont-3", {
      opacity: 0,
      scale: 0.8,
      y: -100,
      transformOrigin: "50% 50%",
    }, "<")

    // Portfolio - Cards
    const tlPortfolioCard = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio-card-cont",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top: -70%",
        scrub: 2
      }
    })

    tlPortfolioCard.from(".left.r-1", {
      x: -100,
      opacity: 0
    }, "row-1")
    tlPortfolioCard.from(".right.r-1", {
      x: 100,
      opacity: 0
    }, "row-1")

    tlPortfolioCard.from(".left.r-2", {
      x: -100,
      opacity: 0
    }, "row-2")
    tlPortfolioCard.from(".right.r-2", {
      x: 100,
      opacity: 0
    }, "row-2")

    tlPortfolioCard.from(".left.r-3", {
      x: -100,
      opacity: 0
    }, "row-3")
    tlPortfolioCard.from(".right.r-3", {
      x: 100,
      opacity: 0
    }, "row-3")
  })

  const onMouseMove = contextSafe((e) => {
    const distFromCentX = -(e.clientX-e.target.x-25)/0.5
    const distFromCentY = -(e.clientY-e.target.y-25)/1
    gsap.to(e.target, {
      transformOrigin: "50% 50%",
      rotateY: distFromCentX,
      rotateX: distFromCentY,
      scale: 1.2,
    })
  })
  
  const onMouseMoveSkills = contextSafe((e) => {
    gsap.to(e.target, {
      transformOrigin: "50% 50%",
      scale: 1.5,
    })
  })
  
  const onMouseLeave = contextSafe((e) => {
    console.log(e)
    const distFromCentX = -(e.clientX-e.target.x-35)/3
    const distFromCentY = -(e.clientY-e.target.y-35)/3

    gsap.fromTo(e.target, {
      scale: 1.2
    }, {
      transformOrigin: "50% 50%",
      rotateY: 0,
      rotateX: 0,
      scale: 1
    })
  })
  
  const onMouseLeaveSkills = contextSafe((e) => {
    gsap.fromTo(e.target, {
      scale: 1.5
    }, {
      transformOrigin: "50% 50%",
      scale: 1
    })
  })

  return (
    <div className={(!darkMode) ? "dark" : ""}>
      <Head>
        <title>Rudra Bassi - Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <div className="overflow-y-hidden">
              <h1 className="font-burtons text-xl">Rudra Bassi</h1>
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
          <div className="text-center p-10 py-10">
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
            <p className="hero-p text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              <span>Along side my Computer Science and Science degree I taught
              myself from the fundamentals of web development to building an
              eCommerce website from scratch.</span>
              <br />
              <span className="font-bold">Join me in my journey to become
                a full stack dev & app developer!</span>
            </p>
            <div className="hero-logo-cont text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <div className="icon-cont border border-black px-3 pt-3" > 
                <Image onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} width={"70px"} height={"70px"}  src={vite} fill={true} alt="alt" />
              </div>
              <div className="border border-black h-fit px-3 pt-3">
                <Image onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} src={js} width={"70px"} height={"70px"} alt="alt" />
              </div>
              <div className="border border-black h-fit px-3 pt-3">
                <Image onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} src={redux} width={"70px"} height={"70px"} alt="alt" />
              </div>
              <div className="border border-black h-fit px-3 pt-3">
                <Image onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} src={py} width={"70px"} height={"70px"} alt="alt" />
              </div>
              <div className="border border-black h-fit px-3 pt-3">
                <Image onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} src={ts} width={"70px"} height={"70px"} alt="alt" />
              </div>
            </div>
            <div className="profile-cont mx-auto bg-gradient-to-b from-blue-900 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={pf} alt="good" className="object-fill" />
            </div>
          </div>
        </section>
        <section id="skills">
          <div>
            <h3 className="skills-title text-3xl py-1 dark:text-white ">Skills</h3>
            <p className="skills-p text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Skilled in React for building dynamic and responsive web applications, with experience in
              JavaScript, HTML5, and CSS3. <span className="text-red-500 font-semibold"> Eager to expand knowledge </span>in backend development
              (Node.js, firebase, AWS) and mobile app development using React Native.
            </p>
            <p className="skills-p-2 text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="skills-cont-1 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="shadow-xl shadow-cyan-500/50 border border-cyan-500 w-fit px-2 pt-2  mx-auto rounded-md">
                <Image onMouseMove={onMouseMoveSkills} onMouseLeave={onMouseLeaveSkills} src={design} alt="GOOD" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Relevant University Skills
              </h3>
              <p className="py-2">
                I can carry over what my Computer Science degree taught me to find more simplier ways to find a solution.
              </p>
              <h4 className="py-4 text-red-600">For example:</h4>
              <p className="text-gray-800 py-1">Object Orientied Programming</p>
              <p className="text-gray-800 py-1">SOLID principles</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Advanced Data Structures</p>
              <p className="text-gray-800 py-1">Problem-Solving and Algorithms</p>
            </div>
            <div className="skills-cont-2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="shadow-xl shadow-indigo-500/50 border border-indigo-500 w-fit px-2 pt-2  mx-auto rounded-md">
              <Image onMouseMove={onMouseMoveSkills} onMouseLeave={onMouseLeaveSkills} src={code} alt="good" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Self taught Skills
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <br />
              <h4 className="py-4 text-red-600">My relevant skills are:</h4>
              <p className="text-gray-800 py-1">HTML, CSS, JS</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Redux | Tailwind | Router-Dom</p>
              <p className="text-gray-800 py-1">Reusabile components and custom hooks</p>
              <p className="text-gray-800 py-1">json server auth</p>
              <p className="text-gray-800 py-1">Reading documentation</p>
              <p className="text-gray-800 py-1">Learning from articles</p>
            </div>
            <div className="skills-cont-3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="shadow-xl shadow-yellow-500/50 border border-yellow-500 w-fit px-2 pt-2  mx-auto rounded-md">
                <Image onMouseMove={onMouseMoveSkills} onMouseLeave={onMouseLeaveSkills} src={consulting} alt="good" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Character</h3>
              <p className="py-2">
                What kind of person I am
              </p>
              <br />
              <br />
              <h4 className="py-4 text-red-600">Traits</h4>
              <p className="text-gray-800 py-1">Want to learn wide-variety of skills</p>
              <p className="text-gray-800 py-1">Dedicated</p>
              <p className="text-gray-800 py-1">Problem-solver</p>
              <p className="text-gray-800 py-1">Find multiple solutions</p>
            </div>
          </div>
        </section>
        <section id="portfolio" className="py-10">
          <div>
            <h3 className="portfolio-title text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="portfolio-p text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Front-end React developer with expertise in creating dynamic, responsive user interfaces. Proficient in using
              modern JavaScript frameworks to deliver seamless user experiences across web and mobile platforms.
            </p>
            <p className="portfolio-p-2 text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Below are some of the projects showcasing my ability to build interactive, user-focused applications using
              React and modern front-end technologies.            </p>
          </div>
          <div className="portfolio-card-cont flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* Row 1 */}
            <div className="portfolio-card left r-1 basis-1/3 flex-1 bg-slate-200 flex-row  rounded-md justify-between">
              <div className="pt-0  pb-3 my-1 flex-1 px-2">
                <div className="flex flex-row">
                  <h1 className="px-4 py-2 pt-4 text-xl">Animated Trip Display</h1>
                  <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer"><a href="https://github.com/xpikachuzz/course-shop" target="_blank" rel="noreferrer" >{"<git />"}</a></h1>
                </div>
                <div className="px-4 text-sm">
                  <p className="font-bold my-1">Skills:</p>
                  From this I learnt a library I didnt know I needed, Redux, it simplified global state mangement
                  and removed the need for irrelevant prop drillings.
                  I also learnt how to create <b>google sign in</b>. And fetched data from local json server.
                  <br />
                  <p className="font-bold my-1">Improvements:</p>
                  Learn how to move local json server to backend and use it to store registered emails and product
                  details.
                </div>
              </div>
              <div className="pb-2 px-2">
                <a href="https://trip-flex.netlify.app" target="_blank" rel="noreferrer">
                  <Image
                    className="w-full rounded-b h-full object-cover"
                    src={web5}
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    alt="site_cover"
                  />
                </a>
              </div>
            </div>
            <div className="portfolio-card right r-1 basis-1/3 flex-1 h-full bg-slate-200  rounded-md overflow-hidden justify-between">
              <div className="pt-0 px-2 pb-3 my-1">
                <div className="flex flex-row">
                  <h1 className="px-4 py-2 pt-4 text-xl">Anime Search</h1>
                  <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer"><a href="https://github.com/xpikachuzz/absCinema" target="_blank" rel="noreferrer" >{"<git />"}</a></h1>
                </div>
                <div className="px-4 text-sm">
                  <p className="font-bold my-1">Skills:</p>
                  Handling filters, states, public api calls and searches at the same time.
                  <br />
                  <p className="font-bold my-1">Improvements:</p>
                  Display trailers (available through the api), improve the design and adding a dark mode.
                </div>
              </div>
              <div className="w-full h-full px-2 pb-2">
                <a href="https://animemate.netlify.app" target="_blank" rel="noreferrer">
                  <Image
                    className="w-full rounded-b h-full object-cover"
                    src={web6}
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    alt="site_cover"
                  />
                </a>
              </div>
            </div>

            {/* Row 2 */}
            <div className="portfolio-card left r-2 basis-1/3 flex-1 bg-slate-200 flex-row  rounded-md justify-between">
              <div className="pt-0  pb-3 my-1 flex-1 px-2">
                <div className="flex flex-row">
                  <h1 className="px-4 py-2 pt-4 text-xl">eCommerce Website</h1>
                  <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer"><a href="https://github.com/xpikachuzz/course-shop" target="_blank" rel="noreferrer" >{"<git />"}</a></h1>
                </div>
                <div className="px-4 text-sm">
                  <p className="font-bold my-1">Skills:</p>
                  From this I learnt a library I didnt know I needed, Redux, it simplified global state mangement
                  and removed the need for irrelevant prop drillings.
                  I also learnt how to create <b>google sign in</b>. And fetched data from local json server.
                  <br />
                  <p className="font-bold my-1">Improvements:</p>
                  Learn how to move local json server to backend and use it to store registered emails and product
                  details.
                </div>
              </div>
              <div className="pb-2 px-2">
                <a href="https://course-shopy.netlify.app" target="_blank" rel="noreferrer">
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
                  <h1 className="px-4 py-2 pt-4 text-xl">Anime Search</h1>
                  <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer"><a href="https://github.com/xpikachuzz/absCinema" target="_blank" rel="noreferrer" >{"<git />"}</a></h1>
                </div>
                <div className="px-4 text-sm">
                  <p className="font-bold my-1">Skills:</p>
                  Handling filters, states, public api calls and searches at the same time.
                  <br />
                  <p className="font-bold my-1">Improvements:</p>
                  Display trailers (available through the api), improve the design and adding a dark mode.
                </div>
              </div>
              <div className="w-full h-full px-2 pb-2">
                <a href="https://animemate.netlify.app" target="_blank" rel="noreferrer">
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
            <div className="portfolio-card left r-3 basis-1/3 flex-1 h-full bg-slate-200  rounded-md overflow-hidden justify-between">
              <div className="pt-0 px-2 pb-2 my-1">
                <div className="pt-0 px-2 pb-3 my-1 ">
                  <div className="flex flex-row">
                    <h1 className="px-4 py-2 pt-4 text-xl">To-Do Task</h1>
                    <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer"><a href="https://github.com/xpikachuzz/task-mate" target="_blank" rel="noreferrer" >{"<git />"}</a></h1>
                  </div>
                  <div className="px-4 text-sm">
                    <p className="font-bold my-1">Skills:</p>
                    This is my earlier project. A simple to-do list where the tasks are editable.
                    It also lets you log-in to google
                    <br />
                    <p className="font-bold my-1">Improvements:</p>
                    Learn the <code>react.email</code> library to email the tasks to yourself after
                    you logged in-to google.
                  </div>
                </div>
                <div className="w-full h-full">
                  <a href="https://task-maty.netlify.app" target="_blank" rel="noreferrer">
                    <Image
                      className="w-full rounded-b h-full object-cover"
                      src={web2}
                      width={"100%"}
                      height={"100%"}
                      layout="responsive"
                      alt="site_cover"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-card right r-3 basis-1/3 flex-1 h-full bg-slate-200  rounded-md overflow-hidden justify-between">
              <div className="pt-0 px-2 pb-3 my-1">
                <div className="flex flex-row">
                  <h1 className="px-4 py-2 pt-4 text-xl">Chess OOP</h1>
                  <h1 className="px-4 py-2 pt-4 text-xl text-gray-400 hover:underline hover:cursor-pointer"><a href="https://github.com/xpikachuzz/chessy" target="_blank" rel="noreferrer" >{"<git />"}</a></h1>
                </div>
                <div className="px-4 text-sm">
                  <p className="font-bold my-1">Skills:</p>
                  <b>I enjoyed discovering how react (especially the useState) lends itself to OOP, you return a new
                    object and set it as the newState then it refreshes.</b>
                  <br />
                  Object Orientied Programming. Reusable classes. I can add any piece anywhere on the
                  board and the game will still work. I can create customer pieces limited consequences.
                  <br />
                  <p className="font-bold my-1">Improvements:</p>
                  Add easy to add key features such as 2 steps first a pawns first move. Add animations
                  for when pieces move. Show killed pieces.
                  Modularize the process of finding possible moves.
                </div>
                <div className="w-full h-full mt-4">
                  <a href="https://chess-maty.netlify.app" target="_blank" rel="noreferrer">
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
        </section>
      </main>
    </div >
  );
}
