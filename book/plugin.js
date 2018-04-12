require([
    'jquery',
    'gitbook',
], function ($, gitbook) {
    var self = self || {};
    var setup = function () {
        var $selectors = $('.glossary-term');
        $selectors.each(function() {
            var $this = this;
            const instance = new Tooltip($this, {
                title: $this.attr('title'),
                trigger: "hover",
            });
        })
    };

    gitbook.events.bind('page.change', setup);
    return self;
});