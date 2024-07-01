import SavedThings from "./(logged)/saved_things/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
        <div className="h-full max-w-5xl items-center font-mono text-sm lg:flex">
          <SavedThings />
       </div>
    </main>
  );
}
