import React from 'react'
import logo from '/logo.jpg'
import video from "/promo-video.webm"
import {FaWhatsapp} from "react-icons/fa";

export default function App() {
    return (
        <div className='font-sans bg-gray-900 text-gray-100'>
            <header className='bg-black text-white py-6 shadow-lg border-b-4 border-yellow-500'>
                <div className='max-w-6xl mx-auto px-6 flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                        <img src={logo} alt='Flamirite Logo' className='h-12 w-auto'/>
                        <div>
                            <h1 className='text-3xl font-extrabold text-yellow-400 tracking-widest'>FLAMIRITE</h1>
                            <p className='text-sm text-gray-400 italic'>Your Career Starts Here</p>
                        </div>
                    </div>
                    <a
                        href='#form'
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition text-sm sm:text-base"
                    >
                        Apply Now
                    </a>
                </div>
            </header>

            <main className='max-w-6xl mx-auto p-6'>

                <section className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10'>
                    <div>
                        <span
                            className="inline-block bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-3">Next Intake: Soon</span>
                        <h2 className='text-4xl sm:text-5xl font-extrabold mb-6 text-yellow-400 leading-tight'>
                            Become a Certified Casino Dealer
                        </h2>
                        <p className='mb-4 text-lg text-gray-300'>
                            Train with casino experts, master the tables, and unlock opportunities at top casinos
                            worldwide.
                        </p>
                        <ul className='list-disc ml-6 space-y-2 text-gray-200 text-sm sm:text-base'>
                            <li>Blackjack, Poker, Roulette & Baccarat Mastery</li>
                            <li>Professional Guest Service & Casino Etiquette</li>
                            <li>Security, Compliance & High-Standards Training</li>
                            <li>Career Coaching & Guaranteed Interviews</li>
                        </ul>
                        <a href='#form'
                           className='mt-6 inline-block bg-yellow-500 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-yellow-600 transition text-sm sm:text-base'>
                            Secure Your Seat
                        </a>
                    </div>
                    <div className='flex justify-center'>
                        <img src='/flamirite-hero.jpg' alt='casino dealer'
                             className='rounded-xl shadow-2xl border-4 border-yellow-500 w-full max-w-md sm:max-w-full'/>
                    </div>
                </section>

                <section className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='bg-black p-6 rounded-xl shadow-lg border border-yellow-500'>
                        <h3 className='text-xl font-bold mb-3 text-yellow-400 uppercase'>Course Details</h3>
                        <p><strong>📍 Training Location:</strong> Johannesburg</p>
                        <p><strong>⏳ Duration:</strong> 12 Weeks</p>
                        <p><strong>🎓 Certificate:</strong> On Completion</p>
                        <p><strong>💰 Investment:</strong> R15,000 (payment plans available)</p>
                    </div>
                    <div className='bg-black p-6 rounded-xl shadow-lg border border-gray-700'>
                        <h3 className='text-xl font-bold mb-3 text-yellow-400 uppercase'>Who This Is For</h3>
                        <ul className='space-y-2 text-sm sm:text-base'>
                            <li>✔️ Age 18–35</li>
                            <li>✔️ Matric (Maths, Accounting, or Math Literacy)</li>
                            <li>✔️ Motivated & Professional</li>
                            <li>✔️ Ready for a global career</li>
                        </ul>
                        <h4 className='mt-6 font-semibold text-yellow-400 uppercase'>Not For</h4>
                        <ul className='space-y-2 text-sm sm:text-base'>
                            <li>✘ People looking for shortcuts</li>
                            <li>✘ Those not serious about a casino career</li>
                        </ul>
                    </div>
                </section>

                <section id="form" className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div
                        className="bg-black rounded-xl shadow-xl p-6 md:p-8 border border-yellow-500 flex justify-center">
                        <div className="w-full max-w-xl">
                            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center text-yellow-400">
                                🎰 Apply Now — Limited Seats Available
                            </h3>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSctA_Ivwj8CYzffa-71objHOb6wSSdQEU9m2OhEGchFulBewQ/viewform?embedded=true"
                                width="100%"
                                className="rounded-lg min-h-[450px] sm:min-h-[550px]"
                                title="Application Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-black p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                            <p className="italic text-gray-300 text-sm sm:text-base">
                                "This course helped me land a casino job immediately after graduation. I had no
                                experience, just ambition."
                            </p>
                            <p className="mt-2 sm:mt-4 font-semibold text-yellow-400 text-sm sm:text-base">— Dimpho,
                                Graduate</p>
                        </div>

                        <div className="bg-black p-4 sm:p-6 rounded-xl shadow-xl border border-gray-700">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-yellow-400 uppercase">Graduate
                                Success</h3>
                            <video
                                src={video}
                                controls
                                className="w-full rounded-lg shadow-lg border border-yellow-500"
                                style={{ maxHeight: '280px', objectFit: 'contain' }}
                                preload="metadata"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="bg-black p-4 sm:p-6 rounded-xl shadow-lg text-center border border-green-500">
                            <p className="mb-2 sm:mb-3 font-semibold text-gray-200 text-sm sm:text-base">Still have
                                questions?</p>
                            <a
                                href="https://wa.me/27112563879"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow hover:bg-green-600 transition text-xs sm:text-sm"
                            >
                                <FaWhatsapp className="text-base sm:text-lg"/>
                                Chat with a Training Advisor
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='bg-black text-gray-400 py-6 sm:py-8 mt-16 border-t border-gray-700'>
                <div className='max-w-6xl mx-auto px-6 text-center'>
                    <p className='text-sm sm:text-base'>© {new Date().getFullYear()} Flamirite Academy — All rights
                        reserved.</p>
                    <p className='text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2'>Empowering South Africa’s future casino
                        professionals</p>
                </div>
            </footer>
        </div>
    )
}
