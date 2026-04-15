const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const svgBuffer = fs.readFileSync(path.resolve(__dirname, 'JedTriangleNew.svg'));
const SVG_DATA_URI = 'data:image/svg+xml;base64,' + svgBuffer.toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #0C1A28;
    font-family: 'Inter', sans-serif;
    position: relative;
  }

  /* Dot grid */
  .dot-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  /* Top stripe */
  .top-stripe {
    position: absolute; top: 0; left: 0; right: 0; height: 4px;
    display: flex;
  }
  .top-stripe .left  { flex: 1; background: #C8272D; }
  .top-stripe .right { flex: 1; background: #1B4F91; }

  /* Layout */
  .layout {
    position: absolute; inset: 0;
    display: flex; align-items: stretch;
    padding: 52px 56px 44px 64px;
    gap: 48px;
  }

  /* LEFT COLUMN */
  .left-col {
    flex: 1;
    display: flex; flex-direction: column;
    justify-content: space-between;
  }

  /* Logo row */
  .logo-row {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 0;
  }
  .logo-row img { height: 72px; width: auto; }
  .logo-text { display: flex; flex-direction: column; }
  .logo-jedco {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800; font-size: 36px;
    color: #1B4F91; line-height: 1;
  }
  .logo-sub {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700; font-size: 14px;
    color: #ffffff; letter-spacing: 0.2em;
    text-transform: uppercase; line-height: 1.2;
  }

  /* Headline */
  .headline {
    flex: 1;
    display: flex; flex-direction: column; justify-content: center;
    margin-top: 8px;
  }
  .headline-line {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900; font-size: 90px;
    line-height: 0.92; text-transform: uppercase; letter-spacing: -0.01em;
    color: #ffffff;
  }
  .headline-line.red { color: #C8272D; }

  /* Subhead */
  .subhead {
    font-family: 'Inter', sans-serif;
    font-size: 20px; font-weight: 400;
    color: rgba(255,255,255,0.52);
    line-height: 1.4; margin-top: 22px;
  }

  /* RIGHT COLUMN */
  .right-col {
    width: 380px; flex-shrink: 0;
    display: flex; flex-direction: column;
  }
  .right-panel {
    flex: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 28px 30px;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .panel-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700; font-size: 13px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(255,255,255,0.4);
  }
  .categories { display: flex; flex-direction: column; justify-content: space-between; flex: 1; margin-top: 20px; }
  .category { display: flex; align-items: flex-start; gap: 14px; }
  .cat-bullet {
    width: 10px; height: 10px; border-radius: 2px;
    background: #C8272D; flex-shrink: 0; margin-top: 6px;
  }
  .cat-body { display: flex; flex-direction: column; gap: 4px; }
  .cat-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700; font-size: 22px;
    color: #ffffff; text-transform: uppercase;
    letter-spacing: 0.04em; line-height: 1;
  }
  .cat-desc {
    font-family: 'Inter', sans-serif;
    font-size: 13px; color: rgba(255,255,255,0.45);
    line-height: 1.4;
  }

  /* Domain */
  .domain {
    text-align: center; margin-top: 16px;
    font-family: 'Inter', sans-serif;
    font-size: 15px; color: rgba(255,255,255,0.3);
    letter-spacing: 0.04em;
  }
</style>
</head>
<body>
  <div class="dot-grid"></div>
  <div class="top-stripe"><div class="left"></div><div class="right"></div></div>

  <div class="layout">

    <!-- LEFT -->
    <div class="left-col">
      <div class="logo-row">
        <img src="${SVG_DATA_URI}" alt="JEDCO">
        <div class="logo-text">
          <span class="logo-jedco">JEDCO</span>
          <span class="logo-sub">Air Systems</span>
        </div>
      </div>

      <div class="headline">
        <div class="headline-line">THE AIR-SIDE REP</div>
        <div class="headline-line">YOU DON'T HAVE</div>
        <div class="headline-line red">TO WAIT ON.</div>
        <div class="subhead">Metro Atlanta &amp; Southeast&nbsp;&nbsp;·&nbsp;&nbsp;Commercial HVAC Manufacturer's Rep</div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="right-col">
      <div class="right-panel">
        <div class="panel-label">What We Rep</div>

        <div class="categories">
          <div class="category">
            <div class="cat-bullet"></div>
            <div class="cat-body">
              <div class="cat-title">Air Distribution</div>
              <div class="cat-desc">Registers, diffusers, terminal units</div>
            </div>
          </div>

          <div class="category">
            <div class="cat-bullet"></div>
            <div class="cat-body">
              <div class="cat-title">Air Control</div>
              <div class="cat-desc">Dampers, louvers, access doors</div>
            </div>
          </div>

          <div class="category">
            <div class="cat-bullet"></div>
            <div class="cat-body">
              <div class="cat-title">Fans &amp; Heating</div>
              <div class="cat-desc">Cabinet fans, unit heaters, make-up air</div>
            </div>
          </div>

          <div class="category">
            <div class="cat-bullet"></div>
            <div class="cat-body">
              <div class="cat-title">Ventilation &amp; IAQ</div>
              <div class="cat-desc">ERVs, filtration, dehumidification</div>
            </div>
          </div>
        </div>
      </div>

      <div class="domain">jedcoairsystems.com</div>
    </div>

  </div>
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  // Extra wait for fonts
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({
    path: path.resolve(__dirname, 'og-image.png'),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
    type: 'png'
  });
  await browser.close();
  console.log('og-image.png generated at 2x (2400×1260), saved as 1200×630 crop.');
})();
