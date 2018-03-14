
(function () {

  // alert('hello,world');

  window.MathJax = {
    showProcessingMessages: false,
    rmessageStyle: 'none',
    tex2jax: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
      processEscapes: true
    },
    'fast-preview': {
      disabled: true
    },
    SVG: {
      linebreaks: {automatic: true, width: '80%container'}
    },
    'HTML-CSS': {
      linebreaks: {automatic: true, width: '80%container'}
    },
    CommonHTML: {
      linebreaks: {automatic: true, width: '80%container'}
    }
  }

  var script = document.createElement('script');
  script.type="text/javascript";
  script.src = './node_modules/mathjax/MathJax.js?config=TeX-MML-AM_CHTML-full'
  document.head.appendChild(script)
})()

