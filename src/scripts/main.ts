import 'lazysizes';

const html: HTMLElement | null = document.querySelector('html');

if (html) html.classList.remove('no-js');

function initModule(module: any, element: any = null) {
  module.default.init(element);
}

function observe(callback: Function, elements: NodeList) {
  const config = {
    rootMargin: '200px 0px',
    threshold: 0.01
  };

  if (elements.length > 0) {
    const collection: Array<any> = Array.from(elements);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          // Stop watching and load the script
          observer.unobserve(entry.target);
          callback(entry.target);
        }
      });
    }, config);

    collection.forEach((element) => observer.observe(element));
  }
}

/** *****
 *
 *  Critical - All pages need them as fast as possible
 *
 * ******* */

import(/* webpackChunkName: "swRegister" */ 'Src/swRegister').then(initModule).catch(err => console.error(`Error in: swRegister - ${err}`));

import(/* webpackChunkName: "a11y" */ 'Src/a11y').then(initModule).catch(err => console.error(`Error in: a11y - ${err}`));
