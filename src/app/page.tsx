import SignIn from "./components/sign_in/sign-in";

export default function Home() {
  return (
    <main className="w-screen flex min-h-screen flex-col items-center justify-center p-24">
        <div className="w-screen h-full max-w-5xl items-center font-mono text-sm lg:flex">
          <SignIn />
       </div>
    </main>
  );
}
