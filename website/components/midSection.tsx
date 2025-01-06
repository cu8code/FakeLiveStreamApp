import { Shield, Bot, Check, X } from "lucide-react";
import Link from "next/link";

export const Call = () => {
    return (
            <button className="bg-[#E90074] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#e28e4f] transition-all duration-300">
            <Link 
                                    href="https://github.com/cu8code/FakeLiveStreamApp/releases/download/0.0.0/application-cd67d75f-de14-4d51-8d7f-7de38494c7fa.apk" // Replace with your download link
                                    className="bg-[#E90074] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#e28e4f] transition-all duration-300"
                                >
                                    Download Now
                                </Link>
            </button>
    );
};

export const Midsection = () => {
    const comparisons = [
        {
            question: "Does it simulate a realistic live stream?",
            us: "Highly realistic simulation to fool your friends.",
            them: "Basic or unconvincing prank features.",
            usHas: true,
            themHas: false,
        },
        {
            question: "Can you customize the prank for different scenarios?",
            us: "Fully customizable to fit any situation.",
            them: "Limited or no customization options.",
            usHas: true,
            themHas: false,
        },
        {
            question: "Will it help you find out who your real friends are?",
            us: "Reveals true friends through their reactions.",
            them: "No focus on testing friendships.",
            usHas: true,
            themHas: false,
        },
        {
            question: "Is it easy to set up and use?",
            us: "Simple setup and intuitive interface.",
            them: "Complicated or confusing to use.",
            usHas: true,
            themHas: false,
        },
        {
            question: "Does it include fun and creative prank ideas?",
            us: "Provides endless prank ideas for maximum fun.",
            them: "No guidance or creative support.",
            usHas: true,
            themHas: false,
        },
        {
            question: "Can you share the prank results with others?",
            us: "Easily shareable for laughs and memories.",
            them: "No sharing options or limited functionality.",
            usHas: true,
            themHas: false,
        },
        {
            question: "Is it safe and harmless for everyone involved?",
            us: "Designed to be fun and harmless for all.",
            them: "Potential for unintended consequences.",
            usHas: true,
            themHas: false,
        },
        {
            question: "Does it work on all devices?",
            us: "Compatible with all major devices and platforms.",
            them: "Limited device compatibility.",
            usHas: true,
            themHas: false,
        },
    ];

    return (
        <div className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* About Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Discover Who Your Real Friends Are!
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                            FakeLiveStream is the ultimate prank app designed to test your friendships in the most hilarious way. 
                            Simulate a live stream and see how your friends react—find out who truly has your back!
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-8 h-8 text-[#E90074]" />
                                    <h3 className="font-bold text-2xl">Realistic Prank Experience</h3>
                                </div>
                                <p className="text-lg">
                                    Our app creates a highly realistic live stream simulation to fool even the most skeptical friends.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <Bot className="w-8 h-8 text-[#E90074]" />
                                    <h3 className="font-bold text-2xl">Test Your Friendships</h3>
                                </div>
                                <p className="text-lg">
                                    Find out who your real friends are by seeing how they react to your fake live stream.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Call />
                        </div>
                    </div>
                </div>

                {/* Responsive Comparison Table */}
                <div className="overflow-hidden shadow-lg rounded-2xl">
                    <div className="hidden sm:grid sm:grid-cols-3 bg-gray-100">
                        <div className="p-6 text-xl font-bold">Feature</div>
                        <div className="p-6 text-xl font-bold bg-[#E90074] text-white">FakeLiveStream</div>
                        <div className="p-6 text-xl font-bold bg-gray-600 text-white">Other Prank Apps</div>
                    </div>

                    {comparisons.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 sm:grid-cols-3 sm:gap-0 gap-4 sm:border-none border-b sm:bg-transparent bg-gray-50"
                        >
                            <div className="p-6 text-lg font-medium sm:border-b">{item.question}</div>
                            <div className="p-6 text-lg bg-pink-50 sm:border-b">
                                <div className="flex items-center gap-2">
                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span>{item.us}</span>
                                </div>
                            </div>
                            <div className="p-6 text-lg bg-gray-50 sm:border-b">
                                <div className="flex items-center gap-2">
                                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                                    <span className="text-gray-600">{item.them}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};