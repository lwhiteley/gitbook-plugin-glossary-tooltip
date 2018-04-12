const path = require('path');
const tester = require('gitbook-tester');
const { expect } = require('chai');

const pkg = require('../package.json');
const localPluginPath = path.join(__dirname, '..');

function minifyHtml(content) {
    return content
        .replace(/\r?\n|\r/g, '')
        .replace(/[\t ]+\</g, "<")
        .replace(/\>[\t ]+\</g, "><")
        .replace(/\>[\t ]+$/g, ">");
}

describe('glossary tooltip', function () {
    it('should parse path text to markdown', function () {
        return tester.builder()
            .withContent('{% tooltip %}This is what an id looks like in code `id`{% endtooltip %}')
            .withLocalPlugin(localPluginPath)
            .withBookJson({
                gitbook: pkg.engines.gitbook,
            })
            .create()
            .then(function (result) {
                const html = minifyHtml(result[0].content);
                expect(html).to.include('title="&lt;p&gt;This is what an id looks like in code&lt;code&gt;id&lt;/code&gt;&lt;/p&gt;"');
            });
    });

});