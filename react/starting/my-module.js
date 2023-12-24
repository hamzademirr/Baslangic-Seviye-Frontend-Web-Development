const hello = name => {
    console.log(`Hello ${name}`);
}

const topla = (a, b) => {
    return a + b;
}

const cıkar = (a, b) => a - b;

const text = 'text';

const user = {
    name: 'Mehmet',
    lastName: 'İşler'
};

const users = [
    {
        name: 'Ömer',
        lastName: 'Bayrak'
    },
    {
        name: 'Turan',
        lastName: 'Kaya'
    }
];

export {
    topla,
    cıkar,
    text,
    user,
    users
}

export default hello;