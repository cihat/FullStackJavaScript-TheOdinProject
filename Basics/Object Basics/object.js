const person = {
  name: ['Bob', 'Smith'],
  name2: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old . He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function () {
    alert('Hi! I\'m ' + this.name[0] + ' .');
  }
};


person.name
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()

const person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

const person2 = {
  name: 'Deepti',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}