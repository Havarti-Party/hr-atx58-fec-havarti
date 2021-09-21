import React, { useEffect, useRef, useState, createContext } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [overviewProduct, setOverviewProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [starRating, setStarRating] = useState(0);
  const [styles, setStyles] = useState([]);
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
      Promise.all([
        axios.get("/related", {
            params: {
              ID: overviewProductID,
        }}),
        axios.get("/styles", {
          params: {
            ID: overviewProductID,
        }})
      ])
      .then(([overviewProductDetails, overviewProductStyles]) => {
        products[0].features = overviewProductDetails.data.features;
        products[0].url = overviewProductDetails.data.url;
        setStyles(overviewProductStyles.data.results)
        setOverviewProduct(products[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("could not get styles for overview product");
      });
    } else {
      isMounted.current = true;
    }
  }, [products]);

  return (
    <ProductsContext.Provider value={{ overviewProduct: [overviewProduct, setOverviewProduct], isLoading: [isLoading, setIsLoading], starRating: [starRating, setStarRating], stylesState: [styles, setStyles]}}>
      {props.children}
    </ProductsContext.Provider>
  );
};
