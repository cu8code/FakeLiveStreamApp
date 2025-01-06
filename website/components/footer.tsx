import { AArrowDown, Check, Building2 } from "lucide-react";
import { Card, CardHeader, CardContent, WrapperGetStarted } from "./utils";

export const Footer = () => {
	const socials = [
		{ name: "Twitter", url: "https://twitter.com/fake_livestream_app" },
		{ name: "LinkedIn", url: "https://linkedin.com/company/fake_livestream_app" },
		{ name: "YouTube", url: "https://youtube.com/@fake_livestream_app" },
		{ name: "Instagram", url: "https://instagram.com/fake_livestream_app" }
	];

	return (
		<footer className="bg-[#000] pt-16 pb-8">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-12">Simple, Transparent Pricing</h2>
					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Card className="border-2 hover:border-[#E90074] transition-all duration-300">
							<CardHeader className="text-center p-6">
								<div className="flex justify-center mb-4">
									<AArrowDown className="w-12 h-12 text-[#E90074]" />
								</div>
								<h3 className="text-2xl font-bold">Individual Creator</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold">$0</span>
									<span className="text-gray-600">/month</span>
								</div>
							</CardHeader>
							<CardContent className="p-6">
								<ul className="space-y-4 text-left">
									<li className="flex items-center gap-2">
										<Check className="w-5 h-5 text-green-500" />
										<span>Content monitoring</span>
									</li>
									<li className="flex items-center gap-2">
										<Check className="w-5 h-5 text-green-500" />
										<span>Up to 2 videos/month</span>
									</li>
									<li className="flex items-center gap-2">
										<Check className="w-5 h-5 text-green-500" />
										<span>1 FFY (we negotiate with company for you when copyright gets violated)</span>
									</li>
								</ul>
                                <WrapperGetStarted>
								<button className="w-full bg-[#E90074] text-white py-3 rounded-lg mt-6 font-semibold">
									Get Started Free
								</button>
                                </WrapperGetStarted>
							</CardContent>
						</Card>

						<Card className="border-2 hover:border-[#E90074] transition-all duration-300 relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-[#E90074] text-white px-4 py-1 rounded-full text-sm font-medium">
									Coming Soon
								</span>
							</div>
							<CardHeader className="text-center p-6">
								<div className="flex justify-center mb-4">
									<Building2 className="w-12 h-12 text-[#E90074]" />
								</div>
								<h3 className="text-2xl font-bold">Industry Leader</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold">$10</span>
									<span className="text-gray-600">/month</span>
								</div>
							</CardHeader>
							<CardContent className="p-6">
								<ul className="space-y-4 text-left">
									<li className="flex items-center gap-2 text-gray-400">
										<Check className="w-5 h-5" />
										<span>Advanced AI monitoring</span>
									</li>
									<li className="flex items-center gap-2 text-gray-400">
										<Check className="w-5 h-5" />
										<span>Unlimited videos</span>
									</li>
									<li className="flex items-center gap-2 text-gray-400">
										<Check className="w-5 h-5" />
										<span>24/7 priority support</span>
									</li>
								</ul>
								<button disabled className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg mt-6 font-semibold cursor-not-allowed">
									Coming Soon
								</button>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="border-t text-white pt-8 flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						© 2024 fake_livestream_app. All rights reserved.
					</div>
					<div className="flex gap-6">
						{socials.map(social => (
							<a
								key={social.name}
								href={social.url}
								className="hover:text-[#E90074] transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								{social.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
