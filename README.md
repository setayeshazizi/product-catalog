 Week4 assignment - React Router Product Catalog

This is a multi-page React app built using React Router v7.  
The app showcases a simple product catalog with dynamic routing, nested layouts, and a 404 page.

__________

 Features
- Home Page: Welcome page for the app.
- Products Page:  
  - Displays a list of products (minimum 6).  
  - Each product has a "View Details" link.
- Product Details Page:  
  - Dynamic route /products/:id.  
  - Shows product name, price, category, and description.  
  - "Back" button navigates to the previous page.
  - If product ID is invalid → shows a professional "Product not found" message.
- 404 Page: Handles any invalid routes.
- Navbar:  
  - Visible on all pages.  
  - Highlights active page using NavLink.

___________

Tech Stack
- React 18  
- React Router v7  
- Vite for bundling

___________

 Quick Start
 Clone the repo:

```bash
git clone (https://github.com/setayeshazizi/product-catalog)
cd product_catalog

 Install dependencies:
 npm install

 Run the app:
 npm run dev

______________

Project Structure

src/
├── components/
│   └── Navbar.jsx
├── data/
│   └── products.js
├── pages/
│   ├── Home.jsx
│   ├── ProductsLayout.jsx
│   ├── ProductsList.jsx
│   ├── ProductDetails.jsx
│   └── NotFound.jsx
App.jsx
