/*global $,hljs*/
/* eslint-env browser */
'use strict';
var comments = document.getElementById('disqus_thread');
var disqusLoaded = false;

var prompt = '<span class="bash-prompt">$ </span>';

$('code.language-bash, code.language-sh, code.language-shell').each(function() {
  var el = this;

  el.innerHTML = el.textContent
    .split('\n') // break into individual lines
    .map(function(line) {
      return line.replace(/^\$ /, prompt);
    })
    .join('\n'); // join the lines back up
});

function loadDisqus() {
  var dsq = document.createElement('script');
  dsq.type = 'text/javascript';
  dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js'; // jshint ignore:line
  (
    document.getElementsByTagName('head')[0] ||
    document.getElementsByTagName('body')[0]
  ).appendChild(dsq);
  disqusLoaded = true;
}

//Get the offset of an object
function findTop(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent)); // jshint ignore:line
    return curtop;
  }
}

function flickrURL(photo) {
  return (
    'https://farm' +
    photo.farm +
    '.staticflickr.com/' +
    photo.server +
    '/' +
    photo.id +
    '_' +
    photo.secret +
    '_q.jpg'
  );
}

function loadFlickr() {
  $.getJSON(
    'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=ac349179dc54279b846089f60586c263&user_id=38257258%40N00&per_page=12&format=json&jsoncallback=?',
    function(data) {
      var photos = data.photos.photo;
      var total = 9;

      var $ul = $('ul.flickr');

      photos.forEach(function(photo) {
        var img = new Image();
        img.src = flickrURL(photo);
        img.onload = function() {
          if (total === 0) {
            return;
          }

          total--;
          var $link = $(
            '<a title="' +
              photo.title +
              '" href="http://www.flickr.com/photos/remysharp/' +
              photo.id +
              '">'
          ).append(this);

          $('<li>')
            .append($link)
            .appendTo($ul);
        };
      });
    }
  );
}

if (window.location.hash.indexOf('#comments') > 0) {
  loadDisqus();
}

var searchOpen = false;
$('#search').on('click', function(e) {
  e.preventDefault();
  searchOpen = false;
  if (
    $('form.search')
      .toggleClass('show')
      .hasClass('show')
  ) {
    $('form.search:first input[type="text"]').focus();
    searchOpen = true;
  } else {
    $('form.search:first input[type="text"]').blur();
  }
});

$('body').on('keydown', function(event) {
  if (event.which === 80 && event.altKey) {
    localStorage.plain = localStorage.plain == 1 ? 0 : 1;
    if (localStorage.plain == 1) {
      $('head').append('<link rel="stylesheet" href="/css/plain.css">');
    } else {
      $('link[href="/css/plain.css"]').remove();
    }
  }
  if (searchOpen && event.which === 27) {
    $('#search').click();
  } else if (event.which === 191 && event.metaKey) {
    // ignore if we're in a form
    if (event.target.form) {
      return;
    }

    $('#search').click();
  }
});

// try {
//   if (localStorage.plain) {
//     $('head').append('<link rel="stylesheet" href="/css/plain.css">');
//   }
// } catch (e) {}

if (comments) {
  loadDisqus();
  var commentsOffset = findTop(comments);

  window.onscroll = function() {
    if (!disqusLoaded && window.pageYOffset > commentsOffset - 1500) {
      loadDisqus();
    }
  };
}

if ($('#index-page').length) {
  loadFlickr();
}

var $edit = $('small.edit').remove();
if ($edit.length) {
  // this is daft, but it prevents Google from including [edit] in the
  // post title...
  var $h1 = $('h1:first').hover(
    function() {
      $h1.append($edit);
    },
    function() {
      $edit.remove();
    }
  );
}

$('.post').fitVids();

// sorry, knarly and lazy code, but it does the job.
$('.runnable').each(function() {
  var button = $('<button class="button">run</button>');
  var pre = this;
  var iframe = null;
  $(this).after(button);
  var running = false;
  button.on('click', function() {
    // dear past Remy: why do you mix jQuery with vanilla DOM scripting?
    // Well…because vanilla is habbit, jQuery is just here as a helper.
    var code = pre.innerText;
    if (iframe || running) {
      iframe.parentNode.removeChild(iframe);
    }
    if (running) {
      button.text('run');
      iframe = null;
      running = false;
      return;
    }
    running = true;
    button.text('stop');
    iframe = document.createElement('iframe');
    iframe.className = 'runnable-frame';
    document.body.appendChild(iframe);
    iframe.contentWindow.eval(code);
  });
});
