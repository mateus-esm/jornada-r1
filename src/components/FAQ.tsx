"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Para quem é a Jornada do R1?",
    answer:
      "Para médicos formados ou no último ano que já decidiram fazer residência médica, mas sentem que estão estudando sem clareza, sem método e sem acompanhamento. Se você sente que está se esforçando mas não avançando, a Jornada é para você.",
  },
  {
    question: "Quanto tempo dura a mentoria?",
    answer:
      "A Jornada do R1 tem acompanhamento contínuo até o final de suas provas, com diagnósticos, ajustes de rota e suporte.",
  },
  {
    question: "É um curso com videoaulas?",
    answer:
      "Não. A Jornada do R1 não é um curso para assistir. É uma rota para seguir. Você terá acompanhamento personalizado, plano de estudos adaptativo e correções de rota — não apenas conteúdo passivo.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer:
      "Tudo começa com um diagnóstico real do seu momento. A partir dele, montamos um plano de estudos personalizado. Ao longo do acompanhamento, fazemos ajustes contínuos baseados nos seus resultados de simulados e métricas de progresso.",
  },
  {
    question: "Vocês garantem aprovação?",
    answer:
      "Não podemos prometer aprovação — isso depende da sua execução. Mas garantimos que dentro da Jornada do R1, você será um médico preparado para enfrentar o caminho da aprovação na residência médica com método, clareza e direção.",
  },
  {
    question: "Posso parcelar?",
    answer:
      "Sim. Oferecemos parcelamento em até 12x no cartão de crédito. Também temos opção de pagamento à vista com desconto. Entre em contato para saber as condições.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Oferecemos 7 dias de garantia incondicional. Se dentro desse período você sentir que a Jornada não é para você, devolvemos 100% do valor investido.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-black py-20 px-4 md:px-[60px]">
      <div className="max-w-[800px] mx-auto">
        <p className="text-[#E8630C] text-sm font-bold tracking-[4px] uppercase text-center mb-2">
          FAQ
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#272727]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-5 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="text-white text-lg font-semibold pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-[#E8630C] text-2xl shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
                style={{
                  maxHeight: openIndex === i ? "500px" : "0",
                  paddingBottom: openIndex === i ? "20px" : "0",
                }}
              >
                <p className="text-[#B2B2B2] text-base leading-relaxed pr-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
