import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<Col xl={4} lg={6} md={5} sm={10} className="produkt my-5">
			<Link href={`/product/${slug.current}`}>
				<Card className="border-0 m-4 shadow-lg card-short ">
					<Card.Img
						src={urlFor(image && image[0])}
						style={{ maxHeight: "35rem" }}
					/>
					<Card.Text>{name}</Card.Text>
					<Card.Text>{price}€</Card.Text>
				</Card>
			</Link>
		</Col>
	);
};

export default Product;
