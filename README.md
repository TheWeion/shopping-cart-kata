<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL-3.0 License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />

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
          <ul>
            <li><a href="#findproductbysku">findProductBySKU</a></li>
            <li><a href="#calculateitem">calculateItem</a></li>
            <li><a href="#aggrcart">aggrCart</a></li>            
            <li><a href="#calculatesubtotal">calculateSubTotal</a></li>
            <li><a href="#initcheckout">initCheckout</a></li>
          </ul>
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
   git clone https://github.com/TheWeion/shopping-cart-kata.git
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
#### findProductBySKU

```js
findProductBySKU(sku, idx)
```

##### Description
This function will locate each product from it's SKU and compare it to the ```code``` object located in the cart dataset.

##### Parameters
* ```sku``` - Stock Keeping Unit, the product ID that identifies the product.
* ```idx``` - The index used to track the product(s) in the cart.

#### calculateItem

```js
calculateItem({ basePrice, discount }, quantity, idx)
```

##### Description
This function calculates the items in the cart with additional checks to check for and apply discounts.

##### Parameters

* ```basePrice``` - Records the Base Price of the product.
* ```discount``` - Pulls the discount object from the ```inventoryData``` for each product.
* ```quantity``` - of the products.
* ```idx``` - The index used to track the product(s) in the cart.

##### Output
Itemised total of each product as an Integer.

#### aggrCart

```js
aggrCart(cartData)
```

##### Description
This function will check the cartData for any duplicate products and aggregate them into a single object.

##### Parameters
* ```cartData``` - Object containing itemised shopping cart.

##### Output
Object containing aggregated shopping cart.

#### calculateSubTotal

```js
calculateSubTotal(cart)
```

##### Description
This function adds the total value of each item in the itemised cart.

##### Parameters
* ```cart``` - Object containing itemised shopping cart.

#### Output
Subtotal of the cart as an Integer.

#### initCheckout

```js
initCheckout(cart)
```

##### Description
This function processes the user's cart based on the inventory data and then prints a receipt to the console with the itemised total and subtotal.

##### Parameters
* ```cart``` - Array of objects containing the user's cart.

##### Output
Receipt of the shopping order (console output).


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License
Distributed under the GNU License. See `LICENSE` for more information.

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
[license-url]: https://github.com/theweion/shopping-cart-kata/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/terryfallows
