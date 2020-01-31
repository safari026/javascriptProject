'use strict'
let money,time;
function start(){
    money = +prompt("Ваш бюджет за месяц",""); // бюджет на месяц
    time = prompt("Введите дату в формате YY-MM-DD","");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет за месяц","");
    }

}
//start();
    let appData = {
        budget:money,
        expenses:{},
        optionalExpenses:{},
        income:[],
        timeData:time,
        saving:true
    };
   //выбор обязательных расходов
function chooseExspenses(){
    for(let i = 0; i < 2; i++){
            let a=prompt("Введите обязательную статью расходов в этом месяце","") ,
                b=prompt("Во сколько это обойдется","");
                if(typeof(a) === 'string'&& typeof(a) != null && typeof(b) != null && a!= '' && a.length < 50){
                    console.log("done");
                    appData.expenses[a] = b;
                }
                else{
                   console.log("bad result");
                   i--;
                }
        }
}
//chooseExspenses();
         //количество денег на один день заносится в обьект appData
         function dectedDaybudget(){
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay );
         }
      //   dectedDaybudget();
    
         function detectLevel(){
  if(appData.moneyPerDay < 100){
 console.log("Минимальный уровень достатка");
  } else if(appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
      console.log("Средний уровень достатка");
  } else if(appData.moneyPerDay > 2000){
      console.log("Высоки уровень достатка");
  } else{
      console.log("Произошла ошибка");
  }
    }
    //detectLevel();
    
    //сумма накоплений и под какой процент
    function checkSavings(){
        if(appData.saving == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
                appData.monthIncome = save / 100 / 12 * percent;
                alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    }
  //checkSavings();
    function chooseOptExpenses(){
        for(let i = 1; i < 4;i++){
            let a = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i]= a;
        }
    }
chooseOptExpenses();