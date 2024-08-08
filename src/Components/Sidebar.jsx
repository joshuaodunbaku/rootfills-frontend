// Sidebar.js
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "rea";
// import { FaHome, FaServicestack, FaInfo, FaPhone } from "react-icons/fa";

const SideBar = () => {
	return (
		<div style={{ height: "100vh", position: "relative" }}>
			<Sidebar style={{ height: "100%", position: "fixed" }}>
				<Menu>
					<SubMenu label="Charts">
						<MenuItem> Pie charts </MenuItem>
						<MenuItem> Line charts </MenuItem>
					</SubMenu>
					<MenuItem> Documentation </MenuItem>
					<MenuItem> Calendar </MenuItem>
				</Menu>
			</Sidebar>
		</div>
	);
};

export default SideBar;
