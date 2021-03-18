module.exports = ({ env }) => ({
	url: env('STRAPI_URL'),
	admin: env('ADMIN_URL')
});