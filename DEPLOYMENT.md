# Deployment Guide for Sri Rudra Foods

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend
1. Ensure all environment variables are set in `.env`:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   VITE_RAZORPAY_KEY=your_razorpay_key
   ```

### Step 2: Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend directory: `cd frontend`
3. Run: `vercel`
4. Follow the prompts:
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Add environment variables in Vercel dashboard

### Alternative: GitHub Integration
1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import your repository
4. Configure:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variables in project settings

## Backend Deployment (Render/Railway)

### Option 1: Render

1. **Create Account**: Sign up at [render.com](https://render.com)

2. **Create Web Service**:
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - Name: `sri-rudra-foods-backend`
     - Environment: `Node`
     - Build Command: `cd backend && npm install`
     - Start Command: `cd backend && npm start`
     - Root Directory: `backend`

3. **Environment Variables**:
   Add these in Render dashboard:
   ```
   PORT=10000
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```

4. **Update Frontend API URL**:
   Update `VITE_API_URL` in Vercel to point to your Render backend URL

### Option 2: Railway

1. **Create Account**: Sign up at [railway.app](https://railway.app)

2. **Deploy**:
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository
   - Add service → Select backend folder
   - Railway auto-detects Node.js

3. **Environment Variables**:
   Add the same variables as Render in Railway dashboard

4. **Update Frontend API URL**:
   Update `VITE_API_URL` in Vercel to point to your Railway backend URL

## MongoDB Setup

1. **MongoDB Atlas** (Recommended):
   - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Get connection string
   - Add your IP to whitelist (or use 0.0.0.0/0 for all)
   - Update `MONGODB_URI` in backend environment variables

2. **Local MongoDB** (Development only):
   - Install MongoDB locally
   - Use: `mongodb://localhost:27017/sri-rudra-foods`

## Cloudinary Setup

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your credentials from dashboard:
   - Cloud Name
   - API Key
   - API Secret
3. Add to backend environment variables

## Razorpay Setup

1. Sign up at [razorpay.com](https://razorpay.com)
2. Get your API keys from dashboard
3. Add to both frontend and backend environment variables
4. Configure webhook URL (if needed) in Razorpay dashboard

## Initial Admin Setup

After deployment, create the first admin user:

```bash
cd backend
node scripts/createAdmin.js admin@example.com yourpassword
```

Or manually create via MongoDB:
```javascript
// In MongoDB shell or Compass
db.admins.insertOne({
  email: "admin@example.com",
  password: "$2a$10$..." // bcrypt hash of password
})
```

## Post-Deployment Checklist

- [ ] Frontend deployed on Vercel
- [ ] Backend deployed on Render/Railway
- [ ] MongoDB Atlas cluster created and connected
- [ ] Cloudinary account configured
- [ ] Razorpay account configured
- [ ] Environment variables set in all platforms
- [ ] Frontend API URL points to production backend
- [ ] Admin user created
- [ ] Test payment flow
- [ ] Test image upload
- [ ] Test admin login
- [ ] Update CORS settings if needed
- [ ] Set up custom domain (optional)

## CORS Configuration

If you encounter CORS issues, update `backend/server.js`:

```javascript
app.use(cors({
  origin: ['https://your-frontend-domain.vercel.app', 'http://localhost:3000'],
  credentials: true
}))
```

## Monitoring

- Set up error tracking (Sentry, LogRocket, etc.)
- Monitor API response times
- Set up uptime monitoring
- Configure email notifications for errors

## SSL/HTTPS

Both Vercel and Render/Railway provide SSL certificates automatically. No additional configuration needed.

