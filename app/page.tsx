import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto font-sans">
      
      {/* Header Minimalista (SEM FOTO) */}
      <header className="py-12 border-b border-slate-800 flex items-center gap-6">
        {/* Placeholder de Avatar Moderno com Iniciais */}
        <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-inner">
          <span className="text-3xl font-bold text-cyan-400 font-mono">FC</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-extrabold mb-1.5 tracking-tight text-white">Fábio Cruz</h1>
          <p className="text-xl text-cyan-400 font-medium tracking-wide">Desenvolvedor Backend C# .NET</p>
        </div>
      </header>

      {/* Seção Sobre Mim */}
      <section className="py-10">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-3 font-semibold">SOBRE MIM</h2>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          Especialista em construção de APIs RESTful robustas, microsserviços, 
          Entity Framework Core, arquitetura limpa e integrações de sistemas. Focado em 
          performance, escalabilidade e manutenibilidade do código.
        </p>
      </section>

      {/* Seção de Projetos Refinada */}
      <section className="py-10">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">PROJETOS EM DESTAQUE</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1: FabFit */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-500 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  FabFit
                </h3>
                <span className="text-emerald-400 text-xs font-mono bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-md">[PRODUTO]</span>
              </div>
              
              <p className="text-slate-400 text-base mb-6 leading-relaxed">
                Plataforma completa de gestão fitness e acompanhamento de treinos. Inclui métricas, dashboard intuitivo e ecossistema escalável.
              </p>
              
              <div className="flex flex-wrap gap-2.5 mb-8 text-xs text-cyan-200 font-mono">
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">.NET</span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">C#</span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">Web</span>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-5">
              <Link href="/fabfit" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm hover:underline flex items-center gap-1.5">
                Ver detalhes e demonstração →
              </Link>
            </div>
          </div>

          {/* Card 2: API RESTful .NET / EF Core */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-500 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  API RESTful .NET / EF Core
                </h3>
                <span className="text-slate-600 text-xs font-mono group-hover:text-cyan-500">[BACKEND]</span>
              </div>
              
              <p className="text-slate-400 text-base mb-6 leading-relaxed">
                Sistema de gestão de licenças e automações com autenticação JWT, PostgreSQL 
                e suporte a contêineres Docker para deploy simplificado.
              </p>
              
              <div className="flex flex-wrap gap-2.5 mb-8 text-xs text-cyan-200 font-mono">
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">C#</span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">.NET 8</span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">EF Core</span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">Docker</span>
              </div>
            </div>
            
            <div className="flex gap-5 text-sm font-semibold border-t border-slate-800 pt-5">
              <a href="https://github.com/faccruz" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Contato
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}