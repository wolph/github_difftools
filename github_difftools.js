// ==UserScript==
// @name           GitHub Compare Tags
// @namespace      github_compare_tags
// @description    Creates links to compare tags with each other
// @include        http://github.com/*/*/tags
// @include        https://github.com/*/*/tags
// ==/UserScript==

jQuery(function($){
    $('a[title="Last commit for this tag"]').prepend('<input type="checkbox" class="compare">').change(function(){
        var a, b;
        var checkboxes = $('input.compare:checked');
        if(checkboxes.length == 2){
            a = $(checkboxes[1].parentNode).text();
            b = $(checkboxes[0].parentNode).text();
            window.location = 'https://github.com/Fashiolista/Fashiolista/compare/' + a + '...' + b;
        }
    });

});
