import mongoose from "mongoose"


export const ConnectDB = async ()=>{
  // await mongoose.connect('mongodb+srv://suzansalama:01228778544@cluster0.yqdw7hn.mongodb.net/todo-app')
  await mongoose.connect('mongodb+srv://nadiafahmi1:norhan01551230390@cluster0.kn8gsgu.mongodb.net/todo-app')
   console.log("DB Connected")
}


//mongodb+srv://nadiafahmi1:<password>@cluster0.kn8gsgu.mongodb.net/

//mongodb+srv://nadiafahmi1:<password>@cluster0.kn8gsgu.mongodb.net/?