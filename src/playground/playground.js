// const fs = require("fs");

// const dataBuffer = fs.readFileSync("playground.json");
// const dataJSON = dataBuffer.toString();
// const user = JSON.parse(dataJSON);

// user.name = "Andrew";
// user.age = "27";
// const userJSON = JSON.stringify(user);
// fs.writeFileSync("playground.json", userJSON);

// console.log(userJSON);

const event = {
  name: "NYE Sesh",
  guestList: ["Max", "Hutch", "GG"],
  printGuestList() {
    console.log("Guest list for " + this.name + ":");
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
