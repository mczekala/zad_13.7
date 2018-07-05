var fs = require('fs');

fs.readdir('../','utf-8', function(err, files) {
    if(err) throw err;
    fs.writeFile('./text.txt',files,function (err) {
    	if (err) throw err;
    })
});