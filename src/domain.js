import v1Design from './designs/v1.js';
import v2Design from './designs/v2.js';
import v3Design from './designs/v3.js';
import localhostDesign from './designs/localhost.js';

export default {
  "jazzy-mango.com": "design_v1",
  "brisk-otter.com": "design_v2",
  "brisk-elm.com": "design_v3",
  "localhost": "design_v1",
  "127.0.0.1": "design_v1"
};

export const designs = {
  "design_v1": v1Design,
  "design_v2": v2Design,
  "design_v3": v3Design,
  "design_local001": localhostDesign
};