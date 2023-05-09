define(['jquery', 'cookieJs'], function($, Cookies) {
    var referrerCookie = Cookies.get('referrer', {path: '/'});

    if (!referrerCookie) {
        var value = setReferrerValue();

        if (value) {
            Cookies.set('referrer', value, {expires: 365, path: '/'});
        }
    }

    function setReferrerValue() {
        var value = {};

        if (findGetParameter('ref')) {
            // Email, Other
            value['ref'] = findGetParameter('ref');
        }
        if (findGetParameter('gclid')) {
            // Paid Search, Display
            value['gclid'] = findGetParameter('gclid');
        }
        if (document.referrer){
            // Organic Search, Direct, Referral, Social
            value['HTTP_REFERER'] = document.referrer;
        }

        if (findGetParameter('utm_source')) {
            value['utm_source'] = findGetParameter('utm_source');
        }

        if (findGetParameter('utm_medium')) {
            value['utm_medium'] = findGetParameter('utm_medium');
        }

        if (findGetParameter('utm_campaign')) {
            value['utm_campaign'] = findGetParameter('utm_campaign');
        }

        if (findGetParameter('utm_content')) {
            value['utm_content'] = findGetParameter('utm_content');
        }

        if (findGetParameter('utm_term')) {
            value['utm_term'] = findGetParameter('utm_term');
        }

        if (Object.keys(value).length <= 1) {
            return value[Object.keys(value)[0]];
        }

        return value;
    }

    function findGetParameter(parameterName) {
        var result = null,
          tmp = [];
        location.search
          .substr(1)
          .split("&")
          .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
          });
        return result;
    }
});