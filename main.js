'use strict'
let money,time;
function start(){
    money = +prompt("Ваш бюджет за месяц",""); // бюджет на месяц
    time = prompt("Введите дату в формате YY-MM-DD","");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет за месяц","");
    }

}
start();
    let appData = {
        budget:money,
        expenses:{},
        optionalExpenses:{},
        income:[],
        timeData:time,
        saving:true,
        chooseExspenses:function(){   //выбор обязательных расходов
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
        },
        dectedDaybudget:function(){     //количество денег на один день заносится в обьект appData
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay );
         },
        detectLevel:function(){ // определение уровня достатка
            if(appData.moneyPerDay < 100){
           console.log("Минимальный уровень достатка");
            } else if(appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
                console.log("Средний уровень достатка");
            } else if(appData.moneyPerDay > 2000){
                console.log("Высоки уровень достатка");
            } else{
                console.log("Произошла ошибка");
            }
        },
        checkSavings:function(){   //сумма накоплений и под какой процент
            if(appData.saving == true){
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
                    appData.monthIncome = save / 100 / 12 * percent;
                    alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
            }
        },
        chooseOptExpenses:function(){ // вызов статьи необязательных расходов
            for(let i = 1; i < 3;i++){
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i]= questionOptExpenses;
                appData.optionalExpenses[i];
            }
        },
        chooseIncome:function(){
            for(let i = 0;i < 1;i++){
            let items = prompt('Что принесет дполнительный доход (Перечислите через запятую)','');
            if(typeof(items) !== 'string' || items == null || items == ''){
                console.log('Вы ввели не корректные данные');
            }
            else{
                appData.income = items.split(',');
                appData.income.push(prompt('Может что-то еще',''));
                appData.income.sort();
                appData.income.forEach(function(itemSave,i) {
                    console.log('Способы заработка:' + (i+1)+'-' + itemSave)
                    
                });
            }
        }
    }
    };
   
    for(let key in appData){
        console.log('Наша программа включает в себя данные:'+ key);
    }
    
  
    
    
    
