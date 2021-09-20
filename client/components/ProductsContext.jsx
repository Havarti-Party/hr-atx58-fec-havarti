import React, { useEffect, useRef, useState, createContext } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  const [overviewProduct, setOverviewProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const isMounted = useRef(false);
  useEffect(() => {
    axios
      .get("/products")
      .then((productsArray) => {
        setProducts(productsArray.data);
      })
      .catch((error) => {
        console.log("error, unable to get productsArray from localhost server");
      });
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      let overviewProductID = products[0].id;

      axios
        .get("/currentProduct", {
          params: {
            ID: overviewProductID,
          },
        })
        .then((overviewProductDetails) => {
          products[0].features = overviewProductDetails.data.features;
          setOverviewProduct(products[0]);
        })
        .catch((error) => {
          console.log("could not get styles for overview product");
        });
    } else {
      isMounted.current = true;
    }
  }, [products]);

  return (
    <ProductsContext.Provider value={[overviewProduct, setOverviewProduct]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
