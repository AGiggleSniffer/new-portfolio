const Hero = () => {
	return (
		<section className="relative flex flex-col items-start justify-center w-svw h-svh px-6 md:px-12 py-32 md:py-48 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
			<h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight mb-4 font-sans z-10">
				Hello I&apos;m{" "}
				<span className="text-blue-600 drop-shadow-lg">Chris</span>
				<span className="ml-2 text-5xl md:text-7xl align-top animate-wave">
					👋
				</span>
			</h1>
			<p className="text-lg md:text-2xl text-gray-600 mb-2 font-medium pl-1 z-10">
				Full Stack Software Engineer
			</p>
			<p className="max-w-xl text-base md:text-xl text-gray-700 mt-2 pl-1 z-10">
				I like to make immersive environments and enjoy seeing people
				excited by software.
			</p>
		</section>
	);
};

export default Hero;
