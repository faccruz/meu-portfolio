import Link from 'next/link';

export default function FabFitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto font-sans">
      
      {/* Menu de Navegação */}
      <nav className="flex justify-between items-center py-6 border-b border-slate-800 mb-8">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-2">
          ← Voltar para o Início
        </Link>
        <span className="text-xs font-mono text-slate-500">PROJETO DESTAQUE</span>
      </nav>

      {/* Cabeçalho do Projeto */}
      <section className="mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-3">FabFit</h1>
        <p className="text-xl text-cyan-400 font-medium mb-4">
          Plataforma de Gestão e Acompanhamento Fitness
        </p>
        <p className="text-slate-300 leading-relaxed text-lg">
          O FabFit é uma solução completa desenvolvida para gestão de rotinas, acompanhamento de evolução 
          e métricas de treino. Construído com arquitetura de alta performance, foco em usabilidade e API robusta.
        </p>
      </section>

      {/* Seção de Galeria de Imagens */}
      <section className="mb-12">
  <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-semibold">
    DEMONSTRAÇÃO DO SISTEMA
  </h2>
  
  <div className="grid md:grid-cols-2 gap-6">
    {/* Card Imagem 1 */}
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-center overflow-hidden group">
      <img 
        src="/fabfit-dashboard.png" 
        alt="Dashboard de Métricas - FabFit" 
        className="w-full h-auto max-h-[350px] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
      />
      <p className="text-xs text-slate-400 mt-2 font-medium">Dashboard de Métricas</p>
    </div>

    {/* Card Imagem 2 */}
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-center overflow-hidden group">
      <img 
        src="/CadAluno.png" 
        alt="Cadastro de Aluno - FabFit" 
        className="w-full h-auto max-h-[350px] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
      />
      <p className="text-xs text-slate-400 mt-2 font-medium">Cadastro de Aluno</p>
    </div>
  </div>
</section>

      {/* Destaques Técnicos & Botão de Compra */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Adquira a Licença</h3>
          <p className="text-slate-400 text-sm max-w-md">
            Disponível para integração ou aquisição do projeto completo com documentação e suporte de implantação.
          </p>
        </div>

        {/* Link para Venda / Checkout / WhatsApp */}
        <a 
          href="https://wa.me/5515997382437?text=Olá,%20tenho%20interesse%20no%20FabFit!" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-500/20 whitespace-nowrap"
        >
          Comprar / Solicitar Demo →
        </a>
      </section>

    </main>
  );
}