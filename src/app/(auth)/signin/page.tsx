import React from "react";

export default function page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <button className="bg-black px-16 py-4 text-white">
        Sign in with Google
      </button>
      <button className="bg-gray-700 px-16 py-4 text-white">
        Sign in with Guitub
      </button>
    </div>
  );
}
