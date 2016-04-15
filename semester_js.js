$(function(){
  #('a.read_more').click(function(event){
    event.preventDefault();
    $(this).parents('.item').find('.more_text').show();
  });
});
