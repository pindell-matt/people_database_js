'use strict'

class Person {
  constructor(firstName, lastName, email, state) {
    this.firstName = firstName
    this.lastName  = lastName
    this.email     = email
    this.state     = state
  }

  get hello() {
    console.log(`Hi, I'm ${this.firstName}`)
  }
}

class PeopleDatabase {
  constructor() {
    this.people = []
  }

  add(person) {
    this.people.push(person)
  }
}

const database = new PeopleDatabase()
const fakePerson = new Person("Matt", "Pindell", "fake@gmail.com", "CO")
fakePerson.hello

database.add(fakePerson)
console.log(database.people)
