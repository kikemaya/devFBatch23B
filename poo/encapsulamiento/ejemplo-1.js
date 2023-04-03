class Student {
  constructor(name, username = "genericUsername", classes, address) {
    this.name = name
    this._username = username
    this.classes = classes
    this._address = address
  }

  get getAddress() {
    return this._address
  }

  set validateUserName(newUserName) {
    if (newUserName === "usuarioMaldito" || newUserName === "laCucaracha") {
      console.warn("No haga eso, joven. Se ve mal. Ya esta grande xd")
    } else {
      this._username = newUserName
      return newUserName
    }
  }
}

const emilio = new Student("Emilio", "Million", ["History", "Math", "Physics"], "Dillion Av, etc")

console.log(emilio.name)
console.log(emilio.classes)
console.log(emilio.getAddress)
console.log(emilio.validateUserName = "usuarioBueno")