"use client";
import Card from "@/components/card";

// 🆕 Update your data to include image URLs instead of descriptions
const data = [
  { id: 1, title: "Simply Asoebi", image: "/images/sa-logo.webp", link: "https://www.simplyasoebi.com/", linktext:"simplyasoebi.com"  },
  { id: 2, title: "Pincher", image: "/images/pincherlogo.webp", link: "https://pincher.onrender.com/", linktext:"pincher.onrender.com"   },
  { id: 3, title: "Medix Frontiers", image: "/images/medix-logo.png", link: "https://github.com/codefather99/Medix-Frontiers-2.0", linktext:"Github"   },
  { id: 4, title: "Personal Website", image: "/images/emefo-logo4.png", link: "/", linktext:"emefo.dev"   },
  { id: 5, title: "NFT Hub", image: "/images/nfthub-logo.webp", link: "/work", linktext:"Coming Soon"   },
];

// ✅ Updated CardList component to pass `image` instead of `description`
const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4  max-w-screen-xl mx-auto">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.image}
          link={item.link}
          linktext= {item.linktext}
        />
      ))}
    </div>
  );
};

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="py-16 flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A192F]">My Work</h1>
        <br />
          <p className="text-[#00BFA5] px-4 font-inter mb-10">Signature Projects from My Professional Journey</p>
        </div>
        <CardList />
      </div>
     
    </div>
  );
}
