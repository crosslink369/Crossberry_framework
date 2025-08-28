// Load JS dynamically
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  script.onload = function() {
    if (callback) callback();
  };

  script.onerror = function() {
    console.error("Failed to load script:", url);
  };

  document.head.appendChild(script);
}

// Load CSS dynamically
function loadCSS(url, callback) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;

  if (callback) {
    link.onload = callback; // optional callback after CSS loads
    link.onerror = function() {
      console.error("Failed to load CSS:", url);
    };
  }

  document.head.appendChild(link);
}

// Load CSS styles
loadCSS("https://cbjs.vercel.app/crossberry.min.css", function() {
  console.log("CrossBerry CSS loaded!");
});
loadCSS("https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css", function() {
  console.log("jQuery UI CSS loaded!");
});

// Load scripts sequentially
loadScript("https://cbjs.vercel.app/js.min.js", function() {
  console.log("crossberry jQuery loaded!");

  loadScript("https://code.jquery.com/ui/1.13.2/jquery-ui.min.js", function() {
    console.log("jQuery UI loaded!");

    // Load React, ReactDOM and Babel standalone in parallel but wait for all to load before next step
    let scriptsToLoad = [
      "https://unpkg.com/react@18/umd/react.development.js",
      "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
      "https://unpkg.com/@babel/standalone/babel.min.js",
    ];

    let loadedCount = 0;
    function checkAllLoaded() {
      loadedCount++;
      if (loadedCount === scriptsToLoad.length) {
        // All three React scripts loaded
        console.log("React, ReactDOM, and Babel loaded!");

        loadScript("https://cbjs.vercel.app/crossberry.min.js", function() {
          console.log("crossberry.min.js loaded!");

          // After all scripts loaded, safe to use jQuery UI tabs and custom toggles
          $(function() {
            $("#tabs").tabs();
            // Additional initialization if required
          });
        });
      }
    }

    scriptsToLoad.forEach(function(src) {
      loadScript(src, checkAllLoaded);
    });
  });
});
           loadScript("https://cbjs.vercel.app/crossberry.min.js", function() {
        console.log("crossberry.min.js loaded!");
        
        // After all scripts loaded, it is safe to use jQuery UI tabs and custom toggles
        $(function() {
          $("#tabs").tabs();
          
          // The toggle button handlers and click outside to close boxes
          // are implemented inside crossberry.min.js
        });
      });
    });
  });
  
  // Load CSS styles
  loadCSS("https://cbjs.vercel.app/crossberry.min.css", function() {
    console.log("CrossBerry CSS loaded!");
  });
  loadCSS("https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css", function() {
    console.log("jQuery UI CSS loaded!");
  });
