import React from "react";

const Footer = () => {
	return (
		<>
			<footer
				className="d-flex flex-column align-items-center justify-content-evenly bg-success-subtle"
				style={{ backgroundColor: "white", minHeight: "80px" }}
			>
				<div className="w-100 lead d-flex flex-row justify-content-around align-items-center">
					<p className="fw-normal m-0">Rootfill Inc.</p>
					<strong>2024 &copy; All rights reserved</strong>
				</div>
			</footer>
		</>
	);
};

export default Footer;
