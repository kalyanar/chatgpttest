define(['jquery', 'cookieJs'], function($, Cookies){

    var popUpDisabled = Cookies.get('tx_popup_disable', {path: '/'});

    if (!popUpDisabled) {
        $.ajax({
            data: {
                type: 1584812541
            },
            success: function(data) {
                var popUp = $('.popup-overlay', data);

                $('.popup-overlay').remove();
                $('body').append(popUp);

                $('.popup-overlay').click(function(e) {
                    if (e.target === popUp[0]) {
                        removePopup();
                    }
                });

                $('.popup-close, .popup-container a').click(removePopup);

                function removePopup() {
                    var expire = $('.popup-close').data('expire');

                    if (expire > 0) {
                        Cookies.set('tx_popup_disable', 1, {expires: expire, path: '/'});
                    }

                    $('.popup-overlay').remove();
                }
            }
        })
    }
});