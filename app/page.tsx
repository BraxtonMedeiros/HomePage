import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="text-center flex flex-col items-center space-y-4">
        <Image
          src="/me.jpg"
          alt="Braxton Medeiros"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-300 shadow-md"
        />
        <h1 className="text-4xl font-bold">Braxton Medeiros</h1>
        <p className="mt-2 text-lg text-gray-600 max-w-xl">
          I'm a first-generation college graduate with a Bachelor's in Software Engineering from BYU–Idaho. I love building web apps that are fast, accessible, and meaningful.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Currency Converter */}
          <Link
            href="/currencyConverter"
            className="block p-4 border rounded-lg shadow hover:shadow-md transition hover:bg-gray-100"
          >
            <h3 className="text-lg font-bold">Currency Converter</h3>
            <p className="text-sm text-gray-600 mt-1">
              Convert between any currencies with live rates. Built with Firebase and Next.js.
            </p>
          </Link>

          {/* Pong Game */}
          <a
            href="https://github.com/BraxtonMedeiros/pongGame"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg shadow hover:shadow-md transition hover:bg-gray-100"
          >
            <h3 className="text-lg font-bold">Pong Game</h3>
            <p className="text-sm text-gray-600 mt-1">
              A classic Pong game built using HTML, CSS, and JavaScript. The left paddle is user-controlled with W/S or arrow keys, while the right paddle is an AI that gets tougher each round.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
