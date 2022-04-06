import React from 'react'
import EqualizerLogo from '../images/logo.svg'
import AppleIcon from '../images/icon-apple.svg'
import AndroidIcon from '../images/icon-android.svg'
import FacebookIcon from '../images/icon-facebook.svg'
import InstagramIcon from '../images/icon-instagram.svg'
import TwitterIcon from '../images/icon-twitter.svg'
import { Button } from '../button'
import { Link } from '../link'

export function Landing() {
    return (
        <div className="bg-light z-0 relative overflow-x-hidden overflow-y-auto h-full">
            <div className="flex flex-col relative h-full pt-10 md:pt-16 md:max-w-[696px] lg:max-w-[1110px] mx-auto">
                <header className="mx-6 shrink-0 md:mx-0">
                    <a href="/" title="Go to homepage">
                        <EqualizerLogo />
                    </a>
                </header>
                <main className="content flex flex-col shrink-0 grow">
                    <div className="mx-6 my-16 shrink-0 md:mx-0 md:mr-64 md:mt-24 lg:mr-40 lg:mt-32">
                        <h1>We make your music sound extraordinary.</h1>
                        <p className="my-5">
                            A system audio equalizer specifically designed for Android and iOS.
                            Freely tune the way your music sounds with a professional grade
                            parametric EQ & volume mixer. Control bass, mids, treble, gain control,
                            reverb, and more!
                        </p>
                    </div>
                    <div className="flex flex-col shrink-0 mt-24 md:mt-36 lg:mt-52 justify-items-center">
                        <div className="dark-card bg-dark h-[600px] pt-[380px] rounded-xl relative"></div>
                        <div className="bg-salmon rounded-xl -mt-[220px] py-12 px-9 text-light relative md:w-[400px] lg:w-[446px] md:-mt-[430px] md:ml-60 lg:-mt-[500px] lg:ml-[570px]">
                            <h2 className="mb-3">Premium EQ</h2>
                            <p>
                                Get expert-level control with a robust equalizer, volume mixer, and
                                spatial audio. Take your listening experience to a whole new level
                                and access all our incredible features!
                            </p>
                            <div className="mx-2">
                                <div className="flex items-center mt-9 mb-8">
                                    <span className="text-[65px] font-bold">$4</span>
                                    <span className="text-[32px] ml-4">/ month</span>
                                </div>
                                <Button variant="light" startIcon={<AppleIcon />}>
                                    iOS Download
                                </Button>
                                <Button variant="dark" startIcon={<AndroidIcon />}>
                                    Android Download
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="flex flex-wrap mx-6 mt-16 pb-16 md:mx-0 md:mt-20 md:pb-20">
                    <EqualizerLogo className="mb-8 w-full lg:w-fit" />
                    <p className="text-base mb-16 md:w-1/2 md:mb-0 lg:ml-36 lg:grow lg:max-w-sm">
                        All rights reserved © Equalizer 2021
                        <br />
                        Have any problems? Contact us via social media or email us at
                        <a href="mailto:equalizer@example.com">
                            <b> equalizer@example.com</b>
                        </a>
                    </p>
                    <div className="flex gap-5 md:w-1/2 lg:w-fit items-center justify-end lg:grow">
                        <Link href="https://fb.com" title="Visit our Facebook page">
                            <FacebookIcon />
                        </Link>
                        <Link href="https://instagram.com" title="Visit our Instagram page">
                            <InstagramIcon />
                        </Link>
                        <Link href="https://twitter.com" title="Visit our Twitter page">
                            <TwitterIcon />
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}
