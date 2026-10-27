import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FabDesk | Fábio Cruz",
  description: "Plataforma Multi-Tenant de Helpdesk e Gestão de Chamados.",
};

export default function FabDeskPage() {
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
        <h1 className="text-4xl font-extrabold text-white mb-3">FabDesk</h1>
        <p className="text-xl text-cyan-400 font-medium mb-4">
          Plataforma Multi-Tenant de Helpdesk e Gestão de Chamados
        </p>
        <p className="text-slate-300 leading-relaxed text-lg">
          O FabDesk é uma solução completa para centralizar e gerenciar solicitações de TI e suporte técnico. 
          Construído com arquitetura multi-tenant escalável em ASP.NET Core e Entity Framework Core, o sistema oferece 
          separação clara de acessos por empresas, setores, categorias e perfis de utilizadores (Administrador, Técnico e Utilizador final).
        </p>
      </section>

      {/* Seção de Galeria de Imagens */}
      <section className="mb-12">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">
          DEMONSTRAÇÃO DO SISTEMA
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Imagem 1: Dashboard */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-between overflow-hidden group">
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden rounded-lg bg-slate-950">
              <img 
                src="/Dashboard_FabDesk.png" 
                alt="Dashboard Geral - FabDesk" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 font-medium text-center">Dashboard Geral de TI</p>
          </div>

          {/* Imagem 2: Abertura de Chamado */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-between overflow-hidden group">
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden rounded-lg bg-slate-950">
              <img 
                src="/Novo_Chamado.png" 
                alt="Abertura de Chamado - FabDesk" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 font-medium text-center">Abertura de Chamados</p>
          </div>

          {/* Imagem 3: Gestão de Utilizadores */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-between overflow-hidden group">
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden rounded-lg bg-slate-950">
              <img 
                src="/Utilizadores.png" 
                alt="Gestão de Utilizadores - FabDesk" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 font-medium text-center">Gestão de Utilizadores e Acessos</p>
          </div>

        </div>
      </section>

      {/* Destaques Técnicos & Botão de Compra */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Adquira a Licença / Código Fonte</h3>
          <p className="text-slate-400 text-sm max-w-md">
            Disponível para implantação corporativa ou aquisição do projeto completo com suporte.
          </p>
        </div>

        {/* Link para WhatsApp */}
        <a 
          href="https://wa.me/5515997382437?text=Olá,%20tenho%20interesse%20no%20FabDesk!" 
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