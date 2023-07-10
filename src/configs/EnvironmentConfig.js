const dev = {
  API_ENDPOINT_URL: 'http://localhost:5000/',
  // API_ENDPOINT_URL: 'http://localhost:3001/',
  // API_ENDPOINT_URL: process.env.NEXT_PUBLIC_API_ENDPOINT_URL,
  API_ENDPOINT_URL_FILE: process.env.NEXT_PUBLIC_API_ENDPOINT_URL_FILE,

  GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
};

const prod = {
  // API_ENDPOINT_URL: 'https://api.prod.com'
  API_ENDPOINT_URL: process.env.NEXT_PUBLIC_API_ENDPOINT_URL,
  API_ENDPOINT_URL_FILE: process.env.NEXT_PUBLIC_API_ENDPOINT_URL_FILE,
  GOOGLE_API_KEY:  process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  SENDGRID_API_KEY:  process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
};

const test = {
  API_ENDPOINT_URL: 'https://api.test.com'
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return dev
    case 'production':
      return prod
    case 'test':
      return test
    default:
      break;
  }
}

export const env = getEnv()
