/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContext.jsx";
import PropTypes from "prop-types";

//Card Features
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

//Icons
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

export default function AddToOutfitCard({ updateWardrobe }) {
  //useContext
  const { overviewProduct, selectedStyleState } = useContext(ProductsContext);
  const [overviewProductState, setOverviewProductState] = overviewProduct;
  const [selectedStyle, setSelectedStyle] = selectedStyleState;

  const addToOutfitList = (selectedStyleObj) => {
    //add a property for the overviewProduct ID to the style
    selectedStyleObj.overviewProductID = overviewProductState.id;
    selectedStyleObj.description = overviewProductState.description;
    selectedStyleObj.category = overviewProductState.category;
    selectedStyleObj.overviewProduct = overviewProduct;

    updateWardrobe(selectedStyleObj);
  };

  return (
    <Card className={"maxWidth: 300"}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Like the above outift?
        </Typography>
        <CardActionArea>
          <DoneOutlineIcon
            style={{ fontSize: 250 }}
            onClick={() => {
              addToOutfitList(selectedStyle);
            }}
          />
        </CardActionArea>
        <Typography variant="body2" color="textSecondary" component="p">
          Click the Icon add to your wardrobe
        </Typography>
      </CardContent>
    </Card>
  );
}

AddToOutfitCard.propTypes = {
  updateWardrobe: PropTypes.func.isRequired,
};
