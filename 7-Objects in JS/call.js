let pet1={
    _name:'Lucy',
    age:3,
    fullData:function(){
        return  this._name+' has '+this.age+' years old'
    }
}
let pet2={
    _name:'Arya',
    age:5

}
//Using the call method
//His function is call a method of another object for example:
console.log(pet1.fullData())
console.log(pet1.fullData.call(pet2))
