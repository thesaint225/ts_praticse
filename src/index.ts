class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const Eric = new User("miessanhenri@gmail.com", "eric");
Eric.city = "Accra";
