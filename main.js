// Q1 //

function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
array = [2, 5, 9, 6];
console.log(contains(array, 9));

//Q2//

function timeConvert(h,m) {
    let hours = h;
    let minutes = m;
    var seconds = ((hours * 60 * 60) + (minutes * 60));
    
    return seconds;
    }
    
    console.log(timeConvert(10,30));

//Q3//

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}


console.log(aquarium.numberOfRocks); //accessing the value of numberOfRocks
aquarium.numberOfRocks += 2;
console.log(aquarium.numberOfRocks);
console.log(aquarium.fish[2]);
console.log(aquarium.fish[1].size);
aquarium.fish[0].size = '4 inches';
console.log(aquarium.fish[0].size);
aquarium.fish.push(
    {
        type: 'starfish',
        size: '5 inches',
        color: 'blue'
    }
);
console.log(aquarium.fish);

//Q4//
json = (require('./data')); 

let logData = function() {
    console.log(json);
}

logData();

let logNames = function() {
    let obj = JSON.parse(json);
    for (var i = 0; i < obj.people.length; i++) {
        console.log(obj.people[i].name);
    }
};

logNames();

let logNameEyes = function() {
    let obj = JSON.parse(json);
    for(var i = 0; i < obj.people.length; i++){
        console.log(obj.people[i].name + " - " + obj.people[i].eye_color);
    }
};

logNameEyes();

let logByMass = function() {
    let obj = JSON.parse(json);
    for(var i = 0; i < obj.people.length; i++){
        if (obj.people[i].mass > 75){
            console.log(obj.people[i].name);
        }
    }
};

logByMass();

//================================================//

//Bonus Q1//

function getRandomInt(num) {
    return Math.floor(Math.random() * Math.floor(num));
  }
  
  console.log(getRandomInt(6));
  console.log(getRandomInt(10));

//Bonus Q2//

function isLeap(year){
    if(year % 400 === 0){
        return true
    }
    else if(year % 4 === 0 && year % 100 === 0){
        return false
    }
    else if(year % 4 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(isLeap(2020));
console.log(isLeap(1800));
console.log(isLeap(2000));
console.log(isLeap(2019));


