# Sri Rudra Foods – Premium Spices & Masalas

A full-stack e-commerce platform for premium Indian spices and masalas.

## Tech Stack

- **Frontend:** React + TailwindCSS + Framer Motion
- **Backend:** Node.js + Express + MongoDB (Mongoose)
- **Authentication:** JWT for Admin Login
- **Payments:** Razorpay Integration
- **Image Upload:** Cloudinary
- **Deployment:** Vercel (Frontend) + Render/Railway (Backend)

## Project Structure

```
sri-rudra-foods/
├── frontend/          # React application
├── backend/           # Node.js + Express API
└── README.md
```

## Quick Start

For detailed setup instructions, see [SETUP.md](./SETUP.md)

1. **Install dependencies:**
```bash
npm run install:all
```

2. **Setup environment variables** (see [SETUP.md](./SETUP.md) for details)

3. **Create admin user:**
```bash
cd backend
node scripts/createAdmin.js admin@example.com yourpassword
```

4. **Run development servers:**
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

5. **Access the application:**
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3000/admin/login

## Features

- ✅ Product catalog with Telugu category names
- ✅ Shopping cart and checkout
- ✅ Razorpay payment integration
- ✅ Admin panel with JWT authentication
- ✅ Product management (CRUD)
- ✅ Order management
- ✅ Contact/Enquiry system
- ✅ Image upload via Cloudinary
- ✅ Responsive design
- ✅ SEO optimized

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Quick Overview:**
- Frontend: Deploy to Vercel
- Backend: Deploy to Render or Railway
- Database: MongoDB Atlas
- Image Storage: Cloudinary
- Payments: Razorpay

## Brand Colors

- Saffron Orange: #E65100
- Leaf Green: #2E7D32
- White: #FFFFFF
- Earth Brown: #8D6E63

