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
    _.remove(this.people, el => { return el.email === email })
  }

  allByState(state) {
    let validStates = []
    _.map(this.people, el => { if (el.state === state) validStates.push(el)})
    return validStates
  }

  countByState(state) {
    // TODO
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
