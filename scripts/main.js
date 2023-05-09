var extPath = '/typo3conf/ext/';
var bowerPath = extPath + 'eder_template/bower_components/';
var templateResourcesPublic = extPath + 'eder_template/Resources/Public/JavaScript/';
var jsModulePath = templateResourcesPublic + 'modules/';
var jsLibsPath = templateResourcesPublic + 'libs/';

require.config({
  baseUrl: '/typo3conf/ext',
  paths: {
    webFont: 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont',
    gMaps: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCIeS9Ek02ZTMXqPdeN_WUH8yAcc7KtT9M',
    overlappingMarker: jsLibsPath + 'overlappingMarkerSpiderfier',
    jquery: 'https://code.jquery.com/jquery-2.2.4.min',
    jqueryUi: 'https://code.jquery.com/ui/1.11.4/jquery-ui.min',
    jqueryUiTouch: jsLibsPath + 'jquery.ui.touch-punch.min',
    bootstrap: 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
    matchHeight: bowerPath + 'matchHeight/dist/jquery.matchHeight-min',
    slickLib: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min',
    flexsliderLib: jsLibsPath + 'jquery.flexslider.min',
    owlcarouselLib: jsLibsPath + 'owl.carousel.min',
    lightbox: jsLibsPath + 'lightbox.min',
    masonry: jsLibsPath + 'masonry.min',
    sortElements: jsLibsPath + 'jquery.sortElements.min',
    fancyBoxLib: jsLibsPath + 'jquery.fancybox.min',
    fancyBoxThumbs: jsLibsPath + 'jquery.fancybox-thumbs.min',
    scrollTo: jsLibsPath + 'jquery.scrollTo.min',
    cookieJs: jsLibsPath + 'js.cookie',
    selectWidget: jsLibsPath + 'select-widget.min',
    parsley: jsLibsPath + 'parsley.min',
    imageMarker: jsLibsPath + 'jquery.imageMarker',
    lazyloadLib: 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min',
    domReady: jsLibsPath + 'domReady',
    jqueryFiler: jsLibsPath + 'jquery.filer',

    linkedRows: extPath + 'twofour_productlisting/Resources/Public/js/linkedrows',
    assignedCategories: extPath + 'twofour_productlisting/Resources/Public/js/assigned-categories',
    prefillRequestForm: extPath + 'twofour_productlisting/Resources/Public/js/prefill-request-form',
    powermailCond: extPath + 'powermail_cond/Resources/Public/JavaScript/PowermailCondition.min',
    powermailTabs: extPath + 'powermail/Resources/Public/JavaScript/Powermail/Tabs.min',
    powermailForm: extPath + 'powermail/Resources/Public/JavaScript/Powermail/Form.min',

    popUp: extPath + 'popup/Resources/Public/JavaScript/popup',

    general: jsModulePath + 'general',
    calculateHeights: jsModulePath + 'calculateHeights',
    linkableArea: jsModulePath + 'linkableArea',
    offCanvasMenu: jsModulePath + 'offCanvasMenu',
    ederSearch: jsModulePath + 'eder_search',
    footer: jsModulePath + 'footer',
    flexslider: jsModulePath + 'flexslider',
    anchorMenu: jsModulePath + 'anchorMenu',
    uploadButtonApplication: jsModulePath + 'uploadButtonApplication',
    locationAutocomplete: jsModulePath + 'location-autocomplete',
    powermailAutocomplete: jsModulePath + 'powermail-autocomplete',
    categoryFilter: jsModulePath + 'category-filter',
    marktWidget: jsModulePath + 'markt-widget',
    stickyFooter: jsModulePath + 'sticky-footer',
    referrerValue: jsModulePath + 'referrer-value',
    newsApi: jsModulePath + 'news-api',
    dynamicJobvalues: jsModulePath + 'dynamic-jobvalues',
    jobsContentelementLocation: jsModulePath + 'jobs-contentelement-location',
    changeSelectDropdownAppearance: jsModulePath + 'changeSelectDropdownAppearance',
    multipleSelectDropdown: jsModulePath + 'multipleSelectDropdown',
    eventModul: jsModulePath + 'eventModul',
    slick: jsModulePath + 'slick',
    owlcarousel: jsModulePath + 'owlcarousel',
    addMarker: jsModulePath + 'addMarker',
    fitBounds: jsModulePath + 'fitBounds',
    gmapContact: jsModulePath + 'gmapContact',
    contactSearch: jsModulePath + 'contactSearch',
    traktorFilter: jsModulePath + 'traktorFilter',
    getQueryVariable: jsModulePath + 'getQueryVariable',
    powermailFuncs: jsModulePath + 'powermailFuncs',
    smoothScroll: jsModulePath + 'smoothScroll',
    fancyBox: jsModulePath + 'fancyBox',
    profiSectionFilter: jsModulePath + 'profiSectionFilter',
    gmapProfi: jsModulePath + 'gmapProfi',
    lazyload: jsModulePath + 'lazyload',
    scrollNext: jsModulePath + 'scrollNext',
    removeSearchterm: jsModulePath + 'removeSearchterm',
    datePolyfill: jsModulePath + 'datePolyfill',
    jobTracking: jsModulePath + 'jobTracking',
    jobTrackingDataLayer: jsModulePath + 'jobTrackingDataLayer',
    produktvarianten: jsModulePath + 'produktvarianten',
  },
  shim: {
    // dependencies
    bootstrap: ['jquery'],
    jqueryUi: ['jquery'],
    jqueryUiTouch: ['jqueryUi'],
    slick: ['jquery'],
    flexsliderLib: ['jquery'],
    owlcarouselLib: ['jquery'],
    masonry: ['jquery'],
    sortElements: ['jquery'],
    parsley: ['jquery'],
    lightbox: ['jquery'],
    overlappingMarker: ['gMaps', 'jquery'],
    linkedRows: ['jquery'],
    assignedCategories: ['jquery'],
    prefillRequestForm: ['jquery'],
    imageMarker: ['jquery'],
    powermailCond: ['jquery'],
    powermailTabs: ['jquery'],
    powermailForm: ['jquery', 'powermailTabs'],
    selectWidget: ['jquery', 'jqueryUi'],
    jqueryFiler: ['jquery']
  }
});

function hasDateSupport() {
  var i = document.createElement("input");
  i.setAttribute("type", "date");
  return i.type !== "text";
}

function selectorExists(selector) {
    return document.querySelector(selector) !== null;
}

function watchSelector(selector) {
    if(window.IntersectionObserver) {
        return new Promise(function(resolve) {
            var observer = new IntersectionObserver(function(entries, observer) {

                var intersect = entries.some(function(entry) {
                    return entry.isIntersecting;
                });

                if(!intersect) {
                    return;
                }
                observer.disconnect();
                resolve(entries);
            });
            var elements = document.querySelectorAll(selector);

            elements.forEach(function(element) {
                observer.observe(element);
            });
        });
    }
    return new Promise(function(resolve) {
        if(selectorExists(selector)) {
            resolve();
        }
    });
}

function asyncCss(id) {
    var element = document.getElementById(id);
    if (element !== null) {
        element.href = element.dataset.href;
        element.media = 'all';
    }
}

require(['bootstrap']);
require(['referrerValue']);
require(['popUp']);

if (selectorExists('[type="date"]') && !hasDateSupport()) {
  require(['datePolyfill']);
}

watchSelector('[name="tx_kesearch_pi1[sword]"]').then(function() {
    require(['removeSearchterm']);
});

watchSelector('.fa').then(function() {
    asyncCss('css-fontawesome');
});

watchSelector('.area-link, .angebot-item, .news-homepage .article, .home-new').then(function() {
    require(['linkableArea']);
});

// Tooltips
watchSelector('[data-toggle="tooltip"]').then(function() {
    require(['jquery', 'jqueryUi'], function($) {
        $("[data-toggle='tooltip']").tooltip()
    });
});

if (
  selectorExists('.mp-match') ||
  selectorExists('.card-body') ||
  selectorExists('.element-dce_dceuid24 .tx-dce-pi1') ||
  selectorExists('.element-dce_dceuid15 .tx-dce-pi1') ||
  selectorExists('.product-container .description') ||
  selectorExists('.produktkomponente-card')
) {
  require(['calculateHeights']);
}

watchSelector('[data-toggle="offcanvas"]').then(function() {
    require(['offCanvasMenu']);
});

watchSelector('.xhr-search').then(function() {
    require(['ederSearch']);
});

watchSelector('.footer-menu .nav-level-1.footer > li').then(function() {
    require(['footer']);
});

watchSelector('.testimonial .flexslider, .news-gallery .flexslider').then(function() {
    require(['flexslider']);
});

watchSelector('.anchor-menu a, div[id^="scroll-"], a.anchor-menu, a[href*="#c"]').then(function() {
    require(['anchorMenu']);
});

if(location.hash) {
    require(['anchorMenu']);
}

watchSelector('[type="file"], .uploaded-files').then(function() {
    // require(['uploadButtonApplication']);
});

watchSelector('.contact-search #plz').then(function() {
    require(['locationAutocomplete']);
});

watchSelector('#powermail_field_plz, #powermail_field_ort').then(function() {
    require(['powermailAutocomplete']);
});

watchSelector('.filter-pills.category-filter').then(function() {
    require(['categoryFilter']);
});

watchSelector('.mein-markt').then(function() {
    require(['marktWidget']);
});

watchSelector('.sticky-footer-sizer').then(function() {
    require(['stickyFooter']);
});

watchSelector('#newsapi-searchform').then(function() {
    require(['newsApi']);
});

watchSelector('.filter-location-ajax').then(function() {
    require(['dynamicJobvalues']);
});

watchSelector('.layout-dynamic-contact-person').then(function() {
    require(['jobsContentelementLocation']);
});

watchSelector('.ui-select').then(function() {
    require(['changeSelectDropdownAppearance']);
});

watchSelector('.filter-pills').then(function() {
    require(['multipleSelectDropdown']);
});

watchSelector('.panel a[data-toggle="collapse"]').then(function() {
    require(['jquery'], function($) {
        var element = $('.panel').find('a[data-toggle="collapse"]');
        var firstEl = $(element).first();
        $(firstEl).trigger('click');
    });
});

watchSelector('#amountOfRegistrations, #event-select, .eventmodule-price').then(function() {
    require(['eventModul']);
});

watchSelector('form[data-parsley-validate]').then(function() {
    require(['jquery', 'parsley', 'matchHeight'], function($) {
        var forms = $('form[data-parsley-validate]');

        window.Parsley.on('form:init', function() {
            // $('.news-content, .news-sidebar').matchHeight();
        });

        $(forms).each(function(index, item) {
            var el = $(item).find('.powermail_submit');
            $(item).parsley().on('form:submit', function() {
                $(el).attr('disabled', 'disabled');
            });
        });
    });
});

watchSelector('.slick-slider, .slider-nav').then(function() {
    require(['slick']);
    asyncCss('css-slick');
});

watchSelector('.brand-slider .slides').then(function() {
    console.dir('owlcarousel');
    require(['owlcarousel']);
});

watchSelector('.variant-cards').then(function() {
    require(['produktvarianten']);
});

watchSelector('a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]').then(function() {
    require(['lightbox'], function(lightbox) {
        lightbox.option({
            'resizeDuration': 250,
            'fadeDuration': 500,
            'wrapAround': true,
            'showImageNumberLabel': false
        });
    });

    asyncCss('css-lightbox');
});

watchSelector('form[name="twofourproductlist"]').then(function() {
    require(['assignedCategories']);
});

watchSelector('.clickable-row').then(function() {
    require(['linkedRows']);
});

watchSelector('[name*="productlistingproducttitle"]').then(function() {
    require(['prefillRequestForm']);
});

watchSelector('#powermail_conditions_container, .powermail_form').then(function() {
    require(['prefillRequestForm']);

    require(['jquery', 'powermailCond', 'powermailForm'], function($) {
        setTimeout(function() {
            $('.powermail_checkbox, .powermail_radio').trigger('change');
        }, 1000);
    });
});

watchSelector('.contact-search, #plz, .shop-accordion, .new-location-trigger, .route-link').then(function() {
    require(['contactSearch']);
});

watchSelector('.map-link, #map-canvas, .shop-accordion').then(function() {
    require(['gmapContact']);
});

watchSelector('.product-filter').then(function() {
    require(['traktorFilter']);
});

watchSelector('.powermail_form').then(function() {
    require(['powermailFuncs']);

    if(window.location.pathname.indexOf('/bewerbung/') === 0) {
        require(['jobTracking']);
    }
});

if (document.cookie.indexOf('job_form_tracking') > -1) {
    require(['jobTrackingDataLayer']);
}

watchSelector('[data-scroll="smooth"]').then(function() {
    require(['smoothScroll']);
});

watchSelector('.fancy-modal').then(function() {
    require(['fancyBox']);
});

watchSelector('.trigger-url').then(function() {
    require(['jquery'], function($) {
        $('.trigger-url').each(function() {
            var target = $(this).data('target');
            var url = $(this).data('url');
            var trigger = $('[data-trigger="' + target + '"]');
            $(trigger).on('click', function() {
                window.open(url, '_blank');
            })
        })
    });
});

watchSelector('.section-filter').then(function() {
    require(['profiSectionFilter']);
});

watchSelector('#map-canvas2').then(function() {
    require(['gmapProfi']);
});

if (selectorExists('.lazy')) {
  require(['lazyload']);
}

watchSelector('.scroll-next').then(function() {
    require(['scrollNext']);
});

watchSelector('.staff-item').then(function() {
    require(['jquery', 'matchHeight'], function($) {
        $('.staff-item:not(:has(.visible-search))').matchHeight();
    });
});

watchSelector('.produktkomponente-card').then(function() {
    require(['jquery', 'matchHeight'], function($) {
        // $('.produktkomponente-card').matchHeight({byRow: false});
        // $('.komponente-image').matchHeight({byRow: false});
        $('.komponente-text').matchHeight({byRow: false});
        $('.komponente-link').matchHeight({byRow: false});
    });
});

if (selectorExists('.powermail_fieldwrap_file [multiple]')) {
    require(['jquery', 'jqueryFiler'], function($) {
        var uploadFields = $('.powermail_fieldwrap_file [multiple]');

        uploadFields.each(function(index,item) {
            var maxUploadSize = $(item).data('parsley-powermailfilesize').split(',')[0] / 1024 / 1024;
            var extensions = $(item).attr('accept').replace(/\./g, '').split(',');

            var parent = $(item).parents('.powermail_fieldwrap_file');
            parent.find('.powermail_label_file').hide();
            $(item).filer({
                showThumbs: true,
                addMore: true,
                allowDuplicates: false,
                maxSize: maxUploadSize * 3,
                fileMaxSize: maxUploadSize,
                extensions: extensions,
                onSelect: function() {
                    $(item).trigger('file-changed')
                },
                captions: {
                    button: "Dateien auswählen",
                    feedback: "Wähle Dateien für den Upload",
                    feedback2: "Gewählte Dateien",
                    drop: "Drop file here to Upload",
                    removeConfirmation: "Willst du diese Datei entfernen?",
                    errors: {
                        filesLimit: "Es sind maximal {{fi-limit}} Dateien zugelassen.",
                        filesType: "Dateityp nicht erlaubt.",
                        filesSize: "{{fi-name}} ist zu groß! Maximal {{fi-fileMaxSize}} MB sind erlaubt.",
                        filesSizeAll: "Gewählte Dateien sind zu groß! Maximal {{fi-maxSize}} MB sind erlaubt.",
                        folderUpload: "Du kannst keine Verzeichnisse hochladen."
                    }
                },
                templates: {
                    box: '<div class="uploaded-files"></div>',
                    item: '<div class="file">\
                        {{fi-name | limitTo: 25}}\
                        <span class="close">X</span>\
                    </div>',
                    itemAppend: '<div class="file">\
                        {{fi-name | limitTo: 25}}\
                        <a class="close">X</a>\
                    </div>',
                    progressBar: '<div class="bar"></div>',
                    itemAppendToEnd: false,
                    removeConfirmation: true,
                    _selectors: {
                        list: '.uploaded-files',
                        item: '.file',
                        progressBar: '.bar',
                        remove: '.close',
                    }
                },
            });
        })

    })
}
