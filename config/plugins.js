module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: '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',
        },
        settings: {
            defaultFrom: 'leads@a-vantageinternational.com',
            defaultReplyTo: 'leads@a-vantageinternational.com',
        },
    },
});