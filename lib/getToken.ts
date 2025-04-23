"use server";

export default async function getToken(code: string) {
    // fetch from the google token endpoint with the code, client id, client secret,
    // redirect URI and grant type to get an access token
    const res = await fetch("https://oauth2.googleapis.com/token", {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            code: code,
            client_id: process.env.GOOGLE_CLIENT_ID as string,
            client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
            redirect_uri: process.env.REDIRECT_URI as string,
            grant_type: 'authorization_code',
        }),
    });

    // return the access token from the endpoint
    const data = await res.json();
    return data.access_token;
}