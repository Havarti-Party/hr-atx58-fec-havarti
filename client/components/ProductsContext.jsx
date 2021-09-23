/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState, createContext } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [overviewProduct, setOverviewProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [starRating, setStarRating] = useState(0);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    axios
      .get("/products")
      .then((productsArray) => {
        setProducts(productsArray.data);
      })
      .catch(() => {
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
          },
        }),
        axios.get("/styles", {
          params: {
            ID: overviewProductID,
          },
        }),
      ])
        .then(([overviewProductDetails, overviewProductStyles]) => {
          products[0].features = overviewProductDetails.data.features;
          products[0].url = overviewProductDetails.data.url;
          setStyles(overviewProductStyles.data.results);
          setOverviewProduct(products[0]);
        })
        .catch(() => {
          console.log("could not get styles for overview product");
        });
    }
  }, [products]);

  const checkStyles = (arrOfStyles, styleID) => {
    let boolean = false;
    arrOfStyles.forEach((obj) => {
      if (obj.style_id === styleID) {
        boolean = true;
      }
    });
    return boolean;
  };

  useEffect(() => {
    if (isMounted.current) {
      let overviewProductID = overviewProduct.id;
      axios
        .get("/styles", {
          params: {
            ID: overviewProductID,
          },
        })
        .then((overviewProductStyles) => {
          setStyles(overviewProductStyles.data.results);
          if (
            Array.isArray(selectedStyle) ||
            checkStyles(styles, selectedStyle.style_id)
          ) {
            setSelectedStyle(overviewProductStyles.data.results[0]);
          }

          setIsLoading(false);
        })
        .catch(() => {
          console.log("could not get styles for overview product");
        });
    } else {
      isMounted.current = true;
    }
  }, [overviewProduct]);

  return (
    <ProductsContext.Provider
      value={{
        overviewProduct: [overviewProduct, setOverviewProduct],
        isLoading: [isLoading, setIsLoading],
        starRating: [starRating, setStarRating],
        stylesState: [styles, setStyles],
        selectedStyleState: [selectedStyle, setSelectedStyle],
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
