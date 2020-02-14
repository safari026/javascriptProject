'use strict'
let startBtn = document.getElementById('start'),
    btn = document.body.querySelectorAll('button'),
    budgetValue = document.body.getElementsByClassName('budget-value')[0], 
    dayBudget = document.body.getElementsByClassName('daybudget-value')[0],
    lavelValue = document.body.getElementsByClassName('level-value')[0],
    expensesValue = document.body.getElementsByClassName('expenses-value')[0],
    optionalExpenValue = document.body.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.body.getElementsByClassName('income-value')[0],
    monthSavingValue = document.body.getElementsByClassName('monthsavings-value')[0],
    yearsSavingValue = document.body.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.body.getElementsByClassName('expenses-item'),

    expensesBtn = document.body.getElementsByTagName('button')[0],
    optionalExpenBtn = document.body.getElementsByTagName('button')[1],
    countBudgetBtn = document.body.getElementsByTagName('button')[2],
    optionalExpenItem = document.body.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.body.querySelector('.choose-income'),
    checkSavings = document.body.querySelector('.checksavings'),
    chooseSum = document.body.querySelector('.choose-sum'),
    choosePercent = document.body.querySelector('.choose-percent'),
    yearValue = document.body.querySelector('.year-value'),
    monthValue = document.body.querySelector('.month-value'),
    dayValue = document.body.querySelector('.day-value');


    let money,time,startCount;
  startCount = false;

startBtn.addEventListener('click',function(){
    startCount = true;
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    money = +prompt("Ваш бюджет за месяц",""); // бюджет на месяц
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет за месяц","");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
expensesBtn.addEventListener('click', function(){ ////выбор обязательных расходов
  if( startCount == true){
    let sum  = 0;
    for(let i = 0; i < expensesItem.length; i++){
        let a= expensesItem[i].value,
            b = expensesItem[++i].value;
            if(typeof(a) === 'string'&& typeof(a) != null && typeof(b) != null && a!= '' && a.length < 50){
                appData.expenses[a] = b;
                sum += +b;
                appData.sum = sum;
            }
            else{
               console.log("bad result");
               i--;
            }
            expensesValue.textContent = sum;
    }
}else{
    return
}
});
    optionalExpenBtn.addEventListener('click', function(){
        if(startCount == true){
        for(let i = 0; i < optionalExpenItem.length;i++){
           let opt = optionalExpenItem[i].value; 
            appData.optionalExpenses[i] = opt;
            optionalExpenValue.textContent += appData.optionalExpenses[i] + ' ';
   }
}else{
    return
}
    });
    countBudgetBtn.addEventListener('click', function(){
       if(startCount == true){
        if(appData.budget != undefined && appData.sum != undefined){
        appData.moneyPerDay = (appData.budget - appData.sum / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
        if(appData.moneyPerDay < 100){
            lavelValue.textContent = "Минимальный уровень достатка";
             } else if(appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
                lavelValue.textContent = "Средний уровень достатка";
             } else if(appData.moneyPerDay > 2000){
                lavelValue.textContent = "Высокий уровень достатка";
             } else{
                lavelValue.textContent = "Произошла ошибка";
             }
        }
        else{
            dayBudget.textContent = "Произошла ошибка";
        }
    }
    else{
        return
    }
    });
    chooseIncome.addEventListener('input', function(){
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });
checkSavings.addEventListener('click', function(){
    if(appData.saving == true){
        appData.saving = false;
    }
    else{
        appData.saving =true
    }
});
chooseSum.addEventListener('input', function(){
    if(appData.saving == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100  * percent;
    monthSavingValue.textContent = appData.monthIncome;
    yearsSavingValue.textContent = appData.yearIncome;
    }
});
choosePercent.addEventListener('input', function(){
    if(appData.saving == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100  * percent;
    monthSavingValue.textContent = appData.monthIncome.toFixed(1);
    yearsSavingValue.textContent = appData.yearIncome.toFixed(1);
    } 
})
    let appData = {
        budget:money,
        expenses:{},
        optionalExpenses:{},
        income:[],
        timeData:time,
        saving:false,
    };
   

    
    
    
