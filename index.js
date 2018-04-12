const trim = require('lodash/trim');
const get = require('lodash/get');

function minifyHtml(content) {
    return content
        .replace(/\r?\n|\r/g, '')
        .replace(/[\t ]+\</g, "<")
        .replace(/\>[\t ]+\</g, "><")
        .replace(/\>[\t ]+$/g, ">");
}

module.exports = {

    // Extend ebook resources and html
    website: {
        assets: './book',
        js: [
            'https://unpkg.com/popper.js/dist/umd/popper.min.js',
            'https://unpkg.com/tooltip.js/dist/umd/tooltip.min.js',
            'plugin.js'
        ],
        css: [
            'plugin.css'
        ],
    },
    book: {
        assets: './book',
        js: [
            'https://unpkg.com/popper.js/dist/umd/popper.min.js',
            'https://unpkg.com/tooltip.js/dist/umd/tooltip.min.js',
            'plugin.js'
        ],
        css: [
            'plugin.css'
        ],
    },

    ebook: {
        assets: './book',
        css: [
            'plugin.css'
        ],
    },

    // Extend templating blocks
    blocks: {
        tooltip: {
            process: function (block) {
                const ctx = this;
                const opts = ctx.book.config.get('pluginsConfig.glossary-tooltip');
                const topic = trim(get(block, 'kwargs.topic', '') || get(block, 'args[0]', '') || 'get');

                return this.renderBlock('markdown', trim(block.body || '')).then((str) => {
                    return minifyHtml(`
                        <a class="gbgt-tooltip" title="${str}">
                            ${topic}
                        </a>
                    `);
                })
            }
        }
    },
};
