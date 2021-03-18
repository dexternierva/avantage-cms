module.exports = ({ env }) => ({
	url: env('STRAPI_URL'),
	admin: { url: "/admin" },
	url: env('PUBLIC_URL', 'https://avantage-cms-hobb4.ondigitalocean.app/api'),
});