"use client";
import Footer from "@/components/footer";
import Card from "@/components/card";
import Image from "next/image";

// 🆕 Update your data to include image URLs instead of descriptions
const data = [
  { id: 1, title: "Simply Asoebi", image: "/images/sa-logo.png", link: "https://www.simplyasoebi.com/", linktext:"simplyasoebi.com"  },
  { id: 2, title: "Pincher", image: "/images/pincher-logo.png", link: "https://pincher.onrender.com/", linktext:"pincher.com"   },
  { id: 3, title: "Medix Frontiers", image: "/images/medix-logo.png", link: "https://www.simplyasoebi.com/", linktext:""   },
  { id: 4, title: "Personal Website", image: "/images/emefo-logo4.png", link: "/", linktext:"emefo.dev"   },
  { id: 5, title: "Fifth Project", image: "/images/project5.jpg", link: "https://www.simplyasoebi.com/", linktext:""   },
];

// ✅ Updated CardList component to pass `image` instead of `description`
const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
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
          <h1 className="text-3xl font-bold">My Work</h1>
        </div>
        <CardList />
      </div>
     
    </div>
  );
}
