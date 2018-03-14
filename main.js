

window.MathJax = {
  showProcessingMessages: false,
  rmessageStyle: "none",
  tex2jax: {
    inlineMath: [['$', '$'],['\\(', '\\)']],
    processEscapes: true
  },
  "fast-preview": {
    disabled: true
  },
  SVG: {
    linebreaks: {automatic: true, width: "80%container"}
  },
  "HTML-CSS": {
    linebreaks: {automatic: true, width: "80%container"}
  },
  CommonHTML: {
    linebreaks: {automatic: true, width: "80%container"}
  },
  
  AuthorInit: function () {

    // ***Modal**** "Live Demo"
    var Preview = {
      delay: 150, // delay after keystroke before updating
      preview: null, // filled in by Init below
      buffer: null, // filled in by Init below
      timeout: null, // store setTimout id
      mjRunning: false, // true when MathJax is processing
      oldText: null, // used to check if an update is needed
      //  Get the preview and buffer DIV's
      Init: function () {
        this.preview = document.getElementById("MathPreview");
        this.buffer = document.getElementById("MathBuffer");
      },
      //  Switch the buffer and preview, and display the right one.
      //  (We use visibility:hidden rather than display:none since
      //  the results of running MathJax are more accurate that way.)
      SwapBuffers: function () {
        var buffer = this.preview,
          preview = this.buffer;
        this.buffer = buffer;
        this.preview = preview;
        buffer.style.visibility = "hidden";
        buffer.style.position = "absolute";
        preview.style.position = "";
        preview.style.visibility = "";
      },
      //  This gets called when a key is pressed in the textarea.
      //  We check if there is already a pending update and clear it if so.
      //  Then set up an update to occur after a small delay (so if more keys
      //    are pressed, the update won't occur until after there has been
      //    a pause in the typing).
      //  The callback function is set up below, after the Preview object is set up.
      Update: function () {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        var callback = MathJax.Callback(["CreatePreview", Preview]);
        callback.autoReset = true; // make sure it can run more than once
        this.timeout = setTimeout(callback, this.delay);
      },
      //  Creates the preview and runs MathJax on it.
      //  If MathJax is already trying to render the code, return
      //  If the text hasn't changed, return
      //  Otherwise, indicate that MathJax is running, and start the
      //    typesetting.  After it is done, call PreviewDone.
      CreatePreview: function () {
        Preview.timeout = null;
        if (this.mjRunning) return;
        var text = document.getElementById("MathInput").value;
        if (text === this.oldtext) return;
        this.buffer.innerHTML = this.oldtext = text;
        this.mjRunning = true;
        MathJax.Hub.Queue(
          ["Typeset", MathJax.Hub, this.buffer], ["PreviewDone", this]
        );
      },
      //  Indicate that MathJax is no longer running,
      //  and swap the buffers to show the results.
      PreviewDone: function () {
        this.mjRunning = false;
        this.SwapBuffers();
      }
    };


    Preview.Init();
    var inputarea = document.getElementById('MathInput');
    inputarea.addEventListener('keyup', Preview.Update, false);
    Preview.Update();
  }
  
};



// window.onhashchange = followHash;
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML-full';
document.head.appendChild(script);