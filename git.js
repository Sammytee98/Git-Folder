const info = {
    name: "Samuel",
    age: 30,
    totalRooms: 120,
    bookedRooms: 40,
    availableRooms: () => this.totalRooms - this.bookedRooms
}
const {name, availableRooms} = info;
const greetingMessage = () => `Hello, ${name}! Welcome to Sunrise Hotel. We have ${availableRooms} unbooked rooms left. Pick your choice!`;