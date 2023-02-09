import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
	// const [isVisible, setIsVisible] = useState(false);

	return (
		<div className=" mt-5 border border-slate-400 rounded-md py-2 px-4">
			<div className="flex flex-row justify-between">
				<h2 className="font-semibold text-xl mb-2">{title}</h2>
				<button
					className="underline cursor-pointer"
					onClick={() => setIsVisible()}
				>
					{isVisible ? "Hide" : "Show"}
				</button>
			</div>
			{isVisible && <p>{desc}</p>}
		</div>
	);
};

const Instamart = () => {
	const [visibleSection, setVisibleSection] = useState("about");
	return (
		<div className="w-[70%] mx-auto mt-10 ">
			<h1 className="text-5xl font-extrabold mb-10">Instamart</h1>
			<Section
				title="About Instamart"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				isVisible={visibleSection === "about"}
				setIsVisible={() =>
					visibleSection === "about"
						? setVisibleSection("")
						: setVisibleSection("about")
				}
			/>
			<Section
				title="Team Instamart"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				isVisible={visibleSection === "team"}
				setIsVisible={() =>
					visibleSection === "team"
						? setVisibleSection("")
						: setVisibleSection("team")
				}
			/>
			<Section
				title="Careers"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				isVisible={visibleSection === "career"}
				setIsVisible={() =>
					visibleSection === "career"
						? setVisibleSection("")
						: setVisibleSection("career")
				}
			/>
		</div>
	);
};

export default Instamart;
