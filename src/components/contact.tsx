import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData{
    name:string;
    prénom:string;
    email:string;
    message:string;
  }
export default function Cntct() {
  
  const[forma,setforma]=useState<FormData>({
    name:"",
    prénom:"",
    email:"",
    message:"",
  })

  const [success, setSuccess] = useState(false);

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
   const{name , value}=e.target;
   setforma((prev)=>({ ...prev,[name]:value})) ;
  }

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    emailjs
      .send(
 "service_s7blah2", //Service ID (EmailJS)
        "template_1j38uk1", // Template ID
        {...forma},              //formulaire envoyées
        "kZ21DXb6O2bjEQ-mr" //clé publique
      )
      .then(
        () => {
          console.log("Message envoyé :");
          setSuccess(true);
          setforma({
            name: "",
            prénom: "",         
            email: "",
            message: "",
          });
        },
        () => {
        alert("❌ Une erreur est survenue. Réessayez plus tard.");
        }
      );
  };

 return (
  <div className="p-8 mt-10 max-w-xl mx-auto bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl text-white">

    <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">
      Contactez-moi
    </h2>

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Nom */}
      <div>
        <label className="block mb-1 font-semibold text-gray-200">Nom</label>
        <input
          type="text"
          name="name"
          value={forma.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="w-full bg-white/20 border border-gray-500 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Prénom */}
      <div>
        <label className="block mb-1 font-semibold text-gray-200">Prénom</label>
        <input
          type="text"
          name="prénom"
          value={forma.prénom}
          onChange={handleChange}
          placeholder="Votre prénom"
          required
          className="w-full bg-white/20 border border-gray-500 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-semibold text-gray-200">Email</label>
        <input
          type="email"
          name="email"
          value={forma.email}
          onChange={handleChange}
          placeholder="exemple@email.com"
          required
          className="w-full bg-white/20 border border-gray-500 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 font-semibold text-gray-200">Message</label>
        <textarea
          name="message"
          value={forma.message}
          onChange={handleChange}
          placeholder="Votre message..."
          required
          className="w-full bg-white/20 border border-gray-500 rounded-lg p-3 h-32 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Bouton envoyer */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-blue-400/40 transition-all duration-300 transform hover:-translate-y-1"
      >
        Envoyer
      </button>

      {success && (
        <p className="text-green-400 font-semibold text-center">
          ✅ Merci ! Votre message a bien été envoyé.
        </p>
      )}

    </form>
  </div>
);
}