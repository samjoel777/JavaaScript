let Balance = 1000;
let msg = prompt(`Enter the Value 
1.Deposit 
2.Withdraw 
3.Balance`);

// let deposit = null;

// let withdraw = null;

// let Balance = null;

if(msg == 1){
    let msg1 = Number(prompt("Enter Amount To Deposit"));
    Balance = Balance + msg1;
    confirm(`Balance: ${Balance}`);
}
else if(msg == 2){
    let msg2 = Number(prompt("Enter Amount To Withdraw"));
    alert(`Amount Withdrawed ${msg2}`);
    Balance = Balance - msg2;
    confirm(`Balance: ${Balance}`);
}
else{
    alert(Balance);
}
