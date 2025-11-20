export default function About() {
  return (
    <div className="relative max-w-3xl mx-auto p-8 mt-10 bg-gradient-to-b from-[#0d1a2d] to-[#10283f] text-white rounded-xl shadow-2xl border border-gray-700 hover:shadow-[#BED3C3]/20 transition duration-500">

      {/* Bandeau décoratif */}
      <div className="absolute -top-3 left-5 text-black px-3 py-1 text-sm font-semibold rounded-md shadow-md bg-[#BED3C3] hover:text-[#BED3C3] transition">
        À propos
      </div>

      {/* Titre */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-[#BED3C3] hover:text-[#BED3C3] transition">
        <i className="fa-solid fa-user"></i>
        À propos de moi
      </h2>

      {/* Paragraphe 1 */}
      <p className="mb-5 leading-relaxed text-gray-200">
        Passionné par l'informatique et le développement web, j'ai obtenu mon 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> Baccalauréat en Mathématiques (mention Bien)</span> 
        en 2021 en Algérie. J'ai ensuite poursuivi mes études à l'Université de Béjaïa, où j'ai acquis de solides compétences en 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> C</span> et en 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> Unix/Linux</span>, tout en consolidant mes bases en analyse et algèbre mathématique.
      </p>

      {/* Paragraphe 2 */}
      <p className="mb-5 leading-relaxed text-gray-200">
        Depuis 2022, j'ai étudié en France à 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> Sorbonne Paris Nord</span>, complétant deux années en tronc commun informatique. 
        J'ai ensuite choisi de me spécialiser en 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> développement web Full-Stack et Mobile</span> 
        via un Bachelor 3, où j'ai maîtrisé des technologies telles que 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> React, Node.js, Express</span> ainsi que 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> PostgreSQL</span>.
      </p>

      {/* Paragraphe 3 */}
      <p className="mb-5 leading-relaxed text-gray-200">
        Mes compétences s'étendent également à l'
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> administration système, réseaux et sécurité</span>, 
        incluant la gestion de connexions SSH, la création de sockets client-serveur en C, et l’optimisation d’algorithmes. 
        J’accorde une grande importance à l’apprentissage continu et à l’amélioration de mes compétences.
      </p>

      {/* Paragraphe 4 */}
      <p className="leading-relaxed text-gray-200">
        À long terme, j’envisage de poursuivre un 
        <span className="font-semibold text-[#BED3C3] hover:text-[#BED3C3] transition"> Master en Cybersécurité</span> 
        afin de combiner mes connaissances en développement et en systèmes avec les enjeux de sécurité actuels, 
        et concevoir des solutions fiables, performantes et sécurisées.
      </p>

    </div>
  );
}
