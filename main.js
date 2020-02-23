console.log("Hello");

function serviceWorkerRegistration() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js')
    .then((reg) => {
      console.log("service worker registered");
    });
  }
}

function appendIFrame() {
  const iframeElement = document.createElement('iframe');
  iframeElement.src = "/frame-l1.html";
  document.querySelector('#content-container')
  .appendChild(iframeElement);
}

function registerButtonHandler() {
  document.querySelector("#frameLoader")
    .addEventListener('click', (clickEvent) => {
      appendIFrame();
      console.log("adding iframe");
    });
}


serviceWorkerRegistration();
registerButtonHandler();