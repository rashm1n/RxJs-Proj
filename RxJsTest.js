const { Observable } = require("rxjs");

// ------------------------------ OBSERVABLES --------------------------------------- 

// The observable constructor expects a function which the constructor will pass on on a observer object
// the obeserver object is scoped to the observable constructor. We cannot access the observer manually and trigger the .next function
// So the only the Observable knows how when to send the values to the subscribers
// And Observables don't share work among the subscribers 

// Observables are lazy. "COLD" . Cannot emit values unless someone subscribes to it
const observable = new Observable(observer => {
  setTimeout(() => observer.next('Observable with timeout ! 2s'), 1000);
});

const observableFunc = new Observable(
    function(ob){
        ob.next('Return This');
    }
);

const observable2 = new Observable(o => o.next('Observable without Timeout'));

observable.subscribe(v => console.log(v));
observableFunc.subscribe(v => console.log(v));
observable2.subscribe(v => console.log(v));

// And Observables don't share work among the subscribers
// If we subscribe 3 time to the observable 1. It will create 2 timeouts.

observable.subscribe(v => console.log(v));
observable.subscribe(v => console.log(v));
observable.subscribe(v => console.log(v));

// ------------------------------ SUBJECTS --------------------------------------- 


