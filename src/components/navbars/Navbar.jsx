import React, { useState, useEffect } from "react";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import useAuthStore from "../../store/useAuthStore";
import useEventStore from "../../store/useEventStore";
import TypingEffect from "../effects/TypingEffect";

const badgeEmojiMap = {
    Tech: "💻",
    Cultural: "🎭",
    Sports: "🏆",
    Business: "💼",
    Music: "🎶",
    Dance: "💃",
    Debate: "🗣️",
    Hackathon: "🚀",
    Gaming: "🎮",
    Quiz: "❓",
    Workshop: "🛠️",
    Seminar: "🎓",
    Startup: "🚀",
    Art: "🎨",
    Photography: "📸",
};

const Navbar = () => {
    const { login } = useAuthStore();
    const { events } = useEventStore();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [eventMessages, setEventMessages] = useState([]);

    useEffect(() => {
        if (events.length > 0) {
            const messages = events.map(event => {
                const emoji = badgeEmojiMap[event.badge] || "✨";
                return `${emoji} ${event.name} - ${new Date(event.date).toDateString()}`;
            });
            setEventMessages(messages);
        }
    }, [events]);

    useEffect(() => {
        if (isModalOpen || isSignupModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen, isSignupModalOpen]);

    return (
        <>
            <nav className="navbar bg-white border-b border-gray-300 w-full">
                <div className="max-w-[1440px] w-full mx-auto px-4 flex justify-between items-center">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl font-bold transition transform hover:scale-105 shimmer-effect color-change">
                            <span className="text-xl md:text-2xl font-bold text-orange-600">
                                SDIET
                                <span className="text-xl md:text-2xl font-bold text-indigo-600">Techies</span>
                            </span>

                        </a>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 text-[#291e00] text-lg font-bold hidden lg:block">
                        {eventMessages.length > 0 && <TypingEffect messages={eventMessages} />}
                    </div>

                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 space-x-6 font-bold">
                            <li>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-[#291e00] hover:text-[#d4d2d2] transition-colors duration-300 border border-[#291e00] px-4 py-2 rounded-md"
                                >
                                    Login
                                </button>
                            </li>
                            <li>
                                <button
                                    className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors duration-300 border border-orange-500"
                                    onClick={() => setIsSignupModalOpen(true)}
                                >
                                    Sign Up
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ✅ Working Login & Signup Modals */}
            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            {isSignupModalOpen && <SignUpModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />}
        </>
    );
};

export default Navbar;
