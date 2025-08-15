import { useState } from "react";

export default function SixBoxesSlider() {
  const data = [
    { 
      img: "/1.jpg", 
      title: "Linus Torvalds", 
      desc: "Creator of Linux and Git, pioneer in open-source development.Designs and develops innovative software solutions, focusing on creating products that meet user needs while ensuring high performance and scalability." 
    },
    { 
      img: "/2.jpg", 
      title: "Margaret Hamilton", 
      desc: "Lead software engineer for NASA's Apollo missions.Transforms complex problems into simple, functional applications by using creativity, technical skills, and modern development practices." 
    },
    { 
      img: "/3.jpg", 
      title: "Guido van Rossum", 
      desc: "Creator of Python, one of the most popular programming languages.Writes clean, efficient, and maintainable code, ensuring that projects are easy to update, scale, and improve over time." 
    },
    { 
      img: "/4.jpg", 
      title: "James Gosling", 
      desc: "Father of Java, a language powering billions of devices.Passionate about technology and continuous learning, always exploring new tools and techniques to stay ahead in the industry." 
    },
    { 
      img: "/5.jpg", 
      title: "Ken Thompson", 
      desc: "Co-creator of UNIX, a foundation of modern operating systems.Collaborates with teams to deliver impactful products, bridging the gap between user requirements and technical implementation." 
    },
    { 
      img: "/6.jpg", 
      title: "Dennis Ritchie", 
      desc: "Creator of C programming language, shaping modern computing.Ensures software quality through thorough testing, reviews, and performance optimization for a seamless user experience." 
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-xl mx-auto text-center">
      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {data.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 p-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="mt-3 font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded transition cursor-pointer hover:bg-blue-400">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? "bg-amber-400" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
