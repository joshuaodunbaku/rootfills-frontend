import React from 'react'

const AboutUs = () => {
  return (
		<>
			<div className="container mt-5 text-center">
				<h1 className="my-4 fw-bold">ABOUT ROOTFILLS</h1>
				<p className=" fs-5 lead">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae numquam
					officiis repellendus adipisci. Quibusdam illo impedit, debitis cum
					soluta aspernatur corporis! Dolores corporis molestiae quibusdam quasi
					nostrum rem quod praesentium.
				</p>
				<p className="fs-5 lead">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					sapiente impedit fugit dolore earum quod ab reiciendis expedita
					accusamus harum nam recusandae veniam rerum, officiis, veritatis,
					assumenda odit quae deleniti dicta iusto sed nihil. Quibusdam beatae
					necessitatibus cumque explicabo architecto corrupti sequi iste quaerat
					tempora? Deserunt quod repellendus minima? Quas sint perferendis culpa
					animi? Consequuntur provident nulla deserunt quas debitis quidem fugit
					soluta dolore doloribus accusamus deleniti eligendi assumenda earum,
					repellendus tempore perferendis accusantium blanditiis ex, nobis
					excepturi explicabo. Assumenda, nemo illum reprehenderit id ratione,
					facilis molestiae praesentium iusto provident, fuga tempora nostrum
					quia vitae consequuntur perferendis cum ab asperiores.
				</p>
			</div>

			<div className="container my-5 py-4">
				<div className="row">
					<div className="col-12 col-md-6">
						<div id="overlay-wrapper">
							<div
								// style={{ height: "300px", backgroundColor: "red" }}
								className="overlay"
							></div>
							<img
								src={require("../Assets/Img/pexels-simon-robben-55958-614810.jpg")}
								alt=""
								width={"100%"}
								// height={"100%"}
								// style={{ maxHeight: "400px" }}
							/>
							<div className="text d-flex align-items-center justify-content-center">
								<div className="text-white opacity-75 text-center">
									<h4 className="lead fs-2">Olayi, Emmanuel</h4>
									<p className="fs-5 my-0">Managing Director at...........</p>
									<p className="fs-5 my-0">Unicross Calabar, Nigeria.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 d-flex flex-column justify-content-center fs-5">
						<p>
							Emmanuel is a seasoned business leader with proven track records
							of success. My wealth of experience spread across Clinical,
							Agricultural farming and Agro-processing. Emmanuel holds a B.Sc
							degree in Biochemistry and a post graduate in Clinical
							Biochemistry.
							<br />
							<br />
							He has attended various courses (which includes
							<ul>
								<li>IFAD, international fund for agricultural development</li>
								<li>Certificate in Dairy program</li>
								<li>Certificate in sustainable Agricultural land management</li>
								<li>
									Certificate on infection, prevention, control, medical and
									agricultural waste
								</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutUs