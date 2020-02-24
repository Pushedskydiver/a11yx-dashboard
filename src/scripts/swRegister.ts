function swRegister() {
  function init() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .catch(error => error);
    }
  }

  return {
    init
  }
}

export default swRegister();
