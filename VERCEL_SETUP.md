# Vercel Setup for Discord OAuth

## 1. Discord Developer Portal Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Select your application
3. Go to "OAuth2" → "General"
4. Add Redirect URIs:
   - For local development: `http://localhost:5174/discord-callback`
   - For Vercel: `https://your-vercel-app.vercel.app/discord-callback`
5. Under "OAuth2 URL Generator", select scopes:
   - `identify`
   - `email`

## 2. Vercel Environment Variables

### Option A: Using Vercel Dashboard

1. Go to your Vercel project
2. Go to "Settings" → "Environment Variables"
3. Add these variables:
   ```
   VITE_DISCORD_CLIENT_ID=1525607998846800102
   VITE_DISCORD_CLIENT_SECRET=Jmfp9YaKGIZWUnmcq5onv-tsePmv35Ew
   ```
4. Select environments: Production, Preview, Development
5. Click "Save"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Set environment variables
vercel env add VITE_DISCORD_CLIENT_ID
# Enter: 1525607998846800102
# Select: Production, Preview, Development

vercel env add VITE_DISCORD_CLIENT_SECRET
# Enter: Jmfp9YaKGIZWUnmcq5onv-tsePmv35Ew
# Select: Production, Preview, Development
```

### Option C: Using .env.local (for local development)

Create `.env.local` in project root:
```
VITE_DISCORD_CLIENT_ID=1525607998846800102
VITE_DISCORD_CLIENT_SECRET=Jmfp9YaKGIZWUnmcq5onv-tsePmv35Ew
```

## 3. Deploy to Vercel

### If already connected to Vercel:
```bash
# Push changes to Git
git add .
git commit -m "Add Discord OAuth integration"
git push

# Vercel will auto-deploy
```

### If not connected:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 4. Important Notes

- **Client Secret is safe in Vercel** - Vercel environment variables are secure
- **Redirect URI must match exactly** - check for http/https and trailing slashes
- **Vercel provides HTTPS automatically** - no need for SSL configuration
- **.env.local is for local only** - don't commit it to Git
- **.env is ignored by Git** - already in .gitignore

## 5. Testing

### Local Testing:
1. Make sure `.env.local` exists with your credentials
2. Run: `npm run dev`
3. Go to `http://localhost:5174`
4. Test Discord connection

### Production Testing:
1. Deploy to Vercel
2. Add Vercel URL to Discord Developer Portal Redirect URIs
3. Test on production URL

## 6. Troubleshooting

### "Invalid Redirect URI" Error
- Make sure the redirect URI in Discord matches exactly
- Check for http vs https
- Verify no trailing slashes

### "Unauthorized" Error
- Verify Client ID and Client Secret are correct
- Check that environment variables are set in Vercel
- Make sure variables are selected for all environments

### Environment Variables Not Working
- Vite requires `VITE_` prefix for client-side variables
- Make sure variables are set in Vercel Dashboard
- Redeploy after adding variables

## 7. Security Best Practices

- Never commit `.env.local` to Git
- Use Vercel environment variables for secrets
- Rotate Client Secret if compromised
- Limit OAuth scopes to only what you need
- Regularly review connected Discord applications
