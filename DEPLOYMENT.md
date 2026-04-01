# Legaci Platform - Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Step 1: Prepare the Project
```bash
cd legaci-mockup
npm install
npm run build  # Verify build works
```

### Step 2: Create/Login to Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub, GitLab, or Bitbucket (recommended)
- Or create account with email

### Step 3A: GitHub Deployment (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial Legaci platform mockup"
git remote add origin https://github.com/YOUR_USERNAME/legaci-mockup.git
git branch -M main
git push -u origin main
```

2. **Import to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select "From Git Repository"
   - Enter your GitHub URL
   - Click "Continue"
   - Project settings should auto-detect Next.js
   - Click "Deploy"
   - Wait 2-3 minutes for deployment

3. **Access Your Site**
   - Vercel provides a URL like `https://legaci-mockup-xxx.vercel.app`
   - This URL updates automatically on every push to `main`

### Step 3B: Direct CLI Deployment (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel (opens browser)
vercel login

# Deploy to production
cd legaci-mockup
vercel --prod

# Output will show your live URL
```

### Step 3C: Manual Upload via Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Select "Other" for import
4. Upload project zip file
5. Configure settings (keep defaults)
6. Click "Deploy"

## Deployment Options Comparison

| Method | Time | Complexity | Updates |
|--------|------|-----------|---------|
| GitHub Integration | 5 min | Easy | Auto on push |
| Vercel CLI | 2 min | Easy | Manual |
| Dashboard Upload | 10 min | Medium | Manual |
| Docker | 15 min | Hard | Manual |

## Recommended: GitHub + Vercel Integration

**Benefits:**
- ✅ Automatic deployments on every `git push`
- ✅ Preview URLs for pull requests
- ✅ Rollback capability
- ✅ No need to run `vercel` command
- ✅ Team collaboration ready
- ✅ Environment variables management

**Setup:**
```bash
# 1. Create GitHub repo
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/legaci-mockup
git push -u origin main

# 2. Connect to Vercel
# Visit vercel.com/new and select your repo
# Done! Automatic deployments now active
```

## Post-Deployment

### Access Your Site
```
Your live URL: https://legaci-mockup-xxx.vercel.app
```

### Share Demo
- Send the Vercel URL to stakeholders
- Add to project documentation
- Use in presentations/pitches

### Custom Domain
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add custom domain (e.g., `legaci-demo.com`)
5. Update DNS records (Vercel provides instructions)

### Environment Variables
For future backend integration:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add variables (API keys, URLs, etc.)
5. They're automatically available at build/runtime

## Troubleshooting

### "Build failed" error
```bash
# Verify build works locally first
npm run build
npm start  # Test production build
```

### Port already in use
```bash
# Use different port
vercel --prod --listen 3001
```

### Node version mismatch
```bash
# Specify Node version in vercel.json:
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "env": {
    "NODEJS_VERSION": "18.17.0"
  }
}
```

## Monitoring & Analytics

After deployment, Vercel provides:
- **Analytics**: Page load times, Core Web Vitals
- **Logs**: Build and runtime logs accessible in dashboard
- **Edge Function metrics**: Performance data
- **Usage**: Request counts, bandwidth

Visit your project dashboard to view these.

## Next Steps

1. **Share with team**: Send Vercel URL for feedback
2. **Gather feedback**: Note UI/UX improvements
3. **Connect backend**: Replace mock data with API calls
4. **Add authentication**: Integrate Auth0/NextAuth/Firebase
5. **Database integration**: Connect to PostgreSQL/MongoDB
6. **Production hardening**: Security, performance, monitoring

## Production Checklist

- [ ] Build passes locally (`npm run build`)
- [ ] No console errors in production build
- [ ] Responsive design tested on mobile
- [ ] All modules accessible per role
- [ ] Charts load correctly
- [ ] Links navigate properly
- [ ] Performance acceptable (Lighthouse score 80+)
- [ ] SEO meta tags set (for public launches)
- [ ] Custom domain configured (if needed)
- [ ] Error logging configured (Sentry/LogRocket)
- [ ] Analytics configured (Vercel Analytics)

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Include minimal reproduction
- **Community**: vercel.com/support

---

**Ready to deploy?** Start with GitHub integration above. You'll have a live demo in under 5 minutes! 🚀
