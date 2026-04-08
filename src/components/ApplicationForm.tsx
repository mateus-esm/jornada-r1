"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink =
    "https://wa.me/558597115137?text=Quero%20conhecer%20a%20jornada%20do%20R1";

  if (submitted) {
    return (
      <section id="aplicacao" className="bg-white py-20 px-4 md:px-[60px]">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="text-5xl mb-6">✓</div>
          <h2 className="text-black text-3xl font-semibold mb-4">
            Aplicação enviada!
          </h2>
          <p className="text-[#7A7A7A] text-lg mb-8">
            Recebemos seus dados. Para agilizar o processo, fale diretamente com
            George Sales no WhatsApp:
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-[#1da851] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.584-1.466A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.809-6.243-2.16l-.436-.348-2.726.871.892-2.657-.379-.46A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Falar com George no WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="aplicacao" className="bg-white py-20 px-4 md:px-[60px]">
      <div className="max-w-[700px] mx-auto">
        <p className="text-[#E8630C] text-sm font-bold tracking-[4px] uppercase text-center mb-2">
          APLICAÇÃO
        </p>
        <h2 className="text-black text-3xl md:text-4xl font-semibold text-center mb-4">
          Aplique para a Jornada do R1
        </h2>
        <p className="text-[#7A7A7A] text-base text-center max-w-[500px] mx-auto mb-10">
          Preencha o formulário abaixo para que possamos entender seu momento e
          entrar em contato com você.
        </p>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());
            try {
              await fetch("http://72.61.219.156:5678/webhook/3880b715-f259-4740-9581-66dec7dda9a5", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
            } finally {
              setSubmitted(true);
            }
          }}
          className="space-y-5"
        >
          {/* Nome */}
          <div>
            <label className="block text-[#333] text-sm font-semibold mb-1.5">
              Nome completo
            </label>
            <input
              type="text"
              name="nome"
              required
              className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors"
              placeholder="Seu nome"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#333] text-sm font-semibold mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-[#333] text-sm font-semibold mb-1.5">
              WhatsApp
            </label>
            <input
              type="tel"
              name="whatsapp"
              required
              className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors"
              placeholder="(00) 00000-0000"
            />
          </div>

          {/* Especialidade */}
          <div>
            <label className="block text-[#333] text-sm font-semibold mb-1.5">
              Especialidade de interesse
            </label>
            <input
              type="text"
              name="especialidade"
              required
              className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors"
              placeholder="Ex: Clínica Médica, Cirurgia, Dermatologia..."
            />
          </div>

          {/* Prova de interesse */}
          <div>
            <label className="block text-[#333] text-sm font-semibold mb-1.5">
              Prova de interesse
            </label>
            <input
              type="text"
              name="prova"
              required
              className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors"
              placeholder="Ex: ENARE, USP, UNIFESP, Santa Casa..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Fase da Formação */}
            <div>
              <label className="block text-[#333] text-sm font-semibold mb-1.5">
                Fase da formação
              </label>
              <select
                name="fase"
                required
                className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors bg-white"
              >
                <option value="">Selecione</option>
                <option value="internato">Internato</option>
                <option value="formado">Formado</option>
              </select>
            </div>

            {/* Carga Horária de Plantões */}
            <div>
              <label className="block text-[#333] text-sm font-semibold mb-1.5">
                Carga horária de plantões/semana
              </label>
              <select
                name="carga_plantoes"
                required
                className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors bg-white"
              >
                <option value="">Selecione</option>
                <option value="0h-12h">0h – 12h</option>
                <option value="12h-36h">12h – 36h</option>
                <option value="36h-60h">36h – 60h</option>
                <option value="60h+">60h ou mais</option>
              </select>
            </div>
          </div>

          {/* Nível de preparação */}
          <div>
            <label className="block text-[#333] text-sm font-semibold mb-1.5">
              Nível de preparação atual
            </label>
            <select
              name="nivel"
              required
              className="w-full border border-[rgba(29,29,29,0.15)] rounded-lg px-4 py-3 text-[#333] text-base focus:outline-none focus:border-[#E8630C] transition-colors bg-white"
            >
              <option value="">Selecione</option>
              <option value="iniciando">Estou iniciando a preparação</option>
              <option value="6-12meses">Em preparação há 6 a 12 meses</option>
              <option value="mais-1ano">Em preparação há mais de 1 ano</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E8630C] border border-[#E8630C] text-white text-lg font-semibold py-4 rounded-lg hover:bg-[#c9530a] transition-colors cursor-pointer"
          >
            Enviar aplicação
          </button>

          <p className="text-[#999] text-xs text-center">
            Seus dados estão seguros e não serão compartilhados.
          </p>
        </form>
      </div>
    </section>
  );
}
