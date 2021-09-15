import axios from "axios";

let stravaClientID = process.env["STRAVA_CLIENTID"]
let stravaSecret = process.env["STRAVA_CLIENT_SECRET"]

export const tokenClient = axios.create({
    baseURL: "https://www.strava.com/oauth/token",
    method: "post",
    timeout: 3000,
    params: {
        client_id: stravaClientID,
        client_secret: stravaSecret,
        grant_type: "refresh_token"
    }
});

const apiClient = axios.create({
    baseURL: "https://www.strava.com/api/v3",
    timeout: 3000
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("StravaAccessToken");

        if (token) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const maxClient = axios.create({
    baseURL: "https://www.strava.com/api/v3",
    timeout: 3000
});

maxClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("MaxAccessToken");

        if (token) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export { apiClient, maxClient };