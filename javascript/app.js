
let Name = prompt('what\'s your name?');
console.log(Name);
alert(Name + " is a very nice name");

let happiness = prompt('are you happy?');
console.log(happiness);
let score=0
switch (happiness.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('that\'s great !');
        score++;
        break;

    case 'NO':
    case 'N':
        alert("do what ever it takes to be happy , it\'s a very important thing");
        break;
}

let end = prompt('Do you know when it\'s going to be the end of the world? ');
console.log(end);

switch (end.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('then i guess you already prepared yourself!');
        score++;
        break;

    case 'NO':
    case 'N':
        alert("you have to be prepared as soon as possible because it\s very close");
        break;
}

let hole = prompt('Do yoy know what is the black hole?');
console.log(hole);

switch (hole.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('so you has to make youself not to drop into in');
        score++;
        break;

    case 'NO':
    case 'N':
        alert("it\'s a very dense energy hole that have the capacity to consume every thing even the light!");
        break;
}

let rich = prompt('Do you think you are rich?');
console.log(rich);
switch (rich.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('so why you are here in the jordan!');
        score++;
        break;

    case 'NO':
    case 'N':
        alert("i hope you be");
        break;
}

let lonely = prompt('Do you feel lonely?');
console.log(lonely);


switch (lonely.toUpperCase()) {
    case 'YES':
    case 'Y':
        alert('that\'s better than to be with fake people');
        score++;
        break;

    case 'NO':
    case 'N':
        alert("okay!");
        break;
}

let num = prompt('can you guess what is my favorite number?');
for (let i = 0; i < 3; i++) {


    if (num > 11) {
        num = prompt('you are too high , try to make the number smaller');
    }
    else if (num < 11) {
        num = prompt('you are too low , try to make the number bigger');
    }
    else if (num == 11) {
        alert('you are right!')
        score++;
        break;
    }
     else if (i == 3) {
        alert('my favorite number is 11');
    }
}




let show = prompt('can you guess  one of my best series ever?');

let movie = ['friends', 'narcos', 'dexter', 'orphan black'];

for (let v = 0; v < 5; v++) {
    console.log(show);
    if (show.toLowerCase() === movie[0] || show.toLowerCase() === movie[1] || show.toLowerCase() === movie[2] || show.toLowerCase() === movie[3]) {
        alert('yes ' + show + ' is one of my top five series');
        score++;
        break;

    }
    else if(v==4){
        alert('my favorite movies are friends, narcos, dexter, orphan black ');
    }
    else {
        show = prompt('that\'s wrong try again');
    }

}

alert('your final score is '+score);



