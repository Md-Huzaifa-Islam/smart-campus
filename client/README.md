# Smart Campus

A modern, full-stack web application for campus food ordering and vendor management.  
Built with **React**, **Express**, **MongoDB**, and **Tailwind CSS**.

---

## Features

- 🔐 **Authentication**: Secure login, registration, and role-based access (vendor, student).
- 🛒 **Food Ordering**: Browse menus, add to cart, and place orders.
- 🍔 **Vendor Management**: Vendors can add, edit, and manage their food menu.
- 📦 **Order Tracking**: Users and vendors can view and manage orders.
- 🎨 **Modern UI**: Responsive, light-themed interface using Tailwind CSS and DaisyUI.
- 🔍 **Vendor Directory**: Discover all campus vendors and their offerings.

---

## User Roles & Demo Accounts

### 👨‍🍳 Vendor

**Demo Vendor Account:**  
- **Email:** huzaifa@gmail.com  
- **Password:** 123456

**Vendor Capabilities:**
- Log in and manage their own shop.
- Add, edit, and remove menu items.
- View all orders placed for their shop.
- Track order status and update as needed.

---

### 🎓 Student (Normal User)

**Demo Student Account:**  
- **Email:** tawhidislam@gmail.com  
- **Password:** 123456

**Student Capabilities:**
- Browse all vendors and their menus.
- Add food items to cart and place orders.
- View their own order history and order status.
- Leave feedback for vendors.

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, DaisyUI, SweetAlert2, React Tooltip
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, Cookie-based sessions
- **Other:** Vite, dotenv, prop-types

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB database (local or Atlas)

### Clone the Repository

```sh
git clone https://github.com/your-username/smart-campus.git
cd smart-campus
```

### Environment Variables

#### Server (`/server/.env`)

```
PORT=5000
DB_USER=yourMongoUser
DB_PASS=yourMongoPassword
JWT_SECRET=yourSecretKey
```

#### Client (`/client/.env.local`)

```
VITE_API_URL=http://localhost:5000
# Firebase or other auth config if needed
```

### Install Dependencies

#### Server

```sh
cd server
npm install
```

#### Client

```sh
cd ../client
npm install
```

### Run the App

#### Start Backend

```sh
cd server
npm run dev
```

#### Start Frontend

```sh
cd ../client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Folder Structure

```
smart-campus/
├── client/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── ...
│   └── ...
├── server/         # Express backend
│   ├── index.js
│   └── ...
└── README.md
```

---

## Scripts

| Command              | Description                        |
|----------------------|------------------------------------|
| `npm run dev`        | Start dev server (client/server)   |
| `npm run build`      | Build for production (client)      |
| `npm start`          | Start production server (server)   |

---

## Customization

- **Theme:** Uses a light theme by default. Customize Tailwind config for branding.
- **API URLs:** Set `VITE_API_URL` in `.env.local` for client-server communication.
- **Authentication:** Update JWT secret and Firebase config as needed.

---

## Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Credits

- [Unsplash](https://unsplash.com/) for demo food images
- [DaisyUI](https://daisyui.com/) for UI components
- [SweetAlert2](https://sweetalert2.github.io/) for alerts

---

**Enjoy your Smart Campus experience!**