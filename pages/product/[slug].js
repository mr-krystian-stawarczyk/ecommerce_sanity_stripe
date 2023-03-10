import React, { useState } from "react";

import { Product } from "../../components";
import { urlFor, client } from "../../lib/client";

import { useStateContext } from "../../context/StateContext";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ProductDetails = ({ product, products }) => {
	const { image, name, details, price, material } = product;

	const [index, setIndex] = useState(0);

	const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

	const handleBuyNow = () => {
		onAdd(product, qty);
		setShowCart(true);
	};
	return (
		<Container className="mt-5 " fluid>
			<Row className="pt-5  pb-5 justify-content-around">
				<Col xl={4} lg={6} md={7} className="">
					<Row>
						<Card className="border-0  m-2 ">
							<Card.Img
								src={urlFor(image && image[index])}
								className="rounded "
								style={{ maxHeight: "500px" }}
							></Card.Img>
						</Card>
					</Row>
					<Row>
						<Col md={10} sm={10} className="m-2 p-2 ">
							{image?.map((item, i) => (
								<img
									onMouseEnter={() => setIndex(i)}
									key={i}
									src={urlFor(item)}
									className={
										i === index
											? "small-image selected-image hover"
											: "small-image hover"
									}
								/>
							))}
						</Col>
					</Row>
				</Col>
				<Col md={5}>
					<Col className="product-detail-desc text-dark mt-5 ">
						<Card className="border-0">
							<Card.Title className="my-2">{name}</Card.Title>
							<Card.Title className="my-2">Details:</Card.Title>
							<Card.Text className="my-2">{details}</Card.Text>
							<Card.Title className="my-2">Material:</Card.Title>
							<Card.Text className="my-2">{material}</Card.Text>
							<Card.Title className="my-2">€{price}</Card.Title>
						</Card>

						<Row>
							<Col className="buttons">
								<Button
									type="button"
									className="add-to-cart bg-dark text-light shadow-lg"
									onClick={() => onAdd(product, qty)}
								>
									Add to cart
								</Button>

								<Button
									type="button"
									className="buy-now bg-dark text-light shadow-lg"
									onClick={handleBuyNow}
								>
									Buy Now
								</Button>
							</Col>
						</Row>
					</Col>
				</Col>
			</Row>

			<Row className="mt-3 justify-content-md-center">
				<Col md={3}>
					<Card className="border-0 text-center my-3">
						<Card.Title>You may also like</Card.Title>
					</Card>
				</Col>
			</Row>
			<Row>
				{products?.map((item) => (
					<Product key={item._id} product={item} />
				))}
			</Row>
		</Container>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
		slug {
        current
}
    }`;

	const products = await client.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

	const product = await client.fetch(query);
	const productsQuery = `*[_type == "product"]`;

	const products = await client.fetch(productsQuery);

	console.log(product);

	return {
		props: { products, product },
	};
};

export default ProductDetails;
