"use client";
import React, { useState } from "react";
import { CgMenuMotion, CgMoon } from "react-icons/cg";
import NavMenu from "./NavMenu";

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<nav className="fixed top-0 left-0 z-50 flex justify-between items-center w-full px-6 md:px-12 py-4 bg-white/80 backdrop-blur border-b border-primary-light font-display text-lg shadow-sm">
				<span className="flex items-center gap-2 font-display">
					<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
						<circle
							cx="18"
							cy="18"
							r="18"
							fill="#2563eb"
							opacity="0.12"
						/>
						<path
							d="M10 18a8 8 0 0 1 16 0"
							stroke="#2563eb"
							strokeWidth="3"
							strokeLinecap="round"
							fill="none"
						/>
						<path
							d="M12 22c2 2 10 2 12 0"
							stroke="#2563eb"
							strokeWidth="3"
							strokeLinecap="round"
							fill="none"
						/>
					</svg>
					<span className="font-bold text-lg text-foreground">
						Chris Williford
					</span>
				</span>
				<span className="flex items-center gap-4">
					<span className="hover:text-primary cursor-pointer transition-colors">
						<CgMoon className="size-7 md:size-8" />
					</span>
					<span
						className="hover:text-primary cursor-pointer transition-colors"
						onClick={() => setMenuOpen(true)}
					>
						<CgMenuMotion className="size-7 md:size-8" />
					</span>
				</span>
			</nav>
			{menuOpen && <NavMenu onClose={() => setMenuOpen(false)} />}
		</>
	);
};

export default Nav;
