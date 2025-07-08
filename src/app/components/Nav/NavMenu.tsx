import React from "react";

interface NavMenuProps {
	onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ onClose }) => {
	return (
		<aside
			className="fixed inset-0 z-40 bg-white/90 backdrop-blur font-display"
			onClick={onClose}
		>
			<nav className="absolute bottom-16 left-12 flex flex-col gap-12">
				<a
					href="#work"
					className="font-extrabold text-5xl md:text-8xl text-black hover:text-gray-700 transition-colors"
				>
					Work
				</a>
				<a
					href="#extras"
					className="font-extrabold text-5xl md:text-8xl text-black hover:text-gray-700 transition-colors"
				>
					Extras
				</a>
				<a
					href="#interact"
					className="font-extrabold text-5xl md:text-8xl text-black hover:text-gray-700 transition-colors"
				>
					Interact
				</a>
				<a
					href="#contact"
					className="font-extrabold text-5xl md:text-8xl text-black hover:text-gray-700 transition-colors"
				>
					Contact
				</a>
			</nav>
			<div className="absolute bottom-16 right-12 flex flex-col gap-12 text-base text-right mt-16">
				<div className="flex flex-col gap-2">
					<a
						href="mailto:email@email.com"
						className="font-bold underline"
					>
						EMAIL@EMAIL.COM
					</a>
					<a href="#" className="underline">
						BOOK A MEETING
					</a>
				</div>
				<div className="flex gap-4 justify-end mt-2 text-sm">
					<a href="#">LinkedIn</a>
					<a href="#">Dev.to</a>
					<a href="#">GitHub</a>
					<a href="#">YouTube</a>
					<a href="#">Twitter</a>
				</div>
			</div>
		</aside>
	);
};

export default NavMenu;
