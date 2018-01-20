var fs = require('fs');
var colors = require('colors');


fs.readdir('.', (err, data) => {
    if (err) throw err;
    fs.writeFile('./fileList.txt', data, (err) => {
        if(err) throw err;
        console.log('\nZapisano listę plików bieżącego katalogu w pliku\n'.blue);
        fs.readFile('./fileList.txt', 'utf-8', (err, data) => {
            console.log('Dane po zapisie\n'.blue);
            console.log(data);
        })
    })
  });