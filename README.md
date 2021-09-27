<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->

# Galvanize Hack Reactor Front End Capstone

<br />

## Project Catwalk

<br>

<!-- <p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Project Catwalk</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the Github Repo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p> -->

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#contributors">Contributors</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#component-break-down">Component Break Down</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
<br>

<!-- CONTACT -->

## Contributors

### Alicia Villanueva

 <img src="READMEimages/Alicia-Headshot.jpeg" alt="Logo" width="80" height="80">

[![linkedin-shield]][alicia-linkedin]
[![github-shield]][alicia-github]

Project Repo: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
<br>

<a href="#related-products-and-your-wardrobe">Jump to My Module</a>
<br><br>

### Cory Ellerbroek - cory.ellerbroek@gmail.com

 <img src="READMEimages/Cory-Headshot.jpeg" alt="Logo" width="80" height="80">

[![linkedin-shield]][cory-linkedin]
[![github-shield]][cory-github]

Project Repo: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
<br>

<a href="#product-overview">Jump to My Module</a>
<br><br>

### Travis Morse - travis503@gmail.com

 <img src="READMEimages/Travis-Headshot.jpeg" alt="Logo" width="80" height="80">

[![linkedin-shield]][travis-linkedin]
[![github-shield]][travis-github]

Project Repo: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
<br>
<a href="#ratings-and-reviews">Jump to My Module</a>
<br><br>

### Johnathan Brennan - @gmail.com

 <img src="READMEimages/John-Headshot.png" alt="Logo" width="80" height="80">

[![linkedin-shield]][johnathan-linkedin]
[![github-shield]][johnathan-github]

Project Repo: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
<br>

<a href="#questions-and-answers">Jump to My Module</a>
<br><br>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Project Catwalk was a collaborative Front-End capstone between members of Team Havarti. This project simulated the real-world development of a product page to the demands listed in their customers Business Documentation Requirements:

<br>

> ## Overview
>
> "Our client-facing retail web-portal has become significantly outdated and has been proven to be hurting sales numbers. Project Catwalk comprises a complete redesign of the retail portal designed to address this concern and modernize the site. This document outlines the features to be implemented as part of Project Catwalk in its initial release. The following requirements define the new user interface required for customers to browse items in our retail catalog."

<br>

Team Havarti built this project from an empty directory to the Havarti Party product page presented to you. The project was completed and deployed within a 2 week time period.

Team Member Expectations and Workflow:

- Oversaw their own module while working in collaboration with teammates to ensure interactive functionality
- Communicated their progress in daily standups
- Created and completed their task tickets using Trello
- Brainstormed and reflected the teams work in 2 day mini-sprints

### Tech Stack

- [React](https://reactjs.org/)
- [MaterialUI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Express](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)

<br>

<!-- GETTING STARTED -->

## Getting Started

To explore the Havarti Party, follow the instructions below

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Have your API token available or generate a new one with github following this link [Generate Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Havarti-Party/hr-atx58-fec-havarti.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API key in `config.example.js`
   ```JS
   token: 'API KEY';
   ```
5. Remove the .example. from config.example.js to create config.js
   ```sh
    Reminder to NEVER push your config.js file!
   ```
6. Compile Webpack
   ```sh
    npm run build
   ```
7. Run express server on port: 3030
   ```sh
    npm start
   ```
8. Navigate to `localhost:3030` in your browser

<br><br>

> ## Request Change!

As it happens in the development world, Team Havarti was handed a Requirements Update at the start of Week 1 for this project.

> "There is an immediate need for visibility into customer interactions on our online retail portal. Specifically interactions with the Product Detail page should be collected for further analysis and interpretation by our Data Science team. Project Catwalk should incorporate click tracking on the Product Detail page within the scope of the initial release."
> The click tracking will not be through any 3rd party analytics platform. All will be done in-house. To track interactions, each click on the web page should be recorded, as well as metadata associated with that click.
> For each click on the page, we need to capture the following:
>
> <div align="center">
> <li >Element of the page which was clicked
> <li>Time of click
> <li>Module clicked
> </div>

To complete this requirement, a helper function was created in the ProductContext file to be handed down to all child components. In each module's outer most wrappers, an onClick property was invoked with that given module title and the target value of the users click. User click information traveled back up to state, time-stamped and was then sent to the Altier DB for storage. All user click interation logs a message to the console, confirming which module was selected by the user.

<br>

<!-- USAGE EXAMPLES -->

> ## Component Break Down

Each member of Team Havarti was resposible for functionality within their own module as well as the overall presentation and functionality of the entire product page.

> ## Product Overview
>
> Developed by Cory E.

<br>
<div align="center">
<img src="http://g.recordit.co/pBWpS1im0D.gif" width="400" />
</div>
<br><br>

The Product Overview module is the main visual content that is above the fold on page load. It contains the image carousel, product details, product styles, and the various components involved with adding a product to the cart. The biggest challenge when creating the Product Overview module was storing and passing state so that the sub-components would render and re-render approriately. It also had to communicate with the other modules. The solution we developed was a combination of storing state that needed to be shared in a context file (accessed using the useContext hook) while other state was stored locally.<br><br>
Notable features of this module include:

- When a style is clicked, the image carousel will present that style's images and will display at the same image index

- The Select Size drop down will display OUT OF STOCK when appropriate

- If size has not been selected, the Quantity drop down is disabled
- If Add To Cart is clicked before a size is selected, the Select Size drop down will open
- When a Related Product card or Your Wardrobe card is clicked, the module will re-render to provide the images and information for that product

<br>

> ## Related Products and Your Wardrobe
>
> Developed by Alicia V.

<div align="center">
<img src="READMEimages/RPgif.gif" width="400" height="auto"/>
</div>
<br><br>

> ## Related Products

Related Products displays a responsive list of related items based on the current overview product. When a new overview item is selected, the component must make a request to the Altier API for related item IDs, then based on those IDs make requests for their product's information as well as their styles. Control of asynchronous requests and handling of state as to not disrupt the functionality of other's components mmatewas an important aspect of this module.

- The related product cards are disaplayed with [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel)

- Arrows to glide through your list render only when the item list surpasses a length of 4
- Clicking the item's content area places that item as the current overview product
- A comparison modal will appear when the star icon is clicked, comparing the selected item's features with the overview product's features. This list does not allow for duplicate features and only displays a value if a value is present for that feature.

<br>

<br>
<div align="center">
<img src="READMEimages/WDgif.gif" width="400" height="auto" />
</div>
<br><br>

> ## Your Wardrobe

Outfit list dynamically adds the current overview product style to a growing list of products of the users choosing. Outfit list must grow without duplication and without disrupting the layout of the screen when items are being added and removed. Handling of object information was a large task for this component as much of the displayed information was shared between two different objects from two different API requests. Setting the overview product back to the selected style on click had to be done in strategy with OverviewProduct so that all lower components still had acccess to the associated overview product for their own API requests.

- Outfit list utilizes the [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel)

- When empty, the Add To Outfit list is the only card appearing in the list
- Items may only appear once within your wardrobe.
- Arrows to glide through your list render only when the item list surpasses a length of 4
- Clicking the item's content area places that style as the current overview product
  <br><br>

> ## Ratings and Reviews
>
> Developed by Travis M.

<img src="READMEimages/RPgif.gif" width="400" height="auto"/>

<br><br>

The Reviews and Ratings section displays a dynamically rendered set of user-provided information regarding the currently selected product. As overview items are selected, this component makes a pair of requests to the Altier API to retrieve review data and metadata, then populates the display with visually expressive ratings, characteristics, and comments, and only loads displays for data that is actually present. The user can also submit new data with the "Write New Review" form, which formats and delivers new data to the API.

- User reviews can be sorted by recency, helpfulness rating, or "relevance", which sorts reviews using an algorithm

- To keep the page compact, only two reviews are initially loaded; more can be loaded using the "More Reviews" button

- The "Write New Review" button will bring up a modal form that allows the user to share information and upload images to the server

> ## Questions and Answers
>
> Developed by Johnathan B.

<br><br>

## Acknowledgements

- [Node](https://nodejs.org/)
- [Img Shields](https://shields.io)
- [react-image-gallery](https://npm.io/package/react-image-gallery)
- [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel)
- [react-star-ratings](https://www.npmjs.com/package/react-star-ratings)
- [Underscore](https://underscorejs.org/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[cory-linkedin]: https://www.linkedin.com/in/coryellerbroek/
[cory-github]: https://github.com/LrBrK33
[alicia-linkedin]: https://www.linkedin.com/in/alicia-villanueva-atx/
[alicia-github]: https://github.com/aliciav-texas
[travis-linkedin]: https://www.linkedin.com/in/travis-morse-7574107a/
[travis-github]: https://github.com/travis503

<!-- [johnathan-linkedin] -->

[johnathan-github]: https://github.com/JohnathanBrennan

<!-- [travis-linkedin]:
[jonathan-linkedin]: -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-grey?style=for-the-badge&logo=linkedin
[linkedin-url]: https://linkedin.com/in/othneildrew
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github
[product-screenshot]: images/screenshot.png
