import Link from "next/link";

export const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="bg-[#E90074] h-2 w-full"></div>

            <div className="bg-[#000000] min-h-screen lg:min-h-[80vh] relative">
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen lg:min-h-[80vh] px-4 sm:px-8 md:px-16">
                    <div className="w-full max-w-6xl flex justify-between items-center absolute top-8 lg:top-6 pl-4 lg:pl-0">
                        <div className="flex items-center space-x-2">
                            <span className="text-white text-2xl font-extrabold tracking-wide">FakeLiveStream</span>
                            <span className="text-sm font-bold text-[#E90074] bg-white px-2 py-0.5 rounded-md uppercase">Prank App</span>
                        </div>
                        <button className="hidden lg:block bg-[#E90074] text-white px-4 py-2 rounded-lg hover:bg-[#e28e4f]">
                            <Link 
                                href="https://github.com/cu8code/FakeLiveStreamApp/releases/download/0.0.0/application-cd67d75f-de14-4d51-8d7f-7de38494c7fa.apk"
                                className="bg-[#E90074] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#e28e4f] transition-all duration-300"
                            >
                                Download Now
                            </Link>
                        </button>
                    </div>

                    <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:gap-12 gap-4 mt-24 lg:mt-0">
                        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                            <h1 className="text-4xl font-bold mb-4">
                                Prank Your Friends with <span className="text-[#E90074]">FakeLiveStream</span>
                            </h1>
                            <p className="text-lg mb-6">
                                FakeLiveStream is the ultimate prank app designed to simulate a live streaming experience. 
                                Perfect for pulling hilarious pranks on your friends and family. 
                                <span className="text-[#E90074] font-bold">
                                    Download now and start having fun!
                                </span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link 
                                    href="https://github.com/cu8code/FakeLiveStreamApp/releases/download/0.0.0/application-cd67d75f-de14-4d51-8d7f-7de38494c7fa.apk"
                                    className="bg-[#E90074] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#e28e4f] transition-all duration-300"
                                >
                                    Download Now
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="relative w-[350px] h-[600px] rounded-lg overflow-hidden shadow-lg">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={"/hero.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};