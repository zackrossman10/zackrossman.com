$(document).ready( () => {
  $('.pic').on('mouseenter', event => {
    $(event.currentTarget).addClass('front');
    $(event.currentTarget).siblings().css('opacity', '0.4');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('front');
    $(event.currentTarget).siblings().css('opacity', '1');
  });

  $('.professional').on('mouseenter', event => {
    animationOn('.professional .botslider, .professional .topslider')
  }).on('mouseleave', event => {
    animationOff()
  });

  $('.academic').on('mouseenter', event => {
    animationOn('.academic .botslider, .academic .topslider')
  }).on('mouseleave', event => {
    animationOff()
  });

  $('.athletic').on('mouseenter', event => {
    animationOn('.athletic .botslider, .athletic .topslider')
  }).on('mouseleave', event => {
    animationOff()
  });

  $('.personal').on('mouseenter', event => {
    animationOn('.personal .botslider, .personal .topslider')
  }).on('mouseleave', event => {
    animationOff()
  });
});

function animationOn(value){
  $(value).animate({
    width: $('h5').width()
  }, 150);
};

function animationOff(){
  $('.botslider, .topslider').animate({
    width: '0'
  }, 150);
};
