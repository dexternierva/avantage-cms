'use strict';

/**
* Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
* to customize this controller
*/

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
    * Create a record.
    *
    * @return {Object}
    */

    async create(ctx) {
        let entity;

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.messages.create(data, { files });
        } else {
            entity = await strapi.services.messages.create(ctx.request.body);
        }

        entity = sanitizeEntity(entity, { model: strapi.models.messages });

        // SEND AN EMAIL BY USING THE EMAIL PLUGIN
        await strapi.plugins['email'].services.email.send({
            to: 'info@a-vantageinternational.com',
            from: 'leads@a-vantageinternational.com',
            cc: 'sampaga@a-vantageinternational.com',
            bcc: 'recruitment3@a-vantageinternational.com',
            subject: 'Message From A-vantage Contact Form',
            text: `
                Full Name: ${entity.name}
                Contact Number: ${entity.contact}
                Email: ${entity.email}
                Message/Question: ${entity.message}
            `,
        });

        return entity;
    },
};
