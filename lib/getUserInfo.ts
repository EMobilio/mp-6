"use server";

export default async function getUserInfo(accessToken: string) {
    // fetch from the google userinfo API endpoint with the passed access token in the header
    const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    // return the fetched user info
    return await res.json();
}