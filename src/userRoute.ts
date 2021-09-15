import express from 'express'
import UserSchema, { User } from './models/user'

const router = express.Router()


router.get('/', async (req, res, next) => {
  const email = req.body.email
  const user: any = await UserSchema.findOne({email: email})
  if(!user){
    res.status(200).json({access_token: false})
    return
  }
  let currTime = Number(Date.now().toString().slice(0, 10))
  let tokenExpiration = user.expires_at
  if(currTime > tokenExpiration){
    res.status(200).json({access_token: user.access_token})
    return
  } else {
    
  }

  });

router.post('/', async (req, res, next) => {
    const user = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      access_token: req.body.access_token,
      expires_at: req.body.expires_at,
      refresh_token: req.body.refresh_token
    })
    user.save().then(data => {
      res.status(200).json(data)
    }).catch(next)
  });
  
export default router;