const users = [
    {
        name: "Aufa",
        age: 15,
    },
    {
        name:"Hannah",
        age:20
    },
    {
        name:"Mikel",
        age:30
    }
]

const hasil = users.find(function(user){
    return user.age > 18
})

console.log(hasil)