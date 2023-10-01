import { registerUser } from "@/src/service/user";


export default function handler(req, res) {
   if(req.method !== "POST"){
    res.status(404).json({})
   }

   const {email, password, confirmPassword} = req.body;
   console.log(email, password, confirmPassword);
   try{
    const data = registerUser(email, password, confirmPassword)
    res.status(201).json(data);
   }catch (err){
    res.status(400).json({message: err.message})
   }
  }