import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    access_token: String,
    refresh_token: String,
    expires_at: String,
    athlete_info: {
        id: Number,
        username: String,
        resource_state: Number,
        firstname: String,
        lastname: String,
        bio: String,
        city: String,
        state: String,
        country: String,
        sex: String,
        premium: Boolean,
        summit: Boolean,
        created_at: String,
        updated_at: String,
        badge_type_id: Number,
        weight: Number,
        profile_medium: String,
        profile: String,
        friend: String,
        follower: String,
    },
})

export interface User {
    name: String,
    email: String
    access_token: String,
    refresh_token: String,
    expires_at: String,
    athlete_info: {
        id: number,
        username: string | undefined,
        resource_state: number,
        firstname: string | undefined,
        lastname: string,
        bio: string,
        city: string,
        state: string,
        country: null,
        sex: string,
        premium: boolean,
        summit: boolean,
        created_at: string,
        updated_at: string,
        badge_type_id: number,
        weight: number,
        profile_medium: string,
        profile: string | undefined,
        friend: null,
        follower: null
    },
}

export interface StravaTokenResponse {
  token_type: string;
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
}

export default mongoose.model('Users', UserSchema)