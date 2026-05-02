import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-md">
      
      <h1 className="text-pink-400 font-bold text-xl">
        movies 2 enjoy
      </h1>

      <nav className="flex gap-3">
        <button className="px-4 py-2 rounded-full bg-gray-800 text-pink-400 hover:bg-gray-700 active:scale-95 transition">
          Home
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-800 text-pink-400 hover:bg-gray-700 active:scale-95 transition">
          Video
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-800 text-pink-400 hover:bg-gray-700 active:scale-95 transition">
          Timer
        </button>
      </nav>
    </header>
  );
}