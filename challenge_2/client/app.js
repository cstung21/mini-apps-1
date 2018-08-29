// $(document).ready(function() {
  
//   $(".form").submit(function(event) {
//     event.preventDefault();
//     let $body = $(".textarea").val();
//     $(".textarea").val(''); 
//     console.log('body', $body);
    
//     $.ajax({
//       url: 'http://localhost:3000/csv',
//       method: 'POST',
//       data: JSON.stringify({$body}),
//       contentType: 'application/json',
//       error: () => {
//         console.log('error occurred for ajax post req');
//       },
//       success: () => {
//         console.log('ajax post req successful');
//       }
//     });
//   });

// });

//refactored
var app = {

  init: () => {
    $(".form").submit(function(event) {
      event.preventDefault();
      var $text = $(".textarea").val();
      $(".textarea").val('');
      app.initiateAjaxPost($text);
    });
  },

  initiateAjaxPost: (input) => {
    $.ajax({
      url: 'http://localhost:3000/csv',
      method: 'POST',
      data: JSON.stringify({input}),
      contentType: 'application/json',
      error: () => {
        console.log('error occurred for ajax post req');
      },
      success: () => {
        console.log('ajax post req successful');
      }
    });
  }
};


$(document).ready(function() {
  app.init();
});


