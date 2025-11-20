import AdactionVideo from "../assets/Adaction.mp4";
import logismVideo from "../assets/logism.mp4"


export default function Projets({ }: {}) {
  const work = [
    {
      Nom: "AdAction",
      Description:
        "AdAction est une plateforme web qui aide les associations à organiser leurs collectes de déchets.",
      video: AdactionVideo,
      link: "https://github.com/adatechschool/frida-adaction-samirmeriemjosephine",
    },
    {
      Nom:"Logism",
      Description:"Logisim est un simulateur de circuits logiques. Il est écrit en Java ",
      video:logismVideo,
      link:"https://gitlab.sorbonne-paris-nord.fr/ndy_code/archsimul_aknymd.git"
    }
  ];

  return (
  <div className="py-10 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
      Mes Projets
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {work.map((item, id) => (
        <div
          key={id}
          className="bg-white/10 backdrop-blur-lg border border-gray-700 shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.Nom}</h3>
          <p className="text-gray-300 mb-4">{item.Description}</p>

          <div className="mb-4">
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item.video} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-blue-400/40 transition-all duration-300"
          >
            Voir le projet
          </a>
        </div>
      ))}
    </div>
  </div>
);

}
