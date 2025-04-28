import jazzyMangoDesign from './designs/jazzy-mango.js';
import briskOtterDesign from './designs/brisk-otter.js';
import briskElmDesign from './designs/brisk-elm.js';
import gleamingFernDesign from './designs/gleaming-fern.js';
import mellowLynxDesign from './designs/mellow-lynx.js';
import localhostDesign from './designs/localhost.js';
import defaultDesign from './designs/default.js';

export default {
  "jazzy-mango.com": "jazzy-mango.com",
  "brisk-otter.com": "brisk-otter.com",
  "brisk-elm.com": "brisk-elm.com",
  "gleaming-fern.com": "gleaming-fern.com",
  "mellow-lynx.com": "mellow-lynx.com",
  "localhost": "jazzy-mango.com",
  "127.0.0.1": "jazzy-mango.com"
};

export const designs = {
  "jazzy-mango.com": jazzyMangoDesign,
  "brisk-otter.com": briskOtterDesign,
  "brisk-elm.com": briskElmDesign,
  "gleaming-fern.com": gleamingFernDesign,
  "mellow-lynx.com": mellowLynxDesign,
  "design_local001": localhostDesign,
  "default": defaultDesign
};