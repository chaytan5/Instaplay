import React from "react";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const NavItemList = [
	{ name: "Home", path: "/" },
	{ name: "Shorts", path: "/shorts" },
	{ name: "Subscriptions", path: "/subs" },
	{ name: "Music", path: "/music" },
	{ name: "Sports", path: "/sports" },
	{ name: "Watch Later", path: "/watch-later" },
	{ name: "Watch Again", path: "/watch-again" },
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
