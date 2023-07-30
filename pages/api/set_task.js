import { connectMongoDB } from "@/libs/MongoConnect";
import Task from "@/models/TaskModel";

export default async function handler(req,res){
    // res.status(201).send("Hi there");
    if(req.method!=="POST"){
        res.status(405).send({msg:"Only Post request is allowed"});
    }

    const {task} = req.body;
    try{
        await connectMongoDB();
        Task.create({task}).then((data)=>{
            console.log(data);
            res.status(201).send(data);
        });
    }catch(err){
        console.log(err);
        res.status(400).send({err,mag:"Somethong went wrong"});
    }
}