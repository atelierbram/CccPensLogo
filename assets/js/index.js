var range_el = document.querySelector('input[type=range]'),
    style_el = document.createElement('style');

document.body.appendChild(style_el);

range_el.addEventListener('input', function() {
  var min = this.min || 0, max = this.max || 100,
      perc = ~~((this.value - min)/(max - min)*100);

  style_el.textContent =
    '.js input[type=range]::-webkit-slider-runnable-track{background-size:' +
    perc + '% 100%} svg{max-width:' + perc + '%}';
}, false);

/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 * https://github.com/ded/domready/
 */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


    if (!loaded)
      doc.addEventListener(domContentLoaded, listener = function () {
        doc.removeEventListener(domContentLoaded, listener)
          loaded = 1
          while (listener = fns.shift()) listener()
      })

      return function (fn) {
        loaded ? setTimeout(fn, 0) : fns.push(fn)
      }

});
domready(function () {
  document.documentElement.className += ' domready';
});
