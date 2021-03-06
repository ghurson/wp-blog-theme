/**
 * PRIMARY THEME JAVASCRIPT FILE
 *
 * This is your public-facing, front-end Javascript. It compiles to assets/js/app.min.js in your theme directory.
 *
 * This is used to initialize your custom Javascript. If you would like to change how Foundation and it's plugins are
 * initialized, you can. See http://foundation.zurb.com/docs/javascript.html for documentation.
 */
(function($){

    // Foundation JavaScript
    $(document).foundation({
        equalizer : {
            equalize_on_stack: true,
            act_on_hidden_el: false
        }
    });

})(jQuery);
