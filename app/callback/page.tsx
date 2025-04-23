"use server";
import getToken from "@/lib/getToken";
import getUserInfo from "@/lib/getUserInfo";
import {redirect} from "next/navigation";

export default async function CallbackPage({ searchParams }: { searchParams: Promise<{ code: string }> }) {
    // use getToken and getUserInfo to use the code in params to get an access
    // token and use the access token to get the user's google account info
    const params = await searchParams;
    const accessToken = await getToken(params.code);
    const userInfo = await getUserInfo(accessToken);

    // redirect to the home page if the user doesn't have an access token
    if (!accessToken) {
        redirect("/");
    }

    return (
        <div className={"bg-white rounded-2xl w-[80%] sm:w-[30%] flex flex-col items-center justify-center p-5 border-1 border-[#8797B2] shadow-2xl"}>
            <h1 className={"text-3xl font-semibold m-2"}>User Info</h1>
            <img src={userInfo.picture}
                 alt={`${userInfo.name}'s profile picture`}
                 className={"rounded-full aspect-square w-[50%] m-2"}
            />
            <p className={"text-xl m-1"}>{userInfo.name}</p>
            <p className={"text-xl m-1 mb-5"}>{userInfo.email}</p>
            <p>Signed in with Google</p>
        </div>
    );
}