GitBook Http Verb Plugin
==============

[![npm version](https://badge.fury.io/js/gitbook-plugin-http-verb.svg)](https://badge.fury.io/js/gitbook-plugin-http-verb)
[![Build Status](https://travis-ci.org/lwhiteley/gitbook-plugin-http-verb.svg?branch=master)](https://travis-ci.org/lwhiteley/gitbook-plugin-codegroup)

## Add Plugin

book.json
```js
{
    "plugins": ["http-verb"]
}
```

then run
```bash
$ gitbook install
```

### Configure (Optional Step)

book.json
```js
"pluginsConfig": {
    "http-verb":{
        "styles": {
            "get": {
                "background": "#fff"
            }
        },
    }
}
```

### Config Options:
| Option | Description |
| ------------- | ------------- |
| styles {object} <br> **default**: `null` | an object map of styles for each http verb. see example above on how to define.  |

## Template

<pre>
<code>
{% httpverb %} /api/users/`id` {% endhttpverb %}
</code>
</pre>

##### Args

`httpverb` takes an optional named/unnamed argument: 

- `verb` (`string`): the http verb to display . eg. `get`, `put` and other [http verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). Default: `get`

**examples**:
<pre>
<code>
{% httpverb "post" %} /api/users/`id` {% endhttpverb %}
{% httpverb verb="patch" %} /api/users/`id` {% endhttpverb %}
</code>
</pre>

### Sample output

![output](https://i.imgur.com/mGn2ddi.png)

Pull requests are welcome



