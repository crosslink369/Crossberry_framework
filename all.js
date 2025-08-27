 // Load JS dynamically
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    
    script.onload = function() {
      if (callback) callback();
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
    }
    
    document.head.appendChild(link);
  }
  
  // Load crossberry jQuery first
  loadScript("https://cbjs.vercel.app/js.min.js", function() {
    console.log("crossberry jQuery loaded!");
    
    // Then load jQuery UI
    loadScript("https://code.jquery.com/ui/1.13.2/jquery-ui.min.js", function() {
      console.log("jQuery UI loaded!");
      
      // Then load crossberry.min.js for custom UI interactions
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
