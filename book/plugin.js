require([
    'jquery',
    'gitbook',
], function ($, gitbook) {
    var setup = function () {
        var $selectors = $('.glossary-term');
        $selectors.each(function() {
            var $this = this;
            var title = $this.attr('title');
            $this.removeAttr('title');
            const instance = new Tooltip($this, {
                title: title,
                trigger: "hover",
            },
            {
                placement: 'left',
                modifiers: {
                    flip: {
                        behavior: ['left', 'bottom', 'top']
                    },
                    preventOverflow: {
                        boundariesElement: $('div.page-inner')[0],
                    },
                },
            });
        })
    };

    gitbook.events.bind('page.change', setup);
});