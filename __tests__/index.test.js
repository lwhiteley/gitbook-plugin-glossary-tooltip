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

describe('http verb', function () {
    it('should create get by default', function () {
        return tester.builder()
            .withContent('{% httpverb %}/api/users/`id`{% endhttpverb %}')
            .withLocalPlugin(localPluginPath)
            .withBookJson({
                gitbook: pkg.engines.gitbook,
            })
            .create()
            .then(function (result) {
                const html = minifyHtml(result[0].content);
                expect(html).to.include('<span class="gbhv-verb gbhv-get"');
            });
    });
    it('should parse path text to markdown', function () {
        return tester.builder()
            .withContent('{% httpverb %}/api/users/`id`{% endhttpverb %}')
            .withLocalPlugin(localPluginPath)
            .withBookJson({
                gitbook: pkg.engines.gitbook,
            })
            .create()
            .then(function (result) {
                const html = minifyHtml(result[0].content);
                expect(html).to.include('/api/users/<code>id</code>');
            });
    });

    it('should add style to http verb', function () {
        return tester.builder()
            .withContent('{% httpverb %}/api/users/`id`{% endhttpverb %}')
            .withLocalPlugin(localPluginPath)
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                pluginsConfig: {
                    'http-verb': {
                        styles: {
                            get: {
                                background: '#fff',
                                color: '#000'
                            }
                        }
                    }
                }
            })
            .create()
            .then(function (result) {
                const html = minifyHtml(result[0].content);
                expect(html).to.include('style="background: #fff; color: #000"');
            });
    });

});