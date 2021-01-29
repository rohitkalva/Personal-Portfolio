const ghpages = require('gh-pages');
const fs = require('fs');

fs.writeFile('dist/Personal-Portfolio/CNAME', "kalva.info", function(err) {});
ghpages.publish('dist', function(err) {});