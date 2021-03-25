import fs from 'fs'
const string = fs.readFileSync(__dirname + '/deposits.json', 'utf8')
let users = JSON.parse(string);
//console.log ( x[1].Name )
let user;

//console.log (Object.keys(x));

function handler (){
    let name = document.getElementById("btn").value;
    user = 0 ;
    for (let x=0;x<users.length;x++){
      if (name == users[x].Name) { 
      //alert("У пользователя = "+users[x].Name+"\n"+"Начальный вклад = "+users[x].summ+"\n"+"Месяц вклада = "+users[x].month+"\n");
      user=users[x];
      break
      }
    }
    if (user != 0){
      alert("У пользователя = "+user.Name+"\n"+"Начальный вклад = "+user.summ+"\n"+"Месяц вклада = "+user.month+"\n")
      bank (user)
      } 
    else {
      alert ("Пользователь не найден")
      }
    
    return user;
}
window.handler = handler;

function bank(user) {
  percent=percent/12/100;
  percent=percent.toFixed(3);
  for (let y=0; y<length; y++){
    balancechange = Number(summ);
    balancechange = Number(balancechange) + Number(balancechange)*Number(percent);
    balancechange = Number(balancechange) + Number(monthchanges);
    summchange = Number(balancechange) - Number(summ);
    (balancechange>0) ? percentchange = Number(summ)/Number(balancechange) : percentchange = 1 - Number(balancechange) / Number(summ);
    percentchange=percentchange.toFixed(2);
    summchange=summchange.toFixed(2);
    balancechange=balancechange.toFixed(2);
    currentresult = {   
      currentBalance: balancechange, 
      balanceChange: summchange,
      percentchange: percentchange * 100     
    }
    result.push (currentresult);
    currentresult={};  
    summ=balancechange;
    if (summ < 0){
      return console.log ('Снятие с счета превысило депозит')
    }
  }
}


/*function search(){
    let name = document.getElementById("btn").value;
      for (let x=0;x<list.length;x++){
        (list[x].Name == name) ? alert ("Ползователь найден"): alert("Ползователь не найден") ;
      }
}
*/ 