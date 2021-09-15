import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [overviewProduct, setOverviewProduct] = useState([
    {
      id: 38329,
      campus: "hr-atx",
      name: "YEasy 350",
      slogan: "Just jumped over jumpman",
      description:
        "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
      category: "Kicks",
      default_price: "450.00",
      created_at: "2021-08-13T14:38:00.907Z",
      updated_at: "2021-08-13T14:38:00.907Z",
      url: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      features: [
        {
          feature: "Sole",
          value: "Rubber",
        },
        {
          feature: "Material",
          value: "FullControlSkin",
        },
        {
          feature: "Stitching",
          value: "Double Stitch",
        },
      ],
    },
  ]);

  return (
    <ProductsContext.Provider value={[overviewProduct, setOverviewProduct]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
