import React, { useState, useEffect, useContext, useRef } from "react";
import { ProductsContext } from "./ProductsContext.jsx";

//Card Features
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import AddReactionTwoToneIcon from "@mui/icons-material/AddReactionTwoTone";

export default function LastOutfitCard() {
  //useContext

  return (
    <Card className={{ maxWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Keep exploring our page!
        </Typography>
        <CardActionArea>
          <AddReactionTwoToneIcon style={{ fontSize: 250 }} />
        </CardActionArea>
        <Typography variant="body2" color="textSecondary" component="p">
          Click the Icon add to your wardrobe
        </Typography>
      </CardContent>
    </Card>
  );
}
