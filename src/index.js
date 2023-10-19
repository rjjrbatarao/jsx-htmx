import App from './App';
import 'htmx.org';
window.htmx = require('htmx.org');

const rootElement = document.getElementById('root');
rootElement.innerHTML = '';
rootElement.appendChild(<App />);
