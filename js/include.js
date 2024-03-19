$(document).ready(function() {
    $('[data-include-path]').each(function() {
        var includePath = $(this).data('include-path');
        if (includePath) {
            $.get(includePath, function(data) {
                $(this).replaceWith(data);
            }.bind(this));
        }
    });
});