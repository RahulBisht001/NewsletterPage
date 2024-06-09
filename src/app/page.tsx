"use client";

import {useState, FormEvent} from "react";
import axios from "axios";

import {socials} from "../utils/social";
import Link from "next/link";
import toast from "react-hot-toast";

const Page = () => {
    const [value, setValue] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axios
        .post("https://inboxiq.rahulbisht.com/api/subscribe", {
            apiKey: process.env.API_KEY,
            email: value,
        })
        .then((res) => {
            toast.success("Subscribed!");
            console.log(res);
        })
        .catch((err) => {
            toast.error("Something went wrong!");
            console.log(err.message);
        });
        setValue("");
    };

    return (
        <>
            <main className="font-Outfit tracking-wide bg-gradient-to-bl from-[#110827] to-[#000] flex flex-col items-center justify-center p-10 min-h-screen">
                <section className="space-y-1 text-center mb-5">
                    <h2 className="text-3xl font-bold text-transparent duration-1000 bg-white cursor-default text-stroke sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
                        Join the waitlist for my
                    </h2>
                    <h1 className="z-10 text-4xl font-bold text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-bl from-[#1534ad] to-[#ae00ff] animate-fade-in-3">
                        Newsletter
                    </h1>
                </section>

                <section className="w-full flex flex-col items-center justify-center text-black">
                    <form
                        className="w-80 sm:w-full max-w-xl sm:max-w-md overflow-hidden"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="flex my-5 h-12">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full px-4 py-3 focus:outline-none rounded-l-lg font-[400]"
                                placeholder="Enter your email here . . . ."
                                aria-label="Email Address"
                            />
                            <button
                                type="submit"
                                className="bg-purple-500 text-white font-normal px-1 sm:px-3 hover:bg-purple-600 focus:outline-none rounded-r-lg flex items-center"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div>
                            <p className="font-[400] mt-5 text-center text-gray-500">
                                Powered by
                                <Link
                                    href={"https://www.inboxiq.rahulbisht.com"}
                                    className="mx-2 text-green-500 text-base"
                                >
                                    inboxIQ
                                </Link>
                            </p>
                        </div>
                    </form>

                    <div className="flex items-center justify-center gap-x-6 sm:gap-x-2 mt-5 md:w-[400px]">
                        {socials.map((social) => (
                            <a
                                key={social.id}
                                className="flex items-center justify-center flex-1 cursor-pointer group md:hover:shadow-outline-gray rounded-[9px] p-2 text-white text-3xl gap-4"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                                <div className="text-xs sm:text-sm space-y-1">
                                    <p className="text-[#ADB0B1] group-hover:text-white transition font-medium">
                                        {social.name}
                                    </p>
                                    <p className="text-[#5a5b63]">{social.handle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
                <footer className="text-white fixed bottom-4">Made with ❤️ By RahulB</footer>
            </main>
        </>
    );
};

export default Page;
