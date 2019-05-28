Array.prototype.pluck = function (boolean) {
    const arr = this;
    if(boolean){
        setImmediate(function () {
            var max = Math.max.apply(Math, arr);
            console.log(max);
        })

    }else{
        process.nextTick(function () {
            var min = Math.min.apply(Math, arr);
            console.log(min);
        })
    }
};


console.log("start");
[1,2,3,4,5,6,7,8].pluck(true);
[1,2,3,4,5,6,7,8].pluck(false);
console.log("end");