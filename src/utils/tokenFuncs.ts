
import { StravaTokenResponse } from '@/models/user';
import {tokenClient } from './api'

export const refreshToken = async (refreshToken) => {
    try {
        const tokenResponse: any = await tokenClient({
            params: {
                refresh_token: refreshToken
            }
          })
        return tokenResponse.data
    } catch {
        console.log(Error);
        return 'Error retrieving token'
    }

}