import React from "react";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";

const NavItemList = ["Home", "Shorts", "Subscriptions", "Music", "Sports"];

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	// !true = false
	// !false = true
	if (!isMenuOpen) return null;

	return (
		<div className="h-full w-48 mr-5 shrink-0">
			{NavItemList.map((item, idx) => (
				<NavItem key={idx} name={item} />
			))}
		</div>
	);
};

export default Sidebar;
