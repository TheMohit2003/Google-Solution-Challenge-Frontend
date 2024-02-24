import React from 'react'
import Navbar from "./Navbar"

export default function AboutUs() {
    return (
        <section className="bg-white text-gray-600">
            <Navbar />
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto  text-center">
                    <h2 className="text-3xl  font-bold sm:text-4xl">Fueling connections, forging partnerships</h2>

                    <p className="mt-10 mx-auto text-lg max-w-md text-gray-550">
                        We're the catalyst for collaborative success in the world of issuers and vendors. Ignite your business journey with us!
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <p
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >
                        <img src="public\images\leadership.png" alt="img" />

                        <h2 className="mt-4 text-xl font-bold text-black">Our Mission</h2>

                        <p className="mt-1  text-sm text-gray-600">
                            At ServiMatch, we're transforming connections between service issuers and contractors. Our seamless platform streamlines project discovery, bidding, and completion, empowering businesses and individuals to reach their goals effortlessly
                        </p>
                    </p>

                    <p
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >


                        <h2 className="mt-4 text-xl font-bold text-black">Our Vision</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Empowering seamless connections, driving efficiency, and fostering unparalleled success. We're revolutionizing service connections worldwide with innovative technology and unwavering excellence.
                        </p>
                    </p>

                    <p
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >


                        <h2 className="mt-4 text-xl font-bold text-black">Efficient Project Management</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            ServiMatch simplifies project management with a streamlined process that ensures efficiency and transparency, empowering seamless collaboration and delivering exceptional results.
                        </p>
                    </p>

                    <p
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >


                        <h2 className="mt-4 text-xl font-bold text-black">Efficient Matchmaking</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            ServiMatch excels in swiftly pairing issuers with contractors, ensuring seamless collaboration and timely project execution, fostering optimal outcomes for all stakeholders.
                        </p>
                    </p>

                    <p
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >


                        <h2 className="mt-4 text-xl font-bold text-black">Transparent Bidding, Pricing</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Experience the power of instant bidding and crystal-clear pricing structures. At ServiMatch, we ensure transparency and efficiency, empowering you with real-time insights for confident decision-making.
                        </p>
                    </p>

                    <p
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >


                        <h2 className="mt-4 text-xl font-bold text-black">Seamless Support</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            At ServiMatch, our dedicated support team is committed to ensuring every interaction is smooth and hassle-free. From start to finish, we're here to provide unparalleled assistance, guaranteeing a seamless experience for all our users.
                        </p>
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>

        </section>
    )
}
