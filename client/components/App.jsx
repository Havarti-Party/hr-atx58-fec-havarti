/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import axios from "axios";
import Header from "./HeaderFooter/Header.jsx";
import ProductOverview from "./ProductOverview/ProductOverview.jsx";
import RelatedProducts from "./RelatedProducts/RelatedProducts.jsx";
import CustomerOutfit from "./RelatedProducts/CustomerOutfit.jsx";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";
import Footer from "./HeaderFooter/Footer.jsx";
import Container from "@material-ui/core/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Divider from '@mui/material/Divider';
import { ProductsContext } from "./ProductsContext";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
const theme = createTheme({
  pallette: {
    primary: {
      main: "2FC3A8",
    },
    secondary: {
      main: "2FB1C3",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default function App() {
  const { isLoading } = useContext(ProductsContext);
  const [isLoadingState] = isLoading;

  const clickTracker = (component, event) => {
    const today = new Date();
    let clickTrackObj = {
      element: event.toString(),
      widget: component,
      time:
        today.getMonth() +
        1 +
        "-" +
        today.getDate() +
        "-" +
        today.getFullYear() +
        " -- " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds(),
    };

    axios
      .post("/interactions", clickTrackObj)
      .then((successfulPost) => {
        console.log(
          `Your click on ${clickTrackObj.widget} was posted to the DB.`
        );
      })
      .catch((errorPosting) => {
        console.log("error from App.jsx:", errorPosting);
      });
  };

  if (isLoadingState) {
    return (
      <Container maxWidth="lg" className="loading">
        <Grid container justifyContent="center" alignItems="center">
          <CircularProgress />
        </Grid>
      </Container>
    );
  }
  return (

      <Container maxWidth="lg" className="App" >
        <ThemeProvider theme={theme}>
        <Grid container spacing={5}>
          <Grid item xs={12}><Header /></Grid>
          <Grid item xs={12}><ProductOverview /></Grid>
          <Grid item xs={12}><Divider /></Grid>
          <Grid item xs={12}><RelatedProducts /></Grid>
          <Grid item xs={12}><CustomerOutfit /></Grid>
          <Grid item xs={12}><RatingsAndReviews /></Grid>
          <Grid item xs={12}><QuestionsAndAnswers /></Grid>
          <Grid item xs={12}><Footer /></Grid>
        </Grid>
        </ThemeProvider>
      </Container>

  );
}
