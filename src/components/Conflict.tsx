export default function Conflict() {
  return (
    <section className="bg-black py-20 px-4 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Big headline */}
        <div>
          <p className="text-[#E8630C] text-lg md:text-2xl font-light tracking-[6px] mb-4">
            O CONFLITO REAL
          </p>
          <h2 className="text-white text-3xl md:text-[48px] font-normal leading-[1.1] mb-6">
            O seu problema não é falta de esforço.{" "}
            <span className="text-[#E8630C]">É falta de clareza.</span>
          </h2>
          <p className="text-[#B2B2B2] text-lg leading-relaxed">
            Você vive uma dualidade constante: quando reduz plantões, a renda
            cai — e mesmo estudando mais, o desempenho não sobe como deveria.
            Quando mantém ou aumenta os plantões, a culpa aparece — porque você
            sente que está atrasando o projeto da residência.
          </p>
        </div>

        {/* Right — Checklist */}
        <div>
          <ul className="space-y-0">
            {[
              "Quando reduz plantões, a renda cai — e o desempenho não sobe como deveria",
              "Quando mantém os plantões, a culpa aparece — você sente que está atrasando",
              "Você faz simulados e provas na íntegra, mas o resultado não sai como esperado",
              "O mais frustrante não é errar — é não saber por que errou nem o que fazer depois",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-white text-base py-4 border-b border-[#272727]"
              >
                <span className="text-[#E8630C] text-lg shrink-0 mt-0.5">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
