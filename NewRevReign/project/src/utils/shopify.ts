import Client from 'shopify-buy';

const domain = import.meta.env.VITE_SHOPIFY_DOMAIN || '';
const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || '';

// Only create the client if we have both domain and token
const shopifyClient = (domain && token)
  ? Client.buildClient({
      domain, 
      storefrontAccessToken: token
    })
  : null;

export default shopifyClient;