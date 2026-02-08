"use client";
import { useState } from "react";

export default function Home() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noStyle, setNoStyle] = useState({});

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoStyle({ transform: `translate(${x}px, ${y}px)` });
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-black-300 to-red-800 overflow-hidden">
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-sm w-full animate-in zoom-in md:max-w-3xl md:p-16">
          {!yesClicked ? (
            <>
              <h1 className="text-3xl font-bold text-pink-500 mb-2 md:text-7xl">
                Will you be my Valentine? 💘
              </h1>
              <p className="text-gray-600 m-4 text-3xl md:m-8">Feb. 14, 2026</p>

              <div className="flex justify-center gap-4 relative">
                <button
                  onClick={() => setYesClicked(true)}
                  className="px-6 py-2 max-w-[200] w-full block h-12 rounded-full bg-pink-500 text-white font-semibold hover:scale-105 transition cursor-pointer"
                >
                  Yes 💖
                </button>

                <button
                  onMouseEnter={moveNoButton}
                  style={noStyle}
                  className="px-6 py-2 max-w-[200] w-full block h-12 rounded-full bg-gray-200 text-gray-700 transition"
                >
                  No 🙃
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold text-pink-500 mb-2 md:text-6xl">
                YAY 🥰 <span className="block m-5">HA-VAL-DAY!!</span>
              </h2>
              <p className="text-gray-600 text-3xl">
                You just made my heart very happy 💕
              </p>
              <a
                  href="/"
                  className="px-6 py-2 max-w-[200] w-full block h-12 leading-8 mx-auto mt-5 rounded-full bg-pink-500 text-white font-semibold hover:scale-105 transition cursor-pointer"
                >
                  Lezgaur!
                </a>
              <FloatingHearts />
            </>
          )}
        </div>
      </main>
      <footer className="text-center p-4">
        Copyright &copy; 2026 | Made with Love
      </footer>
    </div>
  );
}

function FloatingHearts() {
  const emojis = ["💖", "💕", "💐",, "❤️", "🌸"];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: 80 }).map((_, i) => {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        return (
          <span
            key={i}
            className="absolute bottom-0 animate-float"
            style={{
              left: Math.random() * 100 + "vw",
              animationDuration: 2 + Math.random() * 4 + "s",
              fontSize: 14 + Math.random() * 32,
              animationDelay: Math.random() * 2 + "s",
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
