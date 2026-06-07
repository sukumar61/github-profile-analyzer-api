import axios from "axios";
import pool from "../config/db.js"

export const analyzeProfile=async (req,res)=>{

    try{
    const {username}=req.body
    if (!username || username.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'GitHub username is required',
      })
    }


    const result=await axios.get(`https://api.github.com/users/${username}`)
    const{login,name,public_repos,followers,following,avatar_url,html_url}=result.data


        const [existingProfile] = await pool.execute(
            'SELECT id FROM github_profiles WHERE username = ?',
                    [login]
         )
    if(existingProfile.length > 0) {
        return res.status(409).json({
            success: false,
        message: 'Profile already analyzed',
            })
        }

    await pool.execute(`INSERT INTO github_profiles
   (
     username,
     name,
     followers,
     following,
     public_repos,
     avatar_url,
     profile_url
   )
   VALUES (?, ?, ?, ?, ?, ?, ?);`,[login,name,followers,following,public_repos,avatar_url,html_url])
    
    res.status(200).json({
  success: true,
  message: "Profile analyzed successfully",
  data: profile,
})
    }
    catch(error){
        console.log(error.message)
        if (error.response?.status === 404) {
    return res.status(404).json({
      success: false,
      message: 'GitHub user not found',
    })
  }
        res.status(500).json({message:"Failed to fetch github profile"})
    }
}
export const getAllProfiles=async(req,res)=>{
    try{
        const [profiles]=await pool.execute("select * from github_profiles")
        return res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    })
        
        
    }
    catch(error){
         console.error(error.message)
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
    }
}

export const getProfileById=async(req,res)=>{
    try{
        const {id}=req.params
        if (!id || Number.isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: 'Valid profile id is required',
      })
    }
    const [profile]=await pool.execute("select * from github_profiles where id=?;",[id])
    if (profile.length===0){
        return res.status(404).json({
        success: false,
        message: 'Profile not found',
      })
    }
     return res.status(200).json({
      success: true,
      data: profile[0]
    })

    }
    catch(error){
        console.log(error.message)
        res.status(500).json({ success: false,
      message: 'Internal server error'})
    }
}