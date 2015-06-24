$(document).ready(function() {
  $('.pricing-wrapper').on('click', function(e) {
    e.preventDefault();
    var price;
    var klass = $(e.target).attr('class');

    if (klass === 'pricing-package') {
      price = $(e.target).find('.pricing').text().trim();
    } else {
      price = $(e.target).parent().find('.pricing').text().trim();
    }
    alert(price + ' withdrawn from your space account');
  });
});