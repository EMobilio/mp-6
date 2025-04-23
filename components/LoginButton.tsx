
export default function LoginButton() {
    // construct the google auth URL with the client id, redirect URI, response type and scopes
    const googleOauthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    googleOauthUrl.searchParams.set("client_id", process.env.GOOGLE_CLIENT_ID as string);
    googleOauthUrl.searchParams.set("redirect_uri", process.env.REDIRECT_URI as string);
    googleOauthUrl.searchParams.set("response_type", "code");
    googleOauthUrl.searchParams.set("scope", "email profile openid");

    return (
        <a href={googleOauthUrl.toString()} className={"inline-block bg-gray-100 text-xl text-gray-700 font-medium py-2 px-4 rounded shadow hover:bg-gray-200 border border-gray-300"}>Sign in with Google</a>
    );
}