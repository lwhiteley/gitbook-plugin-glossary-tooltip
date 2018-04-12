require([
    'jquery',
    'gitbook',
], function ($, gitbook) {
    var setup = function () {
        var opts = {
            parseGlossaryItems: true,
            trigger: 'hover',
        };
        var selectors = '.gbgt-tooltip';
        var glossarySelector = '.glossary-term';
        try {
            opts = $.extend(opts, gitbook.state.config.pluginsConfig['glossary-tooltip']);
        } catch (e) {}

        if (opts.parseGlossaryItems) {
            selectors = selectors + ',' + glossarySelector;
        }
        
        var $selectors = $(selectors);
        $selectors.each(function() {
            var $this = $(this);
            var title = $this.attr('title');
            $this.removeAttr('title');
            const instance = new Tooltip(this, {
                title: title,
                html: true,
                trigger: /hover|click|focus/.test(opts.trigger) ? opts.trigger : 'hover',
                placement: 'left',
                modifiers: {
                    flip: {
                        behavior: ['left', 'bottom', 'top']
                    },
                    preventOverflow: {
                        boundariesElement: $('div.page-inner'),
                    },
                },
            });
        })
    };

    gitbook.events.bind('page.change', setup);
});