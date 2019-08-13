function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

//Synch
// function foo(){
//     sleep(5000)
//     console.log('in foo')
//     return 'foo'
// }

function foo(){
        // setTimeout(function(){
        //     sleep(5000)
        //     console.log('in foo')
        //     // return 'foo'
        //     console.log(callback)
        //     callback('foo')
        // }, 10) 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                sleep(5000)
                console.log('in foo')
                resolve('bar') 
            }, 10)
        })


    }

console.log('starting...')
// foo(function(result){
//     console.log(result)
// });
foo().then(function(res){
    console.log(res)
})
console.log('ending...')


https://bitbucket.org/p_vashisht/socgen