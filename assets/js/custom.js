const registerServiceWorker=async()=>{if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/serviceWorker.js");e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active")}catch(e){console.error(`Registration failed with ${e}`)}};registerServiceWorker();