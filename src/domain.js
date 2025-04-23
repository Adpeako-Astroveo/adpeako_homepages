import exampleDesign from './designs/example.js';
import anotherDesign from './designs/another.js';
import localhostDesign from './designs/localhost.js';

export default {
  "example.com": exampleDesign.id,
  "anotherdomain.com": anotherDesign.id,
  "localhost": localhostDesign.id,
  "127.0.0.1": localhostDesign.id
};

export const designs = {
  [exampleDesign.id]: exampleDesign,
  [anotherDesign.id]: anotherDesign,
  [localhostDesign.id]: localhostDesign
};