/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext.jsx";
import PropTypes from "prop-types";

//Material UI
import { Typography, Card, CardActionArea, CardContent } from "@mui/material";

//Icons
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

export default function AddToOutfitCard({ updateWardrobe }) {
  //useContext
  const { overviewProduct, selectedStyleState, clickTracker } =
    useContext(ProductsContext);
  const [overviewProductState, setOverviewProductState] = overviewProduct;
  const [selectedStyle, setSelectedStyle] = selectedStyleState;
  const [clickTrackerFunc] = clickTracker;

  const addToOutfitList = (selectedStyleObj) => {
    let copyOfSelectedStyleObj = selectedStyleObj;
    selectedStyleObj.selectedStyleObj = copyOfSelectedStyleObj;
    selectedStyleObj.slogan = overviewProduct.slogan;
    selectedStyleObj.overviewProduct = overviewProductState;
    selectedStyleObj.description = overviewProductState.description;
    selectedStyleObj.category = overviewProductState.category;
    selectedStyleObj.features = overviewProductState.features;

    updateWardrobe(selectedStyleObj);
  };

  return (
    <Card
      onClick={() =>
        clickTrackerFunc.clickTrackerFunc(
          "Add to Outfit List Card",
          event.target
        )
      }
      className={"maxWidth: 300"}
    >
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
