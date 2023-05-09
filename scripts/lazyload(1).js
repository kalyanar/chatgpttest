var lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
  callback_loaded: function () {
    try {
      // If Installed - Update Masonry
      $.fn.matchHeight._update();
    } catch (e) {
    }
  },
  // Use Missing-Placeholder
  callback_error: function (el) {
    var defaultOnerror = el.onerror;
    
    el.onerror = function() {
      el.onerror = defaultOnerror;
      el.src = el.dataset.error;
    };
    
    el.src = el.dataset.regular;
  }
});
