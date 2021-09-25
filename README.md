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

[![Contributors][contributors-shield]][contributors-url][![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

# Galvanize Hack Reactor Front End Capstone

<br />
<p align="center">
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
    <!-- <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a> -->
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#contact">Contributors</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- CONTACT -->

## Contributors

Alicia Villanueva -<br>
[![linkedin-shield]][alicialinkedin]
<br>[linkedin](https://www.linkedin.com/in/alicia-villanueva-atx/)
[Github](https://github.com/aliciav-texas)

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project was a capstone for Front-End development from Week 6 to Week 7 of the Hack Reactor Full Stack Software Engineer Immersive. Project Catwalk was a collaborative project to build a product page with dynamic functionality and interaction with the Altier API beginning with an empty repo page. Team Havarti built the entire repo from a blank file to the Havarti Pary product page presented to you. Project Catwalk simulated a 2 week sprint and a true work and git flow enviornment.

Here's why:

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the same tasks over and over like creating a README from scratch
- You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [React](https://reactjs.org/docs/getting-started.html)
- [Node](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [MaterialUI](https://mui.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Underscore](https://underscorejs.org/)

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
4. Enter your API in `config.example.js`
   ```JS
   token: 'ENTER YOUR API';
   ```
5. Remove the .example. from config.example.js to create config.js
   ```sh
    Reminder to NEVER push your config.js file!
   ```
6. Compile Webpack
   ```sh
    npm run watch
   ```
7. Run express server on port: 3030
   ```sh
    npm start
   ```
8. Navigate to localhost:3030 in your browser

<!-- USAGE EXAMPLES -->

## Component Break Down

Each member of Team Havarti was resposible for functionality within their own module as well as the overall presentation and functionality of the entire product page.

<!-- ROADMAP -->

## Product Overviwew (Cory. E)

Test text

## Related Products and Your Outfit List (Alicia V.)

![Related Products Gif](http://g.recordit.co/KPQWTja6zN.gif)

## Related Products

Related Products displays a responsive list of related items based on the current overview product.

- The related product cards are disaplayed with [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel)

- Arrows to glide through your list render only when the item list surpasses a length of 4
- Clicking the item's content area places that item as the current overview product
- A comparison modal will appear when the star icon is clicked, comparing the selected item with the overview Product

## Outfit List

![Your Outfit List Gif](http://g.recordit.co/xFfjjNi5dm.gif)

Outfit list dynamically adds the current overview product style to a growing list of products of the users choosing.

- Outfit list utilizes the [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel)
- When empty, the Add To Outfit list is the only card appearing in the list
- Items may only appear once within your wardrobe.
- Arrows to glide through your list render only when the item list surpasses a length of 4
- Clicking the item's content area places that style as the current overview product

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[alicialinkedin]: https://www.linkedin.com/in/alicia-villanueva-atx/
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-grey?style=for-the-badge&logo=linkedin
[linkedin-url]: https://linkedin.com/in/othneildrew
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github
[product-screenshot]: images/screenshot.png
