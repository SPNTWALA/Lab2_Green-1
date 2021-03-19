import fs from 'fs'
const string = fs.readFileSync(__dirname + '/deposits.json', 'utf8')
let users = JSON.parse(string);
//console.log ( x[1].Name )


//console.log (Object.keys(x));

function handler (){
    let name = document.getElementById("btn").value;
    for (let x=0;x<users.length;x++){
      if (name == users[x].Name) { 
      alert("У пользователя = "+users[x].Name+"\n"+"Начальный вклад = "+users[x].summ+"\n"+"Месяц вклада = "+users[x].month+"\n");
      break
      }
    }
    return name;
}
window.handler = handler;



/*function search(){
    let name = document.getElementById("btn").value;
      for (let x=0;x<list.length;x++){
        (list[x].Name == name) ? alert ("Ползователь найден"): alert("Ползователь не найден") ;
      }
}
*/ 