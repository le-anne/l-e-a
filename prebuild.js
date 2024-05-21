// prebuild.js
require('dotenv').config({ path: '.env.development' });
const { execSync } = require('child_process');

execSync('tinacms build && astro build', { stdio: 'inherit' });
