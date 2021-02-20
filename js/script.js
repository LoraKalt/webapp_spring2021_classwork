// compute a positive factor of a positive integer
// returns an array of factors
function factorize(n){
    var factors = [];
    for(var i = 0; i<=n; i++){
        if(n % i == 0){
            factors.push(i);
        }
    }
    return factors;
}

// extracts unique characters from a string
// returns unique characters
function findUnique(str){
    var uniqueStr = "";
    for(var i = 0; i < str.length; i++){
        if(uniqueStr.indexOf(str.charAt(i)) == -1){
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

// receives two numbers and a function, calls function with numbers as arguments. Returns result
function doOperation(x, y, operator){
    return operator(x, y);
}

//multiplies two numbers and returns result
function multiply(x, y){
    return x * y;
}

//takes the power of one number by another and returns results
function power(x, y){
    return Math.pow(x, y);
}
