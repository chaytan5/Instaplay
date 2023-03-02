import React from "react";
import NavItem from "./NavItem";

const NavItemList = ["Home", "Shorts", "Subscriptions", "Music", "Sports"];

const Sidebar = () => {
	return (
		<div className="bg-slate-400 h-full w-48">
			{NavItemList.map((item) => (
				<NavItem name={item} />
			))}
		</div>
	);
};

export default Sidebar;
