# Quick Start - Localhost Setup

## ✅ What's Been Done

1. ✅ Dependencies installed (frontend & backend)
2. ✅ Environment files created
3. ✅ Backend server starting on port 5000
4. ✅ Frontend server starting on port 3000

## 🚀 Access Your Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Admin Login**: http://localhost:3000/admin/login

## ⚠️ Important: MongoDB Setup Required

The backend needs MongoDB to run. You have two options:

### Option 1: Local MongoDB (Recommended for Development)

1. **Install MongoDB**:
   - Download from: https://www.mongodb.com/try/download/community
   - Install and start MongoDB service
   - Default connection: `mongodb://localhost:27017`

2. **Verify MongoDB is running**:
   ```bash
   # Check if MongoDB service is running
   # Windows: Check Services app or run:
   net start MongoDB
   ```

### Option 2: MongoDB Atlas (Cloud - Free)

1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sri-rudra-foods
   ```

## 👤 Create Admin User

After MongoDB is running, create your first admin user:

```bash
cd backend
node scripts/createAdmin.js admin@example.com admin123
```

Then login at http://localhost:3000/admin/login with:
- Email: `admin@example.com`
- Password: `admin123`

## 🔧 Environment Variables

The `.env` files have been created with default values. For production features, update:

### `backend/.env`:
- `CLOUDINARY_*` - For image uploads (get from cloudinary.com)
- `RAZORPAY_*` - For payments (get from razorpay.com)

### `frontend/.env`:
- `VITE_RAZORPAY_KEY` - Your Razorpay key (same as backend)

## 🐛 Troubleshooting

### Backend won't start
- **Error: "MongoServerError"** → MongoDB is not running. Start MongoDB service.
- **Error: "Cannot find module"** → Run `npm install` in backend folder

### Frontend won't start
- **Error: "Port 3000 in use"** → Change port in `vite.config.js` or close other app using port 3000
- **Error: "Cannot find module"** → Run `npm install` in frontend folder

### Can't connect to backend
- Check if backend is running on port 5000
- Check `VITE_API_URL` in `frontend/.env` is `http://localhost:5000/api`

## 📝 Next Steps

1. ✅ Ensure MongoDB is running
2. ✅ Create admin user (see above)
3. ✅ Login to admin panel
4. ✅ Add products via admin panel
5. ✅ Test the frontend

## 🎯 Test the Application

1. Visit http://localhost:3000
2. Browse products (add some via admin first)
3. Add items to cart
4. Test checkout (use Razorpay test mode)
5. Check admin panel for orders

---

**Note**: For image uploads and payments to work fully, you'll need to set up Cloudinary and Razorpay accounts. The app will run without them, but those features won't work.

