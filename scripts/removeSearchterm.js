define(['jquery'], function($){
  var input = $('[name="tx_kesearch_pi1[sword]"]');
  var form = input.parents('form');

  form.submit(function(e){
    var inputValue = $(this).find('[name="tx_kesearch_pi1[sword]"]').val();

    if (!inputValue.length) {
      input.attr('name', '');
    }
  })
});