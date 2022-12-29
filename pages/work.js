import React from "react";
import { Container, Row, Col, Card, InputGroup, Form } from "react-bootstrap";

import Image from "next/image";

function Work() {
	return (
		<>
			<Container fluid className=" text-dark pt-5 mt-5 rounded">
				<Row className=" rounded my-5">
					<Col md={5} sm className="mx-auto my-auto ">
						<Image
							src="/assets/pexels-steve-johnson-923192.jpg"
							alt="me"
							width="350"
							height="350"
							className="rounded"
						/>
					</Col>
					<Col md={7} sm className="mx-auto my-auto ">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className="bg-transparent text-white pt-5"
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "5vw",
										lineHeight: "98%",

										fontWeight: "bold",
									}}
								>
									Want to Know More about US ?
								</Card.Title>

								<Card.Text>
									At our company, we specialize in creating high-quality work
									furniture that is both functional and stylish. Our team of
									designers and craftsmen work together to bring innovative
									ideas to life, using only the finest materials and latest
									manufacturing techniques.
								</Card.Text>
								<Col className="btn-group ">
									<InputGroup
										className="mb-3 "
										style={{ width: "160px", height: "50px" }}
									>
										<Form.Control
											placeholder="linktr.ee/yourname"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
									</InputGroup>
								</Col>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className="my-5 rounded">
					<Col md={7} sm className="  my-5 ">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className="bg-transparent text-white pt-5"
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "5vw",
										lineHeight: "98%",

										fontWeight: "bold",
									}}
								>
									So if you're in the market for a new piece of furniture
								</Card.Title>

								<Card.Text style={{}}>
									Whether you need a single piece or an entire office fit-out,
									we have the expertise and resources to make it happen. With
									our commitment to customer satisfaction and attention to
									detail, you can trust that we will deliver the perfect work
									furniture solution for your needs.
								</Card.Text>
								<Col className="btn-group ">
									<InputGroup
										className="mb-3 "
										style={{ width: "160px", height: "50px" }}
									>
										<Form.Control
											placeholder="linktr.ee/yourname"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
									</InputGroup>
								</Col>
							</Card.Body>
						</Card>
					</Col>
					<Col md={5} sm className="mx-auto my-auto ">
						<Image
							src="/assets/2336-011-017-400-0003-p1.jpg"
							alt="me"
							width="350"
							height="350"
							className="rounded"
						/>
					</Col>
				</Row>
				<Row className="my-5 rounded">
					<Col md={5} sm className="mx-auto my-auto ">
						<Image
							src="/assets/pexels-jeshootscom-834892.jpg"
							alt="me"
							width="350"
							height="350"
							className="rounded"
						/>
					</Col>
					<Col md={7} sm className="mx-auto my-auto ">
						<Card
							style={{
								alignItems: "center",
								justifyContent: "center",
								border: "none",
							}}
							className="bg-transparent text-white pt-5"
						>
							<Card.Body>
								<Card.Title
									style={{
										fontSize: "5vw",
										lineHeight: "98%",

										fontWeight: "bold",
									}}
								>
									We offer a wide range of materials and finishes
								</Card.Title>

								<Card.Text style={{}}>
									Our team of skilled craftsmen will work with you to bring your
									vision to life. Whether you have a specific design in mind or
									just a general idea of what you're looking for, we can help
									you create the perfect piece.
								</Card.Text>
								<Col className="btn-group ">
									<InputGroup
										className="mb-3 "
										style={{ width: "160px", height: "50px" }}
									>
										<Form.Control
											placeholder="linktr.ee/yourname"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
									</InputGroup>
								</Col>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Work;
