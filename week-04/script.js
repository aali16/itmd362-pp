WebFontConfig = {
      google: { families: ['Open Sans'],
        urls: ['https://fonts.googleapis.com/css?family=Open+Sans']
      },
      timeout: 2000
    };
    (function(f) {
      var wf = f.createElement('script'), s = f.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
      s.parentNode.insertBefore(wf, s);
    })(document);
