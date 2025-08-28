// JSON data holding script and css URLs
const resources = {
  "js": [
    "https://cbjs.vercel.app/js.min.js",
    "https://code.jquery.com/ui/1.13.2/jquery-ui.min.js",
    "https://unpkg.com/react@18/umd/react.development.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "https://cbjs.vercel.app/crossberry.min.js"
  ],
  "css": [
    "https://cbjs.vercel.app/crossberry.min.css",
    "https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"
  ]
};

// Function to load a JS script dynamically with a callback
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

// Function to load a CSS stylesheet dynamically with a callback
function loadCSS(url, callback) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  if (callback) {
    link.onload = callback;
    link.onerror = function() {
      console.error("Failed to load CSS:", url);
    };
  }
  document.head.appendChild(link);
}

// Load all CSS files concurrently
resources.css.forEach(cssUrl => {
  loadCSS(cssUrl, () => console.log(`CSS loaded: ${cssUrl}`));
});

// Function to load JS scripts sequentially according to the order in resources.js
function loadScriptsSequentially(scripts, index = 0, onComplete) {
  if (index >= scripts.length) {
    if (onComplete) onComplete();
    return;
  }
  loadScript(scripts[index], () => {
    console.log(`Script loaded: ${scripts[index]}`);
    loadScriptsSequentially(scripts, index + 1, onComplete);
  });
}

// Start loading scripts in order and then initialize your code
loadScriptsSequentially(resources.js, 0, () => {
  console.log("All scripts loaded!");

  // For example, initialize jQuery UI tabs here if #tabs exists
  if (window.jQuery && $("#tabs").length) {
    $("#tabs").tabs();
  }
});
