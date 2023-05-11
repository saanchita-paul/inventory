# Inventory Management System

This repository contains the source code for an Inventory Management System, a web application built using Vue.js, Backend (PHP and Laravel framework). The system provides functionality for managing products, purchases, categories, and user authentication.

## Features

- Landing Page: A landing page which is home screen that serves as the welcome page
- User Login: The system allows users to login and authenticate themselves using email and password.
- Product Management: Users can add and view product details, including name, description, price, and stock quantity.
- Purchase Management: Users can record purchases, specifying the product, quantity, and price, which updates the stock quantity and price accordingly.
- Category Management: The current system lacks a user interface (UI) for the functionality of adding, editing, or deleting categories. Instead, a seeder was utilized in the backend for category data.
- Search and Filtering: The system provides search functionality to search for products by name and filtering options to refine search results.
- Access Control: Certain operations, such as adding, viewing and searching products, are restricted to authenticated users only.

# Installation

To set up the Inventory Management System locally, follow these steps:

- Make sure you have node 16.x installed

- Clone the repository:
```git
git clone https://github.com/saanchita-paul/inventory.git
```

- Install the dependencies using Yarn:

```git
npm install
```

- Compile the frontend assets:
```
npm run dev
```

- Access the application by visiting [localhost](http://localhost:5173/) in your web browser.
