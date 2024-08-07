import mongoose from "mongoose"


export const ConnectDB = async ()=>{
  
  await mongoose.connect('mongodb+srv://nadiafahmi1:norhan01551230390@cluster0.kn8gsgu.mongodb.net/todo-app')
   console.log("DB Connected")
}
// 








// await mongoose.connect('mongodb+srv://
//suzansalama:01228778544@cluster0.yqdw7hn.
//mongodb.net/todo-app')




//Used when interacting with the Vercel API.
//prj_wajWq79EY9esWsXyD49pjYVCLGVt


//prj_wajWq79EY9esWsXyD49pjYVCLGVt





// const mongoUrl = process.env.MONGO_URL || process.env.NEXT_PUBLIC_MONGO_URL;

