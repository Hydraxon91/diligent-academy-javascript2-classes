// Task 1: ### Creating a Custom Array with Enhanced Functionality

// class CustomArray extends Array {
//     sum() {
//         return this.reduce((acc, num) => acc + num, 0)
//     }

//     product(){
//         var result = 1;
//         this.forEach(num => {
//             result *= num;
//         });

//         return result;

//         //Just realized this could have also been done with a reduce like sum
//     }

//     average(){
//         var result = 1;
//         this.forEach(num => {
//             result *= num;
//         });

//         return result / this.length;
//     }

//     unique() {
//         const elementCount = {};

//         this.forEach(element => {
//             elementCount[element] = (elementCount[element] || 0) + 1;
//         });


//         return this.filter(element => elementCount[element] === 1);
//     }
// }

// const numArr = new CustomArray(1, 2, 3, 4)
// console.log(numArr.sum());
// console.log(numArr.product());
// console.log(numArr.average());

// const numArr2 = new CustomArray(1, 1, 1, 2, 3, 3, 4, 5, 6, 6);

// console.log(numArr2.unique());


// //Task 2: ### Implementing a PubSub Pattern Using Prototypes

// function Publisher(){
//     this.subscribers = []
// }

// Publisher.prototype.subscribe = function(subscriber){
//     this.subscribers.push(subscriber)
// }

// Publisher.prototype.publish = function(data){
//     this.subscribers.forEach(sub => {
//         sub.notify(data)
//     })
// }

// function Subscriber(name){
//     this.name = name;
// }

// Subscriber.prototype.notify = function(data){
//     console.log(`${this.name} received notification: ${data}`);
// }

// const publisher = new Publisher(); 

// const subscriber1 = new Subscriber('Subscriber 1');
// const subscriber2 = new Subscriber('Subscriber 2'); 
// const subscriber3 = new Subscriber('Subscriber 3'); 

// publisher.subscribe(subscriber1); 
// publisher.subscribe(subscriber2); 
// publisher.subscribe(subscriber3); 

// publisher.publish('Hello, Subscribers!'); 


// // Task 3: ### Creating a Custom Event System

// function CustomEventSystem(){
//     this.events = {};
// }

// CustomEventSystem.prototype.on = function(eventName, callback){
//     if (!this.events[eventName]) {
//         this.events[eventName] = [];
//     }
//     this.events[eventName].push(callback);
// }

// CustomEventSystem.prototype.off = function(eventName, callback){
//     if (this.events[eventName]) {
//         const index = this.events[eventName].indexOf(callback);
//         if (index > -1) {
//             this.events[eventName].splice(index, 1)
//         }
//     }
// }

// CustomEventSystem.prototype.emit = function(eventName, ...args){
//     if (this.events[eventName]) {
//         this.events[eventName].forEach(event => {
//             event(...args)
//         });
//     }
// }


// const eventSystem = new CustomEventSystem();

// // Test 1: Register a callback and emit the event
// console.log("Test 1: Register and Emit");
// eventSystem.on('testEvent', () => {
//     console.log("testEvent triggered!");
// });
// eventSystem.emit('testEvent');


// // Test 2: Unregister a callback and ensure it doesn't get called
// console.log("\nTest 2: Unregister Callback");
// const callbackToRemove = () => {
//     console.log("This should not be called");
// };
// eventSystem.on('testEvent2', callbackToRemove);
// eventSystem.off('testEvent2', callbackToRemove);
// eventSystem.emit('testEvent2');
// // eventSystem.emit('testEvent');


// // Test 3: Multiple Callbacks
// console.log("\nTest 3: Multiple Callbacks");
// eventSystem.on('multiEvent', () => {
//     console.log("First callback for multiEvent");
// });
// eventSystem.on('multiEvent', () => {
//     console.log("Second callback for multiEvent");
// });
// eventSystem.emit('multiEvent');


// Task 4: ### Implementing a Factory Function for Creating Objects