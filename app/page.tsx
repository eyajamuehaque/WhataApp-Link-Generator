import WhatsAppGenerator from "@/components/whatsapp-generator"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-500/30 px-4 py-1.5 text-sm font-medium text-green-400 shadow-lg shadow-green-500/20">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Free Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent md:text-6xl">
              WhatsApp Link Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Create instant WhatsApp chat links without saving contacts. Perfect for businesses, customer support, and
              quick connections.
            </p>
          </div>

         
          <WhatsAppGenerator />

         
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-green-500/30 bg-gradient-to-br from-slate-900/90 to-green-950/50 p-6 backdrop-blur-sm transition-all hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-lg shadow-green-500/20">
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Instant Connection</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Skip the hassle of saving contacts. Generate links that open WhatsApp chats instantly.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-900/90 to-purple-950/50 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-lg shadow-purple-500/20">
                <svg
                  className="h-5 w-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">100% Secure</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                All processing happens in your browser. No data is stored or transmitted to any server.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-blue-500/30 bg-gradient-to-br from-slate-900/90 to-blue-950/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 shadow-lg shadow-blue-500/20">
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Mobile Friendly</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Works seamlessly on all devices. Generate and share links from anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
