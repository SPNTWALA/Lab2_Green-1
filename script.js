
function handler (){
    let name = document.getElementById("btn").value;
    //alert (name); 
    (name == "ФИО") ? alert ("Пользователь найден,но кода пока нема") : alert ("Данного клиента нет в базе данных");
}
window.handler = handler;
/*
btn.onclick = handler;
btn.onblur = handler;
btn.onchange = handler;
*/