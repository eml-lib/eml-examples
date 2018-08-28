const fs = require('fs');
const { render, components, createElement } = require('eml');
// import { render, components } from '../eml';
import template from './_block';
// import template from './planning-time';
// import template from './link';
// import template from './flex';

const html = render(template);

fs.writeFileSync('./eml.html', html, 'utf8');

// console.log(render(eml));