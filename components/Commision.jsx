import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Commision() {
	return (
		<Container
			fluid
			className=" rounded "
			style={{
				paddingBottom: "3rem",
			}}
		>
			<Row className=" rounded  mt-5 pt-5 text-center">
				<Col md={2} sm className="mx-auto my-auto  hide">
					<video autoPlay loop muted className="rounded videoBg">
						<source src="/assets/videoBg.mp4" />
					</video>
				</Col>
				<Col md={4} sm className="mx-auto my-auto ">
					<Card
						style={{
							alignItems: "center",
							justifyContent: "center",
							border: "none",
						}}
						className="bg-transparent  pt-5"
					>
						<Card.Title>Looking For Something Unique ?</Card.Title>
						<Card.Body className="">
							<Card.Text>See what We can do fo You</Card.Text>
							<Col className="btn-group "></Col>

							<Button
								className="bg-dark text-light shadow-lg"
								href="/commision"
								style={{ maxWidth: "150px" }}
							>
								Commision
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Commision;
