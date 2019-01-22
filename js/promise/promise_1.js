let ADD = (opr) =>
{
    opr.add = opr.a + opr.b;
    return opr;
}

let SUB = (opr) =>
{
    if(opr.a > opr.b) { opr.sub = opr.a - opr.b; }
    else { opr.sub = opr.b - opr.a; } 
    
    return opr;
}

let MUL = (opr) =>
{
    opr.mul = opr.a * opr.b;
    return opr;
}

let DIV = (opr) =>
{
    opr.div = opr.a / opr.b;
    return opr;
}

let OTHER = (opr) =>
{
    console.log("Invalid Cal Type");
}

let promise = new Promise(function(resolve,reject){
    let operation = "ADD";
    if(operation == "ADD" || operation== "SUB" || operation=="MUL" || operation=="DIV")
    {
        let opr = {
            a : 30,
            b : 50
        }
        resolve(opr);
    }
    else if(operation == "OTHER")
    {
        reject(opr);
    }
})

promise.then(ADD).then(SUB).then(MUL).then(DIV).then(function(response){ console.log(response) }).catch(OTHER)