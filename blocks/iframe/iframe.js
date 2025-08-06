import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the Iframe
 * @param {Element} block The Iframe block element
 */
export default async function decorate(block) {
  

  // decorate Iframe  DOM
  block.textContent = 'Iframe page';
 // block.setHTMLUnsafe = '<iframe src="https://www.nexaexperience.com"> </iframe>'
  const iframe = document.createElement("iframe");
    iframe.src = "https://dev-nexa.marutisuzuki.com/en/iframe-banner";
    iframe.width = "700";
    iframe.height = "700";
    iframe.style.border = "none";
    iframe.allowFullscreen = true;
  block.append(iframe);
}
