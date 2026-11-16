# AI X-Ray Mirror

An interactive **educational X-ray-style mirror** built with React, Vite and Three.js.

> **Important:** This is a visual demo only. It does not produce real X-rays, detect medical conditions, or provide a medical diagnosis. The camera preview is processed locally in your browser.

## Features
- Live webcam preview (permission required)
- X-ray-inspired visual filter that can be toggled on and off
- Animated 3D-inspired anatomy display
- Responsive dashboard for desktop and mobile
- Camera starts only after the user presses **Start camera**

## Tech stack
- React + Vite
- Three.js via React Three Fiber
- Lucide React icons
- Plain CSS

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Camera permissions
Use localhost or HTTPS. Allow camera access when the browser asks. Press **Stop camera** to turn it off.

## Project structure
```
src/
  components/
    AnatomyViewer.jsx
    CameraPanel.jsx
  App.jsx
  App.css
  index.css
  main.jsx
index.html
vite.config.js
```

## Privacy
The camera stream is displayed in the browser and is not uploaded by this app.
