# Sreekar Yajamanam - Personal Portfolio Website

A modern, high-end personal portfolio website for a Data Engineer specializing in GCP, Snowflake, and Databricks.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Animated Profile Section** - Eye-catching profile with parallax effects
- **Dropdown Contact Menu** - Easy access to multiple contact options
- **Contact Options Include:**
  - Email
  - LinkedIn
  - GitHub
  - Free consultation booking (Calendly)
  - Paid consultation booking (Calendly)
- **Smooth Animations** - 3D card effects, scroll animations, and transitions
- **Modern Tech Stack** - Pure HTML, CSS, and JavaScript (no dependencies)

## 📁 File Structure

```
yajamanamsreekar.com/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── assets/             # Images folder (create this)
│   └── profile.jpg     # Your profile picture
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Update Your Information

#### Email Address
Replace `your.email@yajamanamsreekar.com` with your actual email in:
- `index.html` (navigation dropdown and contact section)

#### Social Links
Update these URLs with your actual profiles:
- LinkedIn: `https://linkedin.com/in/sreekar-yajamanam`
- GitHub: `https://github.com/sreekar-yajamanam`

#### Calendly Links
Replace with your Calendly URLs:
- Free call: `https://calendly.com/your-username`
- Paid consultation: `https://calendly.com/your-username/paid-consultation`

### 2. Add Your Profile Picture

1. Create an `assets` folder in your project root
2. Add your profile picture as `profile.jpg`
3. Recommended size: 400x400px or larger (square aspect ratio)
4. Formats supported: JPG, PNG, WebP

### 3. Deploy to GitHub Pages

#### Method 1: GitHub Web Interface

1. Create a new repository named `yajamanamsreekar.com` (or any name)
2. Go to repository Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/yajamanamsreekar.com/`

#### Method 2: Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/yajamanamsreekar.com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 🌐 Custom Domain Setup

### Option 1: GitHub Pages Custom Domain

1. Purchase domain `yajamanamsreekar.com` from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file to your repository with content: `yajamanamsreekar.com`
3. In your DNS settings, add these records:
   ```
   Type: A Record
   Host: @
   Value: 185.199.108.153
   
   Type: A Record
   Host: @
   Value: 185.199.109.153
   
   Type: A Record
   Host: @
   Value: 185.199.110.153
   
   Type: A Record
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME Record
   Host: www
   Value: yourusername.github.io
   ```
4. In GitHub repository settings → Pages, enter your custom domain
5. Enable "Enforce HTTPS"

### Option 2: Alternative Hosting

You can also deploy to:
- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repo
- **Cloudflare Pages**: Deploy from GitHub

## 📝 Customization Guide

### Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #0a0e27;
    --accent-cyan: #00fff5;
    --accent-purple: #a855f7;
    --accent-orange: #ff6b35;
}
```

### Modify Content
- **Hero Section**: Update name, title, description in `index.html`
- **Expertise Cards**: Modify tech stack details
- **Articles**: Update article titles, descriptions, and dates
- **Services**: Customize your service offerings

### Add Blog Posts
To add real blog functionality, consider:
- Medium integration
- Dev.to integration
- Or add a static blog using Jekyll/Hugo

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile Optimization

The site is fully responsive with:
- Hamburger menu on mobile
- Touch-optimized interactions
- Optimized font sizes and spacing
- Fast loading times

## ⚡ Performance Tips

1. **Optimize Images**: Compress profile picture before uploading
2. **Use WebP**: Convert images to WebP for better compression
3. **Enable Caching**: GitHub Pages does this automatically
4. **Minify Files**: For production, minify CSS and JS

## 🔧 Troubleshooting

### Profile picture not showing?
- Check file path in `index.html` matches your file location
- Ensure image is in `assets/profile.jpg`
- Clear browser cache

### Site not updating?
- GitHub Pages can take 5-10 minutes to update
- Clear browser cache
- Try incognito/private window

### Custom domain not working?
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages settings

## 📄 License

This is a personal portfolio template. Feel free to use and modify for your own portfolio.

## 💬 Support

For issues or questions:
- Open an issue on GitHub
- Contact via email

---

Built with ❤️ using HTML, CSS, and JavaScript
