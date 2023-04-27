// some browser may not be WebGL compatible in such case to indentify it beforehold 
import { WebGL } from 'three/addons/capabilities/WebGL.js'; // partial imports

if ( WebGL.isWebAvailable()) {
    // animation will take place here
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}
