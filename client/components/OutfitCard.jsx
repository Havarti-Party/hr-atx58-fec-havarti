import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 250,
  },
});

export default function OutfitCard({ imgObj }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgObj.imgSrc}
          title={imgObj.sampleText}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Product Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            descriptive text from RelatedProducts obj
            Price
          </Typography>
          <StarRatings
            rating={2}
            starDimension={'15px'}
            starSpacing={'1px'}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Remove from your Outfit
        </Button>
        <Button size="small" color="primary">
          Compare to Overview
        </Button>
      </CardActions>
    </Card>
  );
}
