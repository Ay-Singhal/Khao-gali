// src/pages/Contact.jsx
const Contact = () => (
  <main className="page section">
    <h1 className="heading">Contact Us</h1>

    <div className="grid gap-6 md:grid-cols-2">
      {/* simple contact form */}
      <form className="space-y-4 rounded-lg bg-gray-50 p-6 shadow">
        <input
          className="w-full rounded border border-gray-300 px-4 py-2"
          placeholder="Your name"
          required
        />
        <input
          type="email"
          className="w-full rounded border border-gray-300 px-4 py-2"
          placeholder="Email"
          required
        />
        <textarea
          rows="4"
          className="w-full rounded border border-gray-300 px-4 py-2"
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
        >
          Send
        </button>
      </form>

      {/* address / info block */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-2 text-lg font-semibold">Khao Gali HQ</h2>
        <p>42 React Lane</p>
        <p>Bengaluru, India</p>
        <p className="mt-4">
          <strong>Email:</strong> support@khaogali.io
        </p>
      </div>
    </div>
  </main>
);

export default Contact;
