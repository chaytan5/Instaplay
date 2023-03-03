import React from "react";

const NavItem = ({ name }) => {
	return (
		<div className="pl-2 py-3 rounded-lg hover:bg-gray-200 ease-in-out cursor-pointer">
			{name}
		</div>
	);
};

export default NavItem;
