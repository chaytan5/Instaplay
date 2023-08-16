import React from "react";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const NavItemList = [
	{ name: "Home", path: "/" },
	{ name: "Shorts", path: "/#" },
	{ name: "Subscriptions", path: "/#" },
	{ name: "Music", path: "/#" },
	{ name: "Sports", path: "/#" },
	{ name: "Watch Later", path: "/#" },
	{ name: "Watch Again", path: "/#" },
];

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	if (!isMenuOpen) return null;

	return (
		<div className="h-full w-40 mr-5 shrink-0">
			{NavItemList.map((item) => (
				<Link to={item.path} key={item.name}>
					<NavItem name={item.name} />
				</Link>
			))}
		</div>
	);
};

export default Sidebar;
