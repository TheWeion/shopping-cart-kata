<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU3 License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/Q1-quiz-game">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Shopping Cart Kata</h3>

  <p align="center">
    A set of functions which will process a shopping cart and output a reciept to the console.
    <br />
    <a href="https://github.com/TheWeion/shopping-cart-kata"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/TheWeion/shopping-cart-kata">View Demo</a>
    ·
    <a href="https://github.com/TheWeion/shopping-cart-kata/issues">Report Bug</a>
    ·
    <a href="https://github.com/TheWeion/shopping-cart-kata/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
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
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#npm-commands">npm Commands</a></li>
        <li>
          <a href="#functions">Functions</a>
        </li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Implemetation of a simple checkout system that can consume a data source, and returns the sub total when queried.

### Datasets

<table>
  <tr>
    <th>inventoryData</th>
    <th>cartData</th>
  </tr>
  <tr>
    <td>
      <table>
        <tr>
          <th>Item Code</th>
          <th>Base Price</th>
          <th>Discount</th>
        </tr>
        <tr>
          <td>A</td>
          <td>50</td>
          <td>3 for 140</td>
        </tr>
        <tr>
          <td>B</td>
          <td>35</td>
          <td>2 for 60</td>
        </tr>
        <tr>
          <td>C</td>
          <td>25</td>
          <td></td>
        </tr>
        <tr>
          <td>D</td>
          <td>12</td>
          <td></td>
        </tr>
      </table>
    </td>
    <td>
      <pre>
        <code>
[
  {
    "code": "A",
    "quantity": 3
  },
  {
    "code": "B",
    "quantity": 3
  },
  {
    "code": "C",
    "quantity": 1
  },
  {
    "code": "D",
    "quantity": 2
  }
]
        </code>
      </pre>
    </td>
  </tr>
  <tr>
    <td>Expected Result</td>
    <td>£284.00</td>
  </tr>
</table>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* JavaScript
* Jest (with cross-env)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/TheWeion/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

### npm Commands

#### Run the script
```sh
npm run start
```

#### Run the test suite
```sh
npm run test
```

#### Output test coverage
```sh
npm run coverage
```

### Functions


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the GNU License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/theweion/shopping-cart-kata.svg?style=for-the-badge
[contributors-url]: https://github.com/theweion/shopping-cart-kata/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/theweion/shopping-cart-kata.svg?style=for-the-badge
[forks-url]: https://github.com/theweion/shopping-cart-kata/network/members
[stars-shield]: https://img.shields.io/github/stars/theweion/shopping-cart-kata.svg?style=for-the-badge
[stars-url]: https://github.com/theweion/shopping-cart-kata/stargazers
[issues-shield]: https://img.shields.io/github/issues/theweion/shopping-cart-kata.svg?style=for-the-badge
[issues-url]: https://github.com/theweion/shopping-cart-kata/issues
[license-shield]: https://img.shields.io/github/license/theweion/shopping-cart-kata.svg?style=for-the-badge
[license-url]: https://github.com/theweion/shopping-cart-kata/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/terryfallows