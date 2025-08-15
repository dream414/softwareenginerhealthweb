import { useState } from "react";

export default function SimpleForm() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    setTimeout(() => {
      const newErrors = {};
      if (!data.name.trim()) {
        newErrors.name = "Name is required.";
      }
      if (!data.email.includes("@")) {
        newErrors.email = "Enter a valid email.";
      }
      if (data.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
      }

      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
      } else {
        alert("Form submitted successfully!");
        setData({ name: "", email: "", password: "" }); // ✅ Sirf success par clear
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <>
    <div id="contact" className="relative w-vw h-110 flex items-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/form.jpg')" }}>
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 bg-white/20 shadow rounded space-y-4 h-80"
    >
      <h2 className="text-4xl font-bold text-center text-red-500">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      {error.name && <div className="p-2 text-red-700">{error.name}</div>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      {error.email && <div className="p-2 text-red-700">{error.email}</div>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      {error.password && <div className="p-2 text-red-700">{error.password}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50 cursor-pointer hover:bg-blue-400 transition"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
    </div>
    </>
  );
}
