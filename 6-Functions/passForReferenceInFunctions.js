const person={
    _name:'Jhon',
    lastName:'Doe'

}
function changeValueObject(p1){
    p1._name='Bruce'
    p1.lastName='Wayne'
}
//Reference PAss
changeValueObject(person)
console.log(person)