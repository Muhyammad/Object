const obj = [
    {
        name: 'magomed',
        localStorage: "muhammasd",
    },
]

function getName(obj) {
    return obj.name
}
console.log(getName(obj))
// 


const obj1 = {
    firstname: 'Maga',
    lastname: 'Isaev',
}

function getNames(obj) {
    return [obj1.firstname, obj1.lastname]
}
console.log(getNames(obj1));



// 
const person = {
    firstname: 'Rasul',
    age: 26
};

function concatNames(obj, lastname) {
    return `${person.firstname}, ${lastname}`
}
console.log(concatNames(person, "Muslim"));

// 
const firstPerson = {
    firstname: 'Naruto',
    lastname: 'Uzumaki',
    fathername: undefined
};

function corectNames(obj) {
    if (obj.fathername === undefined) {
        return obj.firstname
    } else {
        return obj.firstname + obj.lastname + obj.fathername
    }
}
console.log(corectNames(firstPerson));

const secondPerson = {
    firstname: 'Naruto',
    lastname: 'Uzumaki',
    fathername: 'Minatovich'
};
//   



const phone = {
    batteryPower: 50,
    namePhone: Redmi,
    memeory: 256,
    color: red,
    pover: false,
    call(name) {
        return `"Я звоню ${name}"`
    },
    getBatteryPower(batteryPower) {
        return `"Ваша зарядка [${this.batteryPower}] %`
    },
    isOn(pover) {
        return pover === true ? '“телефон включен”' : '“телефон выключен”'
    },
    switch() {
        if (this.pover === false) {
            this.pover = true
        } else {
            this.pover = false
        }
    }

}


const man = {
    firstname: Muhammad,
    lastname: Mejidov,
    age: '16лет',
    growth: '174cm',
    weight: '64kg',
    login: '********',
    password: '********',
    amountOFmoneyINtheAccount: '3000000$', 
}
