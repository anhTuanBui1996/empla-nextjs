/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    AIRTABLE_BASEID: "app2AtStD6p9bWXgP",
    AIRTABLE_APIKEY:
      "patEDP0p9erQ4fhWC.cbb39dbe8c8ee4a8ae74a706de079e12ab5a1fe23e876d953c1d5c2c05edf620",
    NEXTAUTH_SECRET: "rztetUTj+FZFvgJpKcJB+reNwalimErbuOXa0JJ4xJo=",
    NEXTAUTH_URL: "http://localhost:3000/api/auth",
  },
};

module.exports = nextConfig;
