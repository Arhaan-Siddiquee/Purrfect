import React from "react";

const Contact = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-purple-700">Contact Us</h2>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input type="text" className="border p-2 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" className="border p-2 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea className="border p-2 rounded w-full" rows="4"></textarea>
        </div>
        <button className="bg-red text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
