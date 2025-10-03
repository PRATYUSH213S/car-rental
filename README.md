# 🚗 Car Rental Management System

A comprehensive full-stack car rental management system built with the MERN stack (MongoDB, Express.js, React, Node.js). This project includes a customer-facing frontend, an admin panel, and a robust backend API with payment integration.

## 🌟 Features

### Customer Features
- **User Authentication**: Secure registration and login system
- **Car Browsing**: Browse available cars with detailed information
- **Car Search & Filter**: Find cars by category, price range, and availability
- **Car Details**: View comprehensive car information including images, specifications, and availability
- **Booking System**: Book cars with date selection and availability checking
- **Payment Integration**: Secure payment processing with Stripe
- **Booking Management**: View and manage personal bookings
- **Responsive Design**: Mobile-friendly interface with modern UI

### Admin Features
- **Car Management**: Add, edit, and delete cars from the fleet
- **Booking Management**: View and manage all customer bookings
- **Dashboard**: Overview of system statistics and operations
- **Image Upload**: Upload and manage car images
- **Real-time Updates**: Live availability tracking

### Technical Features
- **JWT Authentication**: Secure token-based authentication
- **File Upload**: Image handling with Multer
- **Payment Processing**: Stripe integration for secure payments
- **Database Optimization**: Efficient MongoDB queries with indexing
- **CORS Configuration**: Proper cross-origin resource sharing
- **Security**: Helmet.js for security headers
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern React with hooks
- **React Router DOM 7.7.0** - Client-side routing
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **Axios 1.11.0** - HTTP client
- **React Toastify 11.0.5** - Toast notifications
- **Stripe React 3.9.1** - Payment processing
- **Lucide React 0.536.0** - Icon library
- **Three.js 0.179.1** - 3D graphics (for enhanced UI)

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MongoDB 8.17.2** - NoSQL database
- **Mongoose 8.17.2** - MongoDB object modeling
- **JWT 9.0.2** - JSON Web Token authentication
- **Bcrypt 6.0.0** - Password hashing
- **Multer 2.0.2** - File upload handling
- **Stripe 18.4.0** - Payment processing
- **CORS 2.8.5** - Cross-origin resource sharing
- **Helmet 8.1.0** - Security middleware
- **Morgan 1.10.1** - HTTP request logger

### Development Tools
- **Vite 7.0.4** - Build tool and dev server
- **ESLint 9.30.1** - Code linting
- **Nodemon 3.1.10** - Development server auto-restart

## 📁 Project Structure

```
Car-Rental/
├── frontend/                 # Customer-facing React app
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── CarDetailPage/
│   │   │   ├── CarPage/
│   │   │   ├── HomeBanner/
│   │   │   ├── HomeCars/
│   │   │   ├── LoginPage/
│   │   │   ├── MyBookings/
│   │   │   ├── Navbar/
│   │   │   └── ...
│   │   ├── pages/           # Page components
│   │   │   ├── Home/
│   │   │   ├── Cars/
│   │   │   ├── CarDetail/
│   │   │   ├── Login/
│   │   │   ├── SignUp/
│   │   │   ├── MyBookings/
│   │   │   └── Contact/
│   │   ├── assets/          # Static assets
│   │   └── App.jsx          # Main app component
│   └── package.json
├── admin/                   # Admin panel React app
│   ├── src/
│   │   ├── components/      # Admin components
│   │   │   ├── AddCarPage/
│   │   │   ├── ManageCarPage/
│   │   │   ├── BookingPage/
│   │   │   └── Navbar/
│   │   ├── pages/           # Admin pages
│   │   │   ├── AddCar/
│   │   │   ├── ManageCar/
│   │   │   └── Booking/
│   │   └── App.jsx
│   └── package.json
├── backend/                 # Node.js/Express API
│   ├── config/
│   │   └── db.js           # Database configuration
│   ├── controllers/        # Route controllers
│   │   ├── authController.js
│   │   ├── carController.js
│   │   ├── bookingController.js
│   │   └── paymentController.js
│   ├── middlewares/        # Custom middleware
│   │   ├── auth.js
│   │   └── upload.js
│   ├── models/             # Database models
│   │   ├── userModel.js
│   │   ├── carModel.js
│   │   └── bookingModel.js
│   ├── routes/             # API routes
│   │   ├── authRoutes.js
│   │   ├── carRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── paymentRoutes.js
│   ├── uploads/            # Uploaded files
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd car-rental-mern-project
   ```

2. **Install backend dependencies**
   ```bash
   cd Car-Rental/backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install admin dependencies**
   ```bash
   cd ../admin
   npm install
   ```

### Environment Setup

1. **Backend Environment Variables**
   Create a `.env` file in the `Car-Rental/backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/carrental
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

2. **Frontend Environment Variables**
   Create a `.env` file in the `Car-Rental/frontend` directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

3. **Admin Environment Variables**
   Create a `.env` file in the `Car-Rental/admin` directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd Car-Rental/backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd Car-Rental/frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Start the admin panel**
   ```bash
   cd Car-Rental/admin
   npm run dev
   ```
   The admin panel will run on `http://localhost:5174`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Cars
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/cars` - Add new car (admin)
- `PUT /api/cars/:id` - Update car (admin)
- `DELETE /api/cars/:id` - Delete car (admin)

### Bookings
- `GET /api/bookings` - Get user bookings (protected)
- `POST /api/bookings` - Create new booking (protected)
- `PUT /api/bookings/:id` - Update booking status (admin)
- `DELETE /api/bookings/:id` - Cancel booking (protected)

### Payments
- `POST /api/payments/create-payment-intent` - Create Stripe payment intent
- `POST /api/payments/confirm-payment` - Confirm payment

## 🎨 Key Features Implementation

### Car Availability System
The system includes a sophisticated car availability tracking system:
- Real-time availability checking
- Booking conflict prevention
- Availability calendar integration
- Status management (available, booked, maintenance)

### Payment Integration
- Secure payment processing with Stripe
- Payment intent creation and confirmation
- Success/failure handling
- Webhook support for payment verification

### Image Management
- Car image upload with Multer
- Image optimization and storage
- Static file serving with proper CORS headers

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Security headers with Helmet
- Input validation and sanitization
- Protected routes and middleware

## 🚀 Deployment

### Frontend Deployment
1. Build the frontend:
   ```bash
   cd Car-Rental/frontend
   npm run build
   ```
2. Deploy the `dist` folder to your hosting service

### Backend Deployment
1. Set up environment variables on your server
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Database
- Configure MongoDB connection string
- Set up proper indexes for performance
- Configure backup strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- Stripe for payment processing
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors

## 📞 Support

If you have any questions or need help with the project, please open an issue or contact the development team.

---

**Happy Coding! 🚗💨**
