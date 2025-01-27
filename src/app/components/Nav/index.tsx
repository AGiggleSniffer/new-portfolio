import Image from "next/image";
import React from "react";
import { CgMenuMotion, CgMoon } from "react-icons/cg";

const Nav = () => {
	return (
		<div className="sticky flex justify-between top-0 p-4">
			<span className="flex justify-center items-center">
				<Image
					className="mr-2"
					src="/favicon.ico"
					alt="website logo"
					width={30}
					height={20}
				/>
				Chris W
			</span>
			<span className="flex justify-center items-center gap-4">
				<span>
					<CgMoon className="size-8" />
				</span>
				<span>
					<CgMenuMotion className="size-8" />
				</span>
			</span>
		</div>
	);
};

export default Nav;
