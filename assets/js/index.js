window.addEventListener('load', () {
  registerSW();
 });
 
async function registerSW() {
  try {
    await navigator.serviceWorker.register('sw.js');
    } catch (e) {
      console.log('SW reg failed');
    }
  }
}
