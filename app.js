const express = require('express')
const app = express()
const port = 3000

app.get('/deposits/*', (req, res) => {
  for (let z = 0; z < "Последний клиент"; z++){
    let f;
    f = fs.readFileSync(__dirname + '/deposits/'+ z +'???.json', 'utf8')
  }
  function showFile(input) {
      var file;
      file = input.FileReaderfiles[0];
      var reader = new FileReader();
      reader.onload = function (e) {
          var output = document.getElementById('/deposits/' + z +'.json');   
          output.textContent = e.target.result;
        alert (file);
      } 
  }
  res.send(req.url + " => " + __dirname + '/deposits/' + '???.json');
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

