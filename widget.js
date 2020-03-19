/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = typeof document === 'object' && document
    , hack = doc && doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded && doc)
    doc.addEventListener(domContentLoaded, listener = function () {
      doc.removeEventListener(domContentLoaded, listener)
      loaded = 1
      while (listener = fns.shift()) listener()
    })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});
(function () {
  domready(function () {
    // Add css to page
    var element = document.createElement("link");
    element.href = "https://widget.test/widget.css";
    element.type = "text/css";
    element.rel = "stylesheet";
    element.media = "screen,print";

    console.log(
      document.getElementById('mod24-widget').dataset
    );

    document.getElementsByTagName("head")[0].appendChild(element);

    const iframe = `<iframe width="600" height="450" frameborder="0" style="border:0" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>`;

    var button = document.createElement("a");
    button.innerHTML = "Quick quote";
    button.className = "btn btn-primary";
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    var modal = document.createElement("div");
    modal.id = "myModal";
    modal.className = "modal";

    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.innerHTML = iframe;
    modalContent.style.animation = "animatetop 0.5s";

    modal.appendChild(modalContent);

    var close = document.createElement("span");
    close.className = "close";
    close.innerHTML = "&times;";

    modalContent.appendChild(close);

    body.appendChild(modal);

    button.addEventListener("click", () => {
      modal.style.display = "block";
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

})();
