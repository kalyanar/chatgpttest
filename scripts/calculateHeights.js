define(['jquery', 'matchHeight'], function($) {
  // Sprung an Seitenende verhinden, wenn matchHeight aufgerufen wird
  $.fn.matchHeight._maintainScroll = true;

  $('.mp-match').matchHeight();

  $('.card-body').matchHeight();

  $('.element-dce_dceuid24 .tx-dce-pi1 h2').matchHeight({byRow: false});
  $('.element-dce_dceuid24 .tx-dce-pi1 .center-img').matchHeight({byRow: false});
  $('.element-dce_dceuid24 .tx-dce-pi1 .category-text').matchHeight({byRow: false});

  $('.element-dce_dceuid15 .tx-dce-pi1 h2').matchHeight({byRow: false});
  $('.element-dce_dceuid15 .tx-dce-pi1 .center-img').matchHeight({byRow: false});
  $('.element-dce_dceuid15 .tx-dce-pi1 .category-text').matchHeight({byRow: false});

  $('div:not(.flex-column) > .product-container .attributes').matchHeight({byRow: false});
  $('div:not(.flex-column) > .product-container .description').matchHeight({byRow: false});

  $('.produktkomponente-card').matchHeight({byRow: false});
  $('.produktkomponente-card .komponente-image').matchHeight({byRow: false});
});