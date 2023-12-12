let user1 = {
    firstName: "Bilgin",
    lastNAme: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function(){
        return `${this.firstName[0].toUpperCase()}. ${this.lastNAme}`}
}
console.log(user1)