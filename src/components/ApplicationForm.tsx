"use client";

import { useRouter } from "next/navigation";

export default function ApplicationForm() {
  const router = useRouter();

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
            const form = e.currentTarget;
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());

            try {
              await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
            } finally {
              router.push("/obrigado");
            }
          }}
          className="space-y-5"
        >
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
                <option value="0h-12h">0h - 12h</option>
                <option value="12h-36h">12h - 36h</option>
                <option value="36h-60h">36h - 60h</option>
                <option value="60h+">60h ou mais</option>
              </select>
            </div>
          </div>

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
