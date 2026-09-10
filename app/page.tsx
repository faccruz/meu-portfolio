export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto font-sans">
      {/* Apresentação */}
      <section className="py-12 border-b border-slate-800">
        <h1 className="text-4xl font-bold mb-2">Fábio Cruz</h1>
        <p className="text-xl text-cyan-400 mb-4 font-medium">Desenvolvedor Backend C# .NET</p>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Especialista em construção de APIs RESTful robustas, microsserviços, 
          Entity Framework Core, arquitetura limpa e integrações de sistemas.
        </p>
      </section>

      {/* Projetos */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-200">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card de Projeto .NET */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition duration-300 shadow-lg">
            <h3 className="text-lg font-bold mb-2 text-white">API RESTful .NET / EF Core</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Sistema de gestão de licenças e automações com autenticação JWT, PostgreSQL e suporte a contêineres Docker.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 text-xs text-cyan-300 font-mono">
              <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">C#</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">.NET</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">Docker</span>
            </div>
            <div className="flex gap-4 text-sm font-medium">
              <a href="https://github.com/faccruz" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                GitHub →
              </a>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 hover:underline">
                Contato / Vendas →
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}