module.exports = ({ env }) => ({
	url: env('STRAPI_URL'),
	admin: { url: "https://avantage-cms-hobb4.ondigitalocean.app/api" }
});