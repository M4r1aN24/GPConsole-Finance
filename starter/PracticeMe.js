var people = [
    ["dan", 29],
    ["daxxn", 23],
    ["er", 21],
    ["dabadn", 22],
    ["man", 44],

];

var ages = [
    29,
    61,
    20,
    25,
    90
];  
// average is adding everything together and then / to the items inside. 

//totalavgage / people.lenght = average.

// 
// var something = ages [3];
// var something = people [3];

// because the array is multiple arrays with 2 items inside, the 0 is the first item in all arrays and 1 is the second item.

// console.log(something);
//console.log(something[1]);

var something = people [3][1];
console.log("dan is " + something + " years old");
// i ++ it's the same as 1 = i+1, i += 100 == i = i+100
for (var i = 0; i < people.length; i++) {

    console.log("someone is " + people[i][1] + " years old");
    // var name = people[i][0];
    // console.log('the name here is ' + name)
}

var totalExp = 0;
//create a for loop that goes through the array

for (var i = 0; i < ages.length; i++) {
    console.log("adding " + ages[i]);
    // totalExp = totalExp + ages[i]; // the same as below
    totalExp += ages[i];
    console.log("total exp is now " + totalExp);

    // this will acumulate the var ages.
}

// and adds the second index toghether