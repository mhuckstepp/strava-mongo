import express from 'express'
import UserSchema, { StravaTokenResponse, User } from './models/user'
import { refreshToken } from './utils/tokenFuncs';

const router = express.Router()


router.get('/', async (req, res, next) => {
  const email = req.body.email
  const user: any = await UserSchema.findOne({email: email})
  
  if(!user){
    res.status(200).json({access_token: false})
    return
  }
  
  let currTime = Number(Date.now().toString().slice(0, 10))
  let tokenExpiration = Number(user.expires_at)
  if(currTime < tokenExpiration){
    res.status(200).json({access_token: user.access_token})
    return
  } 

  const newTokens: any = await refreshToken(user.refresh_token)
  user.access_token = newTokens.access_token
  user.expires_at = newTokens.expires_at
  user.refresh_token = newTokens.refresh_token
  user.save(user)
  res.status(200).json({access_token: user.access_token})

  });

router.post('/', async (req, res, next) => {
    const user = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      access_token: req.body.access_token,
      expires_at: req.body.expires_at,
      refresh_token: req.body.refresh_token,
      athlete_info: req.body.athlete
    })
    user.save().then(data => {
      res.status(200).json(data)
    }).catch(next)
  });
  
export default router;