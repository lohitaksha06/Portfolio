export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-black text-white">
      <div className="text-center px-4">
        <h1
          className="glitch text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight relative"
          data-text="Hi, I'm Lohitaksha"
        >
          Hi, I'm Lohitaksha
        </h1>
        <p className="mt-4 text-lg text-zinc-300">Welcome to my profile</p>
      </div>
      {/* subtle scanline overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:100%_3px]" />
    </main>
  )
}