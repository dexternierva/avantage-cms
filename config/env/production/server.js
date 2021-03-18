module.exports = ({ env }) => ({
	url: env('STRAPI_URL'),
	admin: { url: "/api/admin" }
});