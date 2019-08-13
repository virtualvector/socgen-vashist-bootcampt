

function outer(){
    console.log('outer function');
    var x = 2;
    var inner = function(){
        console.log('inner function');
        console.log(x + 2)
        var x = 3
    }
    return inner;
}

outer()()
// var returnedFn = outer()
// returnedFn()