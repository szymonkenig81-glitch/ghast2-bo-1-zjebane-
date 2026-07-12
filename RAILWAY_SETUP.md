# Railway Setup for Discord OAuth

## 1. Discord Developer Portal Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select existing one
3. Go to "OAuth2" → "General"
4. Copy **Application ID** (this is your Client ID)
5. Reset and copy **Client Secret**
6. Add Redirect URIs:
   - For local development: `http://localhost:5174/discord-callback`
   - For Railway: `https://your-railway-app.railway.app/discord-callback`
7. Under "OAuth2 URL Generator", select scopes:
   - `identify`
   - `email`
8. Copy the generated URL for testing

## 2. Railway Setup

### Option A: Using Railway Dashboard

1. Go to your Railway project
2. Select your service
3. Go to "Variables" tab
4. Add these environment variables:
   ```
   VITE_DISCORD_CLIENT_ID=your_actual_client_id
   VITE_DISCORD_CLIENT_SECRET=your_actual_client_secret
   ```

### Option B: Using Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Set environment variables
railway variables set VITE_DISCORD_CLIENT_ID=your_actual_client_id
railway variables set VITE_DISCORD_CLIENT_SECRET=your_actual_client_secret
```

### Option C: Using railway.toml

Create `railway.toml` in your project root:

```toml
[build]
builder = "NIXPACKS"

[env]
VITE_DISCORD_CLIENT_ID = "your_actual_client_id"
VITE_DISCORD_CLIENT_SECRET = "your_actual_client_secret"
```

## 3. Deploy to Railway

```bash
# If using Railway CLI
railway up

# Or connect GitHub repository to Railway for automatic deployments
```

## 4. Important Notes

- **Client Secret should never be exposed** - Railway environment variables are secure
- **Redirect URI must match exactly** - including http/https and trailing slashes
- **For production**, use HTTPS redirect URI
- **Test locally first** with the local redirect URI before deploying

## 5. Troubleshooting

### "Invalid Redirect URI" Error
- Make sure the redirect URI in Discord Developer Portal matches exactly
- Check for trailing slashes or missing http/https

### "Unauthorized" Error
- Verify Client ID and Client Secret are correct
- Check that environment variables are set properly in Railway

### CORS Issues
- Discord OAuth doesn't have CORS issues since it uses redirects
- Make sure your Railway app is publicly accessible

## 6. Security Best Practices

- Never commit `.env` file to Git
- Use Railway's environment variables for secrets
- Rotate your Client Secret if compromised
- Limit OAuth scopes to only what you need
- Regularly review connected Discord applications
