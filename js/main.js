$(function(){
  $(document).keypress(function(e) {
    cwrite(e.which,'Keypress event');
    if(e.which==120) custom_dialog_toggle('Keypress x','You opened this window by pressing x');
  });
});
function custom_dialog_toggle(title,text,buttons) {
  if(typeof title !=='undefined') $('#dlg-header').html(title);
  if(typeof text !=='undefined') $('#dlg-content').html(text);
  cwrite('Current state: '+$('#dialog_state').prop("checked"),'custom_dialog_toggle');
  $('#dialog_state').prop("checked", !$('#dialog_state').prop("checked"));
}
// Console logging function for debugging
// cwrite(str, title)
//      str:              string to be appended to console
//      title (optional): title of the string
// (c)  Tuomas Hatakka 2015
//      http://tuomashatakka.fi
function cwrite(str,title) {
  var ce = $('#console');
  var sg = "<p>";
  if(typeof title !=='undefined') sg = sg+"<em>"+title+"</em> ";
  sg = sg+str+"</p>";
  ce.prepend(sg);
  //if(ce.children("p").length>6) ce.children("p").first().remove();
}



var current = null;
document.querySelector('#name').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '230 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -370,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '230 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#tel').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -703,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '230 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -1118,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '510 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});