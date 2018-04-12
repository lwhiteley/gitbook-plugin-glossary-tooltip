GitBook Glossary Tooltip Plugin
==============

A plugin that uses [tooltipjs](https://popper.js.org/tooltip-examples.html) to automatically transform glossary items into tooltips instead of seeing the default browser title attribute on hover.

[![npm version](https://badge.fury.io/js/gitbook-plugin-glossary-tooltip.svg)](https://badge.fury.io/js/gitbook-plugin-glossary-tooltip)
[![Build Status](https://travis-ci.org/lwhiteley/gitbook-plugin-glossary-tooltip.svg?branch=master)](https://travis-ci.org/lwhiteley/gitbook-plugin-glossary-tooltip)

## Add Plugin

book.json
```js
{
    "plugins": ["glossary-tooltip"]
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
    "glossary-tooltip":{
        "parseGlossaryItems": false,
    }
}
```

### Config Options:
| Option | Description |
| ------------- | ------------- |
| `parseGlossaryItems` {Boolean} <br> **default**: `true` | tells the plugin whether to apply tooltips to glossary items or not  |
| `trigger` {string} <br> **default**: `hover` | the event that triggers the tooltip. one of ['hover', 'click', 'focus']  |


## Template

You can also place your own tooltip in your markdown

##### Args

`tooltip` takes one required named/unnamed argument: 

- `topic` (`string`): the http verb to display . This is required to display text in the tooltip trigger element.

**example**:
<pre>
<code>
{% tooltip "sample tooltip" %} sample tooltip test with **Emphasis** {% endtooltip %}
</code>
</pre>

### Sample output

![output](https://i.imgur.com/Ug5MEEf.png)

Pull requests are welcome



