// let money = prompt("Ваш бюджет за месяц",""),
//     time = prompt("Введите дату в формате YY-MM-DD","");


//     let appData = {
//         budget:money,
//         expenses:{},
//         optionalExpenses:{},
//         income:[],
//         timeData:time,
//         saving:true
//     };
//     let a1 = prompt("Введите обязательную статью расходов в этом месяце",""),
//         a2 = prompt("Во сколько обойдется",""),
//         a3 = prompt("Введите обязательную статью расходов в этом месяце",""),
//         a4 = prompt("Во сколько обойдется ? ","");
//     appData.expenses.a1 = a2;
//     appData.expenses.a3 = a4;
//     alert(appData.budget / 30);
  

let expension={};
for(let i = 0; i < 2; i++){
    let a=prompt("Введите обязательную статью расходов в этом месяце","") ,
        b=prompt("Во сколько это обойдется","");
        if(typeof(a) === 'string'&& typeof(a)!=null && typeof(b)!=null && a!= '' && a.length < 50){
            console.log("done");
            expension[a] = b;
        }
        else{
           console.log("bad result");
           i--;
        }
}
