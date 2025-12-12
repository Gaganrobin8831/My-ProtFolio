import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const AboutMe = () => {
    const imgRef = useRef()
    const txtRef = useRef()
    const headTxtRef = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.fromTo(
            headTxtRef.current,
            { scale:0.2, opacity: 0 },
            {scale:1, opacity: 1, duration: 2,delay:2, ease: "power2.out" }
        )
        tl.fromTo(
            imgRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
        )
        tl.fromTo(  
            txtRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power2.out" },
            "-=0.5"
        )
    },[])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-20 px-7">
            <h1 className="px-2 lg:px-5 lg:p-5 text-4xl lg:text-8xl font-serif font font-extrabold my-9 mt-13 w-[80%] border-l-8 " ref={headTxtRef}>About Me</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-9 w-[80%] ">
                <div
    ref={imgRef}
                    className="
          w-[330px] h-[330px] rounded-full overflow-hidden shadow-2xl 
          flex items-center justify-center cursor-pointer 
          hover:scale-105
          will-change-transform
          mt-10 lg:mt-0 
        "
                    // 👆 Added mt-10 lg:mt-0 to the image wrapper for better spacing on mobile between text and image
                    style={{
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                        WebkitFontSmoothing: "antialiased",
                    }}
                >
                    <img
                        src="/images/profile1.png"
                        alt="Profile"
                        className="
            w-full h-full rounded-full 
            object-cover 
            hover:scale-110 
            will-change-transform
            select-none
          "
                        style={{
                            transform: "translateZ(0)",
                            backfaceVisibility: "hidden",
                            WebkitFontSmoothing: "antialiased",
                        }}
                        draggable="false"
                        loading="lazy"
                    />
                </div>

                <div className=" lg:w-[50%] " ref={txtRef}>
                        <p>I view software development through two lenses: the engineer and the instructor.

                My foundation is built on 1.5 years of teaching the MERN Stack still working as a teacher, where I broke down complex concepts for students daily. This experience didn't just teach me how to code—it taught me how to communicate technical ideas clearly and debug code efficiently.I backed this theoretical mastery with practical application as a Backend Developer at Netweb Technology (Feb 2024 to Dec 2024), working on production-level architectures. Today, I combine these worlds to build robust React Native apps and Live MERN projects, ensuring every line of code serves a purpose.</p>
                <div className="w-auto min-h-[50%] my-7 flex flex-wrap gap-[30px]">
                    <p className="min-h-[60px] w-[150px] font-serif ">BIRTH PLACE  <br /><span>Amritsar</span></p>
                    <p className="min-h-[60px] w-[150px] font-serif ">RESIDENCE <br /> <span>Kot Mit Singh</span></p>
                    <p className="min-h-[60px] w-[150px] font-serif ">HOBBIES  <br /><span>Coding</span></p>
                    <p className="min-h-[60px] w-[150px] font-serif ">BORN  <br /><span>03/03/2000</span></p>
                    <p className="min-h-[60px] w-[150px] font-serif ">EDUCATION  <br /><span>BSC(IT)</span></p>
                    <p className="min-h-[60px] w-[150px] font-serif ">Email  <br /><a href="mailto:gagandeep.netweb@gmail.com">gagandeep.netweb@gmail.com</a></p>
                </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe