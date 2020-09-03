function a11y() {
  function init() {
    fetch('/.netlify/functions/a11y')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  return {
    init
  }
}

export default a11y();
