📚 Nepal BookStore – MERN Stack Project

Nepal BookStore is a full-stack web application developed as part of the **Advanced Web Technology** course project. It is designed to provide users with a seamless and interactive platform to browse, explore, and purchase educational books and courses.

Built using the **MERN stack**—MongoDB, Express.js, React.js, and Node.js—the application leverages modern libraries like **TailwindCSS**, **DaisyUI**, **React Slick**, and **Axios** to offer a responsive and visually appealing UI.

🚀 Objectives

* Build a modern, responsive bookstore web application using real-world technologies.
* Showcase full integration of frontend and backend components.
* Implement user authentication and route protection.
* Provide a dynamic, user-friendly interface for book/course browsing.

🛠️ Technology Stack

| Layer       | Technologies                                                                |
| ----------- | --------------------------------------------------------------------------- |
| Frontend    | React.js, TailwindCSS, DaisyUI, React Slick, Axios, React Hot Toast         |
| Backend     | Node.js, Express.js                                                         |
| Database    | MongoDB (GUI via MongoDB Compass)                                           |
| API Testing | Postman                                                                     |
| Others      | React Router DOM, React Hook Form, Context API (AuthProvider), LocalStorage |

✨ Features & Functionalities

🔐 User Authentication

* Signup & login with form validation using **React Hook Form**.
* Uses **Axios** for sending credentials to backend API.
* User sessions managed with **localStorage**.
* Secure logout functionality.

📘 Course Browsing

* Fetches books from backend API and displays in categorized view.
* Books displayed using reusable **Card** components with image, title, price, and "Buy Now" option.

🎠 Free Courses Carousel

* Dynamically fetches and filters books tagged as "Free".
* Displays using **React Slick** carousel for engaging UI.

🧭 Navigation & Theming

* Sticky **Navbar** with light/dark theme toggle.
* Theme state is saved in **localStorage**.
* Responsive login/logout navigation handled via **AuthProvider** context.

🧩 Reusable Components

* `Cards`: Book display layout.
* `Navbar`: Navigation with theme toggle and authentication buttons.
* `Footer`: Static footer with links and social icons.

⚙️ Working Mechanism

▶️ Frontend Flow (React.js)

1. React Router integrates components like `Course`, `Freebook`, `Navbar`.
2. **Axios** fetches data from backend REST APIs.
3. Components render dynamic content (books/courses).
4. Authentication state is managed via Context and stored locally.

🖥️ Backend Flow (Node.js + Express)

1. Handles:

   * User signup & login.
   * Book/course fetching and filtering.
2. Stores data in **MongoDB** using **Mongoose**.
3. API endpoints tested using **Postman**.

🧪 Tools Used

| Tool            | Purpose                               |
| --------------- | ------------------------------------- |
| Postman         | API testing (auth & data endpoints)   |
| MongoDB Compass | Visual management of book/course data |

📦 Key Libraries & Packages

| Library          | Use Case                    |
| ---------------- | --------------------------- |
| TailwindCSS      | Utility-first CSS framework |
| DaisyUI          | Pre-built UI components     |
| Axios            | API communication           |
| React Slick      | Carousel functionality      |
| React Hot Toast  | Toast notifications         |
| React Router DOM | Client-side routing         |
| React Hook Form  | Form handling & validation  |
