Book Store App (MERN Stack)
The Book Store App is a fully-functional online bookstore built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application provides a platform for users to browse and purchase books, manage their orders, and for administrators to manage inventory, handle user accounts, and view orders. It features a modern, user-friendly interface and includes essential e-commerce functionalities like cart management, order history, and secure user authentication.

Key Features
1. User Authentication
Secure Login/Signup: Users can register and log in to their accounts using JWT (JSON Web Tokens) for secure authentication.
Protected Routes: Certain routes like user profile and order history are protected, ensuring only authenticated users can access them.
2. Book Management
Admin Dashboard: Admin users can manage books in the store, including adding, editing, and deleting books.
Book Details: Each book has a dedicated page with detailed information, including title, author, price, and description.
Category Filters: Users can filter books based on categories like fiction, non-fiction, bestsellers, or genres.
3. Search and Filter
Search Functionality: Users can search for books by title, author, or keywords.
Advanced Filters: Filter books by price range, ratings, or category to help users find the perfect book more easily.
4. Shopping Cart and Checkout
Add to Cart: Users can add books to their cart and view the list of items they plan to purchase.
Checkout Process: Secure checkout with user authentication, allowing users to enter shipping information and payment details.
Order Confirmation: After successful purchase, users receive an order confirmation with details of their transaction.
5. Order History
View Past Orders: Users can view a list of their past orders along with details such as books purchased, order status, and total amount.
Order Tracking: Users can track the status of their orders (e.g., shipped, in transit, delivered).
6. Responsive Design
The app features a responsive design, ensuring that the user interface adapts to different screen sizes, from desktop to mobile devices, providing a smooth and consistent experience across platforms.
7. Admin Panel
Manage Users: Admins can view and manage user accounts.
Order Management: Admins can view all orders placed by users, mark orders as shipped, and manage order statuses.
Dashboard: Admins have access to a dashboard displaying overall sales, user activity, and book inventory.
Technologies Used
Frontend:

React.js: A JavaScript library used for building the user interface and creating a dynamic single-page application (SPA).
Redux: A state management library for React to handle complex states like user authentication and cart management.
Axios: A promise-based HTTP client for making API requests to interact with the backend.
Backend:

Node.js: A runtime environment for executing JavaScript on the server side.
Express.js: A minimal web framework for Node.js, used to build the API endpoints and manage routes.
MongoDB: A NoSQL database used to store user information, books, orders, and other application data.
JWT (JSON Web Tokens): Used for user authentication, enabling secure token-based sessions.
Authentication & Authorization:

JWT: Ensures secure user login and protects sensitive routes from unauthorized access.
Bcrypt.js: A library used to hash user passwords securely.
Deployment:

The app can be deployed on platforms like vercel, Netlify, or any cloud service that supports Node.js and MongoDB.

Installation
To run this app locally, follow these steps:

1 .Clone the repository:
git clone https://github.com/saqibmir580-png/book-store-app.git
cd book-store-app
2.Install dependencies:

3.First, install dependencies for both the server and the client:
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
Set up environment variables:

Create .env files in both the client and server directories.
Add necessary environment variables like MONGO_URI, JWT_SECRET, PORT, etc.
4.Start the backend server:
cd server
npm run dev
5.Start the frontend React app:
cd client
npm start
6.Open the app in your browser:

Visit http://localhost:3000 to access the application.
