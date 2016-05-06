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
}
