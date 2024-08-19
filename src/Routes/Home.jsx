import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Showcase } from "../Components/Styles/GlobalStyle.css";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="container py-3 my-5 w-md-75">
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
				className="container-fluid p-0 my-2 d-flex flex-column align-items-center justify-content-evenly text-white text-center px-5"
				id="section-2"
				myHeight="70vh"
			>
				<h2 className="montserrat display-5">
					ALL THE INGREDIENTS YOU NEED TO MAKE GOOD
				</h2>
				<h3
					className="text-light display-3 poppins"
					style={{ letterSpacing: "0.3em" }}
				>
					Happen
				</h3>
				<Link to={"/products"}>
					<button className="btn btn-lg btn-outline-light rounded-0 py-2 mt-5">
						<small className="montserrat">LEARN MORE ABOUT OUR PRODUCTS</small>
					</button>
				</Link>
			</Showcase>

			{/* SECTION ONE */}
			<div className="my-5 shadow-sm py-5" style={{ minHeight: "400px" }}>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-12 col-lg-6 my-3 my-md-0 px-5">
							<h3 className="display-6 fw-bold montserrat">
								Milling excellence everyday
							</h3>
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
						<div className="col-12 col-lg-5 my-3 my-md-0">
							<h3 className="display-4 fw-bold montserrat">
								We want to bring people good food
							</h3>
							<p className="fs-5">
								Made for special selfies close-knit chats and meaningful
								moments.
							</p>
						</div>
						<div className="col-12 col-lg-7 row">
							<div className="col-12 col-md-4 my-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/annie-spratt-Yts9EMTtKxY-unsplash.jpg")}
										alt=""
										style={{ width: "100%", height: "230px" }}
									/>
								</div>
							</div>
							<div className="col-12 col-md-4 my-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img//annie-spratt-woman-unsplash.jpg")}
										alt=""
										style={{ width: "100%", height: "230px" }}
									/>
								</div>
							</div>
							<div className="col-12 col-md-4 my-2">
								<div>
									<img
										className="rounded rounded-4"
										src={require("../Assets/Img/annie-spratt-cassava-unsplash.jpg")}
										alt=""
										style={{ width: "100%", height: "230px" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
