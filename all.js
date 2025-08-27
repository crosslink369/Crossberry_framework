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
  
  // 1️⃣ Load crossberry jQuery first
  loadScript("https://cbjs.vercel.app/js.min.js", function() {
    console.log("crossberry jQuery loaded!");
    
    // Then load jQuery UI
    loadScript("https://code.jquery.com/ui/1.13.2/jquery-ui.min.js", function() {
      console.log("jQuery UI loaded!");
      
      // ✅ Safe to use jQuery UI now
      $(function() {
        $("#tabs").tabs();
      });
    });
  });
  
  // Load CSS (order doesn’t matter much here)
  loadCSS("https://cbjs.vercel.app/crossberry.min.css", function() {
    console.log("CrossBerry CSS loaded!");
  });
  loadCSS("https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css", function() {
    console.log("jQuery UI CSS loaded!");
  });
