import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "../../components/ProductCard/ProductCard";
import ShopFilters from "../../components/ShopFilters/ShopFilters";



export default function Shop() {
    const [products, setProducts] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        async function getProductsApi() {
            const res = await fetch("http://localhost:3000/products?" + filterQuery);
            const data = await res.json();

            setProducts(data);
        }

        getProductsApi();
    }, [filterQuery]);

    return (
        <Container className="my-5">
            <ShopFilters setFilterQuery={setFilterQuery} />
            <Row>
                {products.map((product) => (
                    <Col md={3} className="mb-4" key={`products-list-item-${product.id}`}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}



//   const [products, setProducts] = useState([]);
//   const [filterQuery, setFilterQuery] = useState("");

//   useEffect(() => {
//     async function getProductsApi() {
//       const res = await fetch("http://localhost:3000/products?" + filterQuery);
//       const data = await res.json();

//       setProducts(data);
//     }

//     getProductsApi();
//   }, [filterQuery]);

//   return (
//     <Container className="my-5">
//       <ShopFilters setFilterQuery={setFilterQuery} />
//       <Row>
//         {products.map((product) => (
//           <Col md={3} className="mb-4" key={`products-list-item-${product.id}`}>
//             <ProductCard product={product} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

