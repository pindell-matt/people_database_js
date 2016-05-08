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
    console.log(validStates)
  }

  countByState(state) {
    let validPeople = []
    _.map(this.people, person => { if (person.state == state) validPeople.push(person)})
    console.log(validPeople.length)
  }

  printAllEmails() {
    let emails = this.people.map(person => { return person.email }).join(", ")
    console.log(emails)
  }
}

const db = new PeopleDatabase
const personOne = new Person("Matt", "Fake", "one@gmail.com", "CO")
const personTwo = new Person("Matt", "Faker", "two@gmail.com", "CO")
const personThree = new Person("Matt", "Fakest", "three@gmail.com", "DC")

db.add(personOne)
db.add(personTwo)
db.add(personThree)

db.allByState("CO")
db.countByState("CO")
db.printAllEmails()
