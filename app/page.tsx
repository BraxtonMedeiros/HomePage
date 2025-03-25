import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Braxton Medeiros</h1>
        <p className="mt-2 text-lg text-gray-600">
          First-generation college student studying Software Engineering at BYU–Idaho.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Project Card with Link */}
          <Link
            href="/currencyConverter"
            className="block p-4 border rounded-lg shadow hover:shadow-md transition hover:bg-gray-100"
          >
            <h3 className="text-lg font-bold">Currency Converter</h3>
            <p className="text-sm text-gray-600 mt-1">
              Convert between any currencies with live rates. Built with Firebase and Next.js.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
