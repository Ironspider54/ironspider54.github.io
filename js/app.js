"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(e=>console.log("service worker registered",e)).catch(e=>console.log("service worker not registered",e));
