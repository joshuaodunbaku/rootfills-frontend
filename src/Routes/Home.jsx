import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Showcase } from "../Components/Styles/GlobalStyle.css";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="container py-3 my-5 w-md-75">
				{/* <h3 className="fw-bold text-black">Company Name</h3> */}
				<div className="d-flex flex-column justify=content-center align-items-center text-black py-5 text-center">
					<h3 className="lead h-1 text-font">It's ingrained in us</h3>
					<h3 className="fw-bold mb-2 display-4 text-success  text-font">
						Transforming how the world is nourished
					</h3>
					<p className="my-2 fs-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
						fugit!
					</p>
					<div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 my-3">
						<Button
							className="bg-success fw-bold rounded rounded-pill p-3 fs-5 px-5"
							variant="dark"
							eventKey={"4"}
							onClick={() => navigate("about")}
						>
							About Us {"-"}
						</Button>
						<Button
							className="fw-bold rounded-pill p-3 fs-5 px-5"
							variant="light"
							onClick={() => navigate("contact")}
						>
							Contact Us {"-"}
						</Button>
					</div>
				</div>
			</div>

			<Showcase
				bg_image={require("../Assets/Img/annie-spratt-ZgHEZLVec9g-unsplash.jpg")}
				className="container-fluid p-0 my-2 d-flex flex-column align-items-center justify-content-center text-white"
				id="section-2"
			>
				{/* <img
					className="my-5"
					src={require("../Assets/Img/annie-spratt-ZgHEZLVec9g-unsplash.jpg")}
					alt="img"
					width={"100%"}
					height={"500px"}
				/> */}

				<h3 style={{ fontFamily: "cursive" }}>
					ALL THE INGREDIENTS YOU NEED TO MAKE GOOD
				</h3>
				<h3 className="text-light display-3" style={{ fontFamily: "cursive" }}>
					HAPPEN
				</h3>
				<button className="btn btn-lg btn-outline-light mt-5">
					<small>LEARN MORE ABOUT OUR PRODUCT</small>
				</button>
			</Showcase>

			{/* SECTION ONE */}
			<div className="my-5 shadow-sm py-5" style={{ minHeight: "400px" }}>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-12 col-lg-6 my-3 my-md-0 px-5">
							<h3 className="display-6 fw-bold">Milling excellence everyday</h3>
							<p className="fs-5 text-font">
								Support his goals, help him monitor his health and amplify the
								music he loves. Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Culpa inventore blanditiis molestias quas
								atque. Quibusdam deleniti in, eveniet modi quam quasi autem
								adipisci corrupti officia necessitatibus vero ad iure culpa quae
								tempore, maxime repellat facere debitis eligendi ducimus
								aspernatur? Illo eaque mollitia autem vitae delectus explicabo,
								sit tempora. Nulla sint culpa autem? Illo ad itaque, voluptates
								et optio excepturi sed rerum perferendis unde quis ex
								reprehenderit. Neque, molestias vitae! Dolore deleniti ipsum a
								voluptates.
							</p>
						</div>

						<div className="col-12 col-lg-6">
							<img
								src={require("../Assets//Img/treecatapillar.jpeg")}
								width={"100%"}
								style={{ maxHeight: "600px" }}
								alt=""
							/>
						</div>
						{/* <div className="col-12 col-md-7 row">
							<div className="col-4 d-flex flex-column gap-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/galaxy-watch6-1.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
								<div className="bg_grey_blue rounded rounded-4">
									<img
										src={require("../Assets/Img/galaxy-watch6-2.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
							</div>
							<div className="col-8">
								<img
									className="rounded rounded-4"
									src={require("../Assets/Img/galaxy-watch6-3.webp")}
									alt=""
									style={{ width: "100%", height: "410px" }}
								/>
							</div>
						</div> */}
					</div>
				</div>
			</div>

			{/* SECTION TWO */}
			<div
				className="d-flex flex-column align-items-center justify-content-center py-5 my-4"
				style={{ backgroundColor: "lightsalmon", minHeight: "400px" }}
			>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-12 col-md-7 row">
							<div className="col-4 d-flex flex-column gap-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/galaxy-s24-ultra-1.jpg")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/galaxy-s24-ultra-2.jpg")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
							</div>
							<div className="col-8">
								<img
									className="rounded rounded-4"
									src={require("../Assets/Img/galaxy-s24-ultra-1.jpg")}
									alt=""
									style={{ width: "100%", height: "410px" }}
								/>
							</div>
						</div>
						<div className="col-12 col-md-5 my-3 my-md-0">
							<h3 className="display-4 fw-bold ">
								Gifts that helps you unwind
							</h3>
							<p className="fs-5">
								Big screens, perfect for kicking back after a long day's work.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* SECTION THREE */}
			<div
				className="d-flex flex-column align-items-center justify-content-center py-5 my-4"
				style={{ backgroundColor: "aliceblue", minHeight: "400px" }}
			>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-12 col-md-5 my-3 my-md-0">
							<h3 className="display-4 fw-bold ">
								Gifts for the moments that matter
							</h3>
							<p className="fs-5">
								Made for special selfies close-knit chats and meaningful
								moments.
							</p>
						</div>
						<div className="col-12 col-md-7 row">
							<div className="col-12 col-md-4 d-flex my-2 flex-md-column gap-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/galaxy-watch6-1.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
								<div className="bg_grey_blue rounded rounded-4">
									<img
										src={require("../Assets/Img/galaxy-watch6-2.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
							</div>
							<div className="col-12 col-md-4 d-flex my-2 flex-md-column gap-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/galaxy-watch6-1.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
								<div className="bg_grey_blue rounded rounded-4">
									<img
										src={require("../Assets/Img/galaxy-watch6-2.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
							</div>
							<div className="col-12 col-md-4 d-flex my-2 flex-md-column gap-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/galaxy-watch6-1.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
								<div className="bg_grey_blue rounded rounded-4">
									<img
										src={require("../Assets/Img/galaxy-watch6-2.webp")}
										alt=""
										style={{ width: "100%", height: "200px" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer
				className="d-flex flex-column align-items-center justify-content-evenly"
				style={{ backgroundColor: "white", minHeight: "100px" }}
			>
				<div className="w-100 lead d-flex flex-row justify-content-around align-items-center">
					<p className="fw-normal">Rootfill Inc.</p>
					<strong>2024 &copy; All rights reserved</strong>
				</div>
				{/* <p>Find something special, just for Dad</p> */}
			</footer>
			{/* </div> */}
		</div>
	);
};

export default Home;
