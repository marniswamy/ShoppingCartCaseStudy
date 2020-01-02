This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn` Or `npm install`

The obove command will install all dependent modules

### `yarn start` Or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

 1. React/Redux for library and data/store management.
 2. Material UI as UI framework.
 3. Router 3.x used for routing.
 4. And other util libraries like loadsh and currency formatter etc.

## Approach

 1. Baseline project was created using create-react-app template by facebook.
 2. Created data model object based on given products.
 3. Created a store object with the default initial state including given products.
 4. Configured routing for page navigation, created 4 pages namely, Welcome, Dashboard, Shopping cart and   NotFound pages.
 5. Once the user starts the dev server and hits the http://localhost:3000, by default welcome page loads
 to the browser.
 6. Then user needs to navigate to dashboard, where user can see the total available products along with
 side menu, with that he can filter and categorise the products.
 7. On the each product in the dashboard page, I am showing the information like name and available stock along with price in pounds and Add To Cart button.
 8. Once user clicks the Add To Cart button, the selected product will be added to the cart at the same time
 the stock will get deducted.
 9. User can also see the Header in dashboard page, where i am displaing the cart icon with the count that shows the no of items in the cart and CHECKOUT button which will navigate to Cart page.
 10. Once user reaches the Cart page, He will see the list of added items grouped together if he adds more than one, and corresponding price displaying on the list.
 11. Also added two button on the list, so that user can add or remove items from his cart of that product.
 12. Then in the right side of the page, we are displaying the total amount of the cart items.
 13. Below that, we have three coupons availble and displaying all three. if the order value matches the coupons conditions, then those buttons will enable, so that user can click that coupon, then the same amount will be applicable on top of the actual amount.
 14. Similary, In the header of the Cart page, we are displaying DASHBOARD button, so that user can go back and select the products again.
 15. Once user clicks the final button, one dialog box appears and confimation about the order. Once user click ok, then the page navigates to Welcome page again.
