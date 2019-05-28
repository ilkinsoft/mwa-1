$(document).ready(function () {
    Array.prototype.removeNum = function (number) {
        const arr = this;
        return new Promise(function (resolve, reject) {
            resolve(arr.filter(l => l !== number));
        })
    };

    console.log("start");
    let a = [1, 2, 3, 4, 5, 6];
    a.removeNum(5).then(data => console.log(data));
    console.log("finish");



// First we called console.log('Start') statement, so JS engine puts in Stack.
// It will print 'Start' message and finishes so that this line will pop.
// Then we called array.removeNum() function, it also goes to stack. But, because it is
// asynchronous by Promise object, it will disappear from Stack and Web API is gonna handle it.
// Because Stack is empty, next line console.log('Finish') will be pushed to Stack.
// Even if removeNum() function runs immediately, it will go to the Task Queue.
// We know that only if Stack is empty JS puts someething in it. So, the result of removeNum() still
// will wait for other lines to finish running.
// That's why 'Finish' will be printed and pops from Stack before.
// Then, the result of removeNum function console.log(result) will go to Stack, prints array, and pops.
// By the way, promises are pushed to microtask queue. Microtask queue has a higher priority than the macrotask queue.


    const {Observable} = rxjs;
    const {ajax} = rxjs.ajax; // = require("rxjs/ajax")
    const {map, catchError} = rxjs.operators;

    function promise() {
        return fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(response => response.results.forEach(element => {
                console.log(element.name);
                console.log(element.location);
            }))
            .catch(err => err)
    }

    async function async() {
        try {
            await fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then(response => response.results.forEach(element => {
                    console.log(element.name);
                    console.log(element.location);
                }))
                .catch(err => err);
        } catch (error) {
            console.log(error)
        }
    }

    function reactive() {
        const obs$ = ajax.getJSON('https://randomuser.me/api/')
            .pipe(
                map(response =>
                    response.results.forEach(element => {
                        console.log(element.name);
                        console.log(element.location);
                    })),
                catchError(error => {
                    console.log('error: ', error);
                    return of(error);
                })
            );

        const subscription = obs$.subscribe(
            function (x) {
            },
            function (err) {
                console.log(err)
            },
            function () {
                console.log(`Done`)
            },
        )
    }


    $("#promise").click(function () {
        promise();
    });


    $("#async").click(function () {
        async();
    });


    $("#reactive").click(function () {
        reactive();
    });


    //All 3 methods are asynchronous.



})

