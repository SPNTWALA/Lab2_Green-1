import fs from 'fs'
const string = fs.readFileSync(__dirname + '/deposits.json', 'utf8')
let users = JSON.parse(string);
let user;
for (let z=0;z<"Последний клиент";z++){
  let zachto;
  zachto = fs.readFileSync(__dirname + '/deposits/'+z+'.json', 'utf8')
  //Ну и дальше код для каждого проверить имя кто-нибудь допишите я устал
}


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
      bank(user);
      } 
    else {
      alert ("Пользователь не найден")
      }
    
    return user;
}
window.handler = handler;

function bank(user) {
  let balancechange,summchange,percentchange;
  let summ=Number(user.summ);
  let percent=Number(user.percent);
  let monthchanges=Number(user.monthchanges);
  let length=Number(user.length);
  let month=Number(user.month);
  percent=percent/12/100;
  percent=percent.toFixed(3);
  if (month<length){
      for (let y=0; y<month; y++){
        balancechange = Number(summ);
        balancechange = Number(balancechange) + Number(balancechange)*Number(percent);
        balancechange = Number(balancechange) + Number(monthchanges);
        summchange = Number(balancechange) - Number(summ);
        (balancechange>0) ? percentchange = Number(summ)/Number(balancechange) : percentchange = 1 - Number(balancechange) / Number(summ);
        percentchange=percentchange.toFixed(2);
        summchange=summchange.toFixed(2);
        balancechange=balancechange.toFixed(2);
        summ=balancechange;
        if (summ < 0){
          return alert ("У пользователя = "+user.Name+' снятие с счета превысит депозит'+"\n"+"Вклад не одобрен")
        }
      }
      alert("У пользователя = "+user.Name+"\n"+"Начальный вклад = "+user.summ+"\n"+"Срок вклада = "+user.length+"\n"+"Процент вклада = "+user.percent+"%"+"\n"+"Ежемесячное пополнение/снятие = "+user.monthchanges+"\n"+"Месяц вклада = "+user.month+"\n"+"Текущий баланс = "+balancechange)
    } 
    else {
      for (let y=0; y<length; y++){
        balancechange = Number(summ);
        balancechange = Number(balancechange) + Number(balancechange)*Number(percent);
        balancechange = Number(balancechange) + Number(monthchanges);
        summchange = Number(balancechange) - Number(summ);
        (balancechange>0) ? percentchange = Number(summ)/Number(balancechange) : percentchange = 1 - Number(balancechange) / Number(summ);
        percentchange=percentchange.toFixed(2);
        summchange=summchange.toFixed(2);
        balancechange=balancechange.toFixed(2);
        summ=balancechange;
        if (summ < 0){
          return alert ("У пользователя = "+user.Name+' снятие с счета превысит депозит'+"\n"+"Вклад не одобрен")
        }
      }
      alert ("Вклад закрыт"+"\n"+"Пользователь = "+user.Name+"\n"+"Начальный вклад = "+user.summ+"\n"+"Срок вклада = "+user.length+"\n"+"Процент вклада = "+user.percent+"%"+"\n"+"Ежемесячное пополнение/снятие = "+user.monthchanges+"\n"+"Итоговая сумма = "+balancechange);
    }
}
