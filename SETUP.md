# Setup Instructions for Sri Rudra Foods

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for image uploads)
- Razorpay account (for payments)

## Step 1: Clone and Install

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

## Step 2: Environment Variables

### Frontend (.env)

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY=your_razorpay_key_here
```

### Backend (.env)

Create `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sri-rudra-foods
JWT_SECRET=your_jwt_secret_key_here_minimum_32_characters
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## Step 3: Setup Services

### MongoDB

**Option A: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service
- Use: `mongodb://localhost:27017/sri-rudra-foods`

**Option B: MongoDB Atlas (Recommended)**
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Add your IP to whitelist
5. Update `MONGODB_URI` in backend `.env`

### Cloudinary

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get credentials from dashboard
3. Add to backend `.env`

### Razorpay

1. Sign up at [razorpay.com](https://razorpay.com)
2. Get API keys from dashboard
3. Add to both frontend and backend `.env`

## Step 4: Create Admin User

```bash
cd backend
node scripts/createAdmin.js admin@example.com yourpassword
```

Or manually:
```bash
# Using MongoDB shell
mongo
use sri-rudra-foods
db.admins.insertOne({
  email: "admin@example.com",
  password: "$2a$10$..." // Use bcrypt to hash your password
})
```

## Step 5: Run Development Servers

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

## Step 6: Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Admin Panel: http://localhost:3000/admin/login

## Default Admin Credentials

After creating admin user:
- Email: `admin@example.com` (or your custom email)
- Password: `yourpassword` (or your custom password)

## Troubleshooting

### MongoDB Connection Error
- Check if MongoDB is running
- Verify connection string in `.env`
- Check IP whitelist (for Atlas)

### CORS Errors
- Ensure backend CORS is configured correctly
- Check frontend API URL matches backend

### Image Upload Fails
- Verify Cloudinary credentials
- Check file size limits
- Ensure proper file format (jpg, png, webp)

### Payment Not Working
- Verify Razorpay keys in both frontend and backend
- Check Razorpay account is activated
- Test with Razorpay test keys first

## Next Steps

- Add products via Admin Panel
- Test payment flow
- Customize branding
- Deploy to production (see DEPLOYMENT.md)

