/* ads.js - the only file you need to edit to turn ads on.
 *
 * HOW TO USE
 * 1. Set  enabled: true
 * 2. For each slot, paste the ad network's banner code between the backticks in  html: `...`
 *    - "mid"    = shows under the results box
 *    - "bottom" = shows above the footer
 *    Leave html empty (``) for a slot you do not want. Empty slots take no space.
 * 3. Upload this one file to GitHub. Every page picks it up. No other file needs to change.
 *
 * Use banner / native formats only. Do not use popunder, redirect or push formats.
 * Each slot can have a different size on phones: fill  mobile: {width, height, html}.
 */
(function () {
  var ADS = {
    enabled: false,
    slots: {
      mid:    { width: 300, height: 250, html: ``, mobile: { width: 300, height: 250, html: `` } },
      bottom: { width: 728, height: 90,  html: ``, mobile: { width: 320, height: 50,  html: `` } }
    }
  };

  if (!ADS.enabled) return;
  var isMobile = window.innerWidth < 728;
  var nodes = document.querySelectorAll(".ad-slot[data-slot]");
  for (var i = 0; i < nodes.length; i++) {
    var cfg = ADS.slots[nodes[i].getAttribute("data-slot")];
    if (!cfg) continue;
    var use = (isMobile && cfg.mobile && cfg.mobile.html) ? cfg.mobile : cfg;
    if (!use.html || !use.html.replace(/\s/g, "")) continue;
    var fr = document.createElement("iframe");
    fr.width = use.width; fr.height = use.height;
    fr.setAttribute("scrolling", "no");
    fr.setAttribute("title", "Advertisement");
    fr.style.cssText = "border:0;max-width:100%";
    fr.srcdoc = '<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0">' + use.html + "</body></html>";
    nodes[i].appendChild(fr);
  }
})();
