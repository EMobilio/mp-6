import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
      <main className={"flex absolute top-0 w-screen h-screen flex-col items-center pt-80"}>
        <div className={"flex flex-col justify-center items-center w-80 h-30 rounded-xl bg-white border-1 border-[#8797B2] shadow-2xl"}>
            <h2 className={"text-2xl font-semibold mb-2"}>OAuth</h2>
            <LoginButton />
        </div>
      </main>
  );
}
