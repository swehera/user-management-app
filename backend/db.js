const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');

  await mongoose.connect(
    "mongodb+srv://mahmudshorif07:jaOuupdfdwyzF6YG@todo.apuao1p.mongodb.net/todo?retryWrites=true&w=majority&appName=todo"
  ); // if your database has auth enabled
  console.log("database connected");
}

module.exports = mongoose;
