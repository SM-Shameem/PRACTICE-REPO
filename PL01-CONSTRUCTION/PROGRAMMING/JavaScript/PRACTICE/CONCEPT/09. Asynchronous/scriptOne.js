document.getElementById('idOne').innerHTML = 'JavaScript Tutorial';

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const sumit = new Person('sumit', 'shah', 35);
const jasim = new Person('jasim', 'uddin', 30);

sumit.country = 'bangladesh';

console.dir(sumit);
console.dir(jasim);
console.log(Person);

Person.prototype.profession = 'govt. service';

console.log(sumit);
console.log(jasim);
console.dir(Person);

const palash = new Person('palash', 'podder', 36, 'private service');
jasim.profession = 'private service';

console.log(palash);
console.log(jasim);

const Employee = new String('rajib');
console.log(Employee);
console.dir(Employee);
console.log(Employee.toUpperCase());
console.dir(Employee.toUpperCase());

// should not modify build-in object using (prototype)
String.prototype.userDefineFunc = function () {
    console.log('user defined build-in method');
}

console.log(Employee.userDefineFunc());
console.log(Employee);