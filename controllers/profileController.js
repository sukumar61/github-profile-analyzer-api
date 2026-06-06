import axios from "axios";

export const analyzeProfile=async (req,res)=>{

    try{
    const {username}=req.body
    const result=await axios.get(`https://api.github.com/users/${username}`)
    res.status(200).json(result.data)
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message:"Failed to fetch github profile"})
    }


}