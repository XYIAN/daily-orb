export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-100 to-green-300">
      <div className="text-center">
        {/* Orb animation will go here */}
        <div className="w-32 h-32 rounded-full bg-green-400 shadow-lg mx-auto mb-6 animate-pulse" />
        <p className="text-lg text-green-900">
          Tap the orb for today&apos;s magic!
        </p>
      </div>
    </main>
  );
}
