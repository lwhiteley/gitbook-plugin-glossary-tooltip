const get = require('lodash/get');
const trim = require('lodash/trim');
const toStyleString = require('to-style').string

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

                const verb = trim(get(block, 'kwargs.verb', '') || get(block, 'args[0]', '') || 'get');
                const style = toStyleString(get(opts, `styles.${verb}`));

                return this.renderBlock('markdown', trim(block.body || '')).then((str) => {
                    return minifyHtml(`
                        <div class="gbgt-verbpath">
                            <span class="gbgt-verb gbhv-${verb.toLowerCase()}"${style ? ` style="${style}"` : ''}>
                                ${verb.toUpperCase()}
                            </span>
                            <span class="gbgt-path">${str}</span>
                        </div>
                    `);
                })
            }
        }
    },
};
