import React, { useState, useEffect, useContext, useRef } from "react";
import { ProductsContext } from "./ProductsContext.jsx";

//Card Features
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

//Icons
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

export default function AddToOutfitCard({ updateWardrobe }) {
  //useContext
  const [overviewProduct, setOverviewProduct] = useContext(ProductsContext);

  const addToOutfitList = (overviewProduct) => {
    updateWardrobe(overviewProduct);
  };

  return (
    <Card className={{ maxWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Like the above outift?
        </Typography>
        <CardActionArea>
          <DoneOutlineIcon
            style={{ fontSize: 250 }}
            onClick={() => {
              addToOutfitList(overviewProduct);
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
