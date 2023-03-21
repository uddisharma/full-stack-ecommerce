import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
} from "@chakra-ui/react";
import Loading from "../../Pages/Loading";
import Error from "../../Pages/Error";
import { fetchProducts } from "../../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
const Orders = () => {
  const { data, status } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    // dispatch(fetchProducts());
    setLoading(true);
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);
  console.log(products);
  //   console.log(products[0].order);
  //   let Orders = [];
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div className="bg-white py-12 sm:py-16">
        <p className="mt-2 text-3xl font-bold tracking-tight text-center block m-auto text-indigo-900 pb-15 sm:text-4xl p-30">
          Order List !
        </p>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Category</Th>
                <Th>Name</Th>
                <Th>Street Address</Th>
                <Th>City</Th>
                <Th>State</Th>
                <Th>Zip</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product._id}>
                  <Td>{product.order.slice(43, 55)}..</Td>
                  <Td>{product.order.slice(93, 102)}</Td>
                  <Td>
                    {product.firstname}-{product.lastname}
                  </Td>
                  <Td>{product.street}</Td>
                  <Td>{product.city}</Td>
                  <Td>{product.state}</Td>
                  <Td>{product.zip}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};

export default Orders;
