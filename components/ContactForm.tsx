import React from "react";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <form
      action="
    "
    >
      <h2 className="text-2xl font-bold text-white mb-5">Hubungi Saya</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nama Anda"
          name="nama"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email Anda"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>{" "}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Pesan Anda"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-purple-600 hover:bg-purple-700 rounded">
        Kirim Pesan
      </button>
    </form>
  );
}
