$(document).ready(initEvents);
function initEvents() {
    $('#registro').on('show.bs.modal', function (e) {
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });
    $('#registro').on('hide.bs.modal', function (e) {
        $('html, body').css({
            'overflow': 'auto',
            'height': 'auto'
        });
    });
}