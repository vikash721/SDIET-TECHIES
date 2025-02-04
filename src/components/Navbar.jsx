import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useAuthStore from "../store/useAuthStore"; // Import Zustand store

const Navbar = () => {
    const { login } = useAuthStore(); // Get login function from Zustand store

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const messages = [
        "🚀 InnovateX Hackathon - 23rd March.",
        "🥳 College Fest - 27th Feb ",
        "🏂🏻 Sports Event - 12th Feb",
        "✨ Get Ready!",
    ];

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const delayBetweenTexts = 1000;

        const handleTyping = () => {
            const fullText = messages[messageIndex];

            if (!isDeleting) {
                setCurrentMessage(fullText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else {
                setCurrentMessage(fullText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }

            if (!isDeleting && charIndex === fullText.length) {
                setTimeout(() => setIsDeleting(true), delayBetweenTexts);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setMessageIndex((prev) => (prev + 1) % messages.length);
            }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimer);
    }, [charIndex, isDeleting, messageIndex]);

    return (
        <>
            <nav className="navbar bg-[#e9e7e7] shadow-lg relative">
                <div className="navbar bg-[#e9e7e7] shadow-sm container mx-auto px-4 lg:w-2/3 flex justify-between items-center relative">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl font-bold transition transform hover:scale-105 shimmer-effect color-change">
                            SDIETTechies
                        </a>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 text-[#291e00] text-lg font-bold hidden lg:block">
                        <span>{currentMessage}</span>
                        <span className="blinking-cursor">|</span>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 space-x-6 font-bold">
                            <li>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-[#291e00] hover:text-[#d4d2d2] transition-colors duration-300 border border-[#291e00] px-4 py-2 rounded-md "
                                >
                                    Login
                                </button>
                            </li>
                            <li>
                                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 border border-black"
                                    onClick={() => setIsSignupModalOpen(true)}
                                >
                                    Sign Up
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Signup Modal */}
            {isSignupModalOpen && <SignUpModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />}

            {/* Login Modal */}
            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            
            <style>
                {`
                    .shimmer-effect:hover {
                        text-shadow: 0px 0px 10px rgba(41, 30, 0, 0.8);
                    }

                    .color-change {
                        animation: colorChange 5s infinite linear;
                    }

                    @keyframes colorChange {
                        0% { color: #291e00; }
                        25% { color: #7a6220; }
                        50% { color: #d4d2d2; }
                        75% { color: #291e00; }
                        100% { color: #7a6220; }
                    }

                    .blinking-cursor {
                        font-weight: bold;
                        font-size: 1rem;
                        margin-left: 2px;
                        animation: blink 0.8s infinite;
                    }

                    @keyframes blink {
                        50% { opacity: 0; }
                    }
                `}
            </style>
        </>
    );
};

export default Navbar;
