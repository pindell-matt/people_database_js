'use strict'
const _ = require('lodash')

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

  removeByEmail(email) {
    _.remove(this.people, person => { return person.email === email })
  }

  allByState(state) {
    let validStates = []
    _.map(this.people, person => { if (person.state === state) validStates.push(person)})
    return validStates
  }

  countByState(state) {
    let validPeople = []
    _.map(this.people, person => { if (person.state == state) validPeople.push(person)})
    return validPeople.length
  }
}

const db = new PeopleDatabase
const personOne = new Person("Matt", "Pindell", "fake@gmail.com", "CO")
const personTwo = new Person("Matt", "Faker", "fake1@gmail.com", "CO")
const personThree = new Person("Matt", "Fakest", "fake2@gmail.com", "DC")

db.add(personOne)
db.add(personTwo)
db.add(personThree)
console.log(db.countByState("CO"));

console.log(db)
db.removeByEmail("fake@gmail.com")
console.log(db)
