import React from "react";

const Work = () => {
	return (
		<section className="z-20 flex flex-col md:flex-row items-start md:items-center justify-center w-svw h-svh px-6 md:px-12 py-24 gap-12">
			{/* Left: Info */}
			<div className="flex flex-col gap-4 max-w-xs md:max-w-sm">
				<h2 className="text-4xl md:text-5xl font-display font-extrabold mb-2">
					Chris Williford
				</h2>
				<p className="text-lg text-muted font-semibold mb-1 pl-1">
					Immersive Portfolio
				</p>
				<p className="text-base text-gray-700 mb-3 pl-1">
					A software engineer who likes to make immersive environments
					and enjoys seeing people excited by software.
				</p>
				<div className="flex gap-3 mt-2">
					<a
						href="#"
						className="px-4 py-2 rounded bg-primary text-white font-bold hover:bg-primary-dark transition-colors"
					>
						Live
					</a>
					<a
						href="#"
						className="px-4 py-2 rounded border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
					>
						GitHub
					</a>
				</div>
			</div>
			{/* Right: Website Preview Box */}
			<div className="flex-1 flex items-center justify-center">
				<div className="w-[340px] h-[220px] md:w-[520px] md:h-[340px] border-4 border-primary-dark rounded-2xl flex items-center justify-center bg-white/60 shadow-xl">
					<span className="text-xl text-muted font-bold">
						website preview
					</span>
				</div>
			</div>
		</section>
	);
};

export default Work;
