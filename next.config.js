const isProd = process.env.NODE_ENV === 'production'
 
module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,

  productionBrowserSourceMaps: true 
}

module.exports = {
  env: {
    customKey: process.env.NEXT_PUBLIC_MONGO_URL, // pulls from .env file
  },
  
}




