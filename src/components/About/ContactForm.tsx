import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4"
    action="mailto:tcet.tnp@thakureducation.org" method="GET"
    >
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        <span className="flex flex-col">
          <label className="text-sm pb-1 text-slate-600">First Name</label>
          <input
            placeholder="Eg: John Doe"
            type="text"
            className="h-11 bg-gray-50 border border-gray-200 rounded-lg p-3"
          />
        </span>
        <span className="flex flex-col">
          <label className="text-sm pb-1 text-slate-600 ">Last Name</label>
          <input
            type="text"
            className="h-11 bg-gray-50 border border-gray-200 rounded-lg p-3"
            placeholder="yeah"
          />
        </span>
      </div>
      <span className="flex flex-col">
        <label className="text-sm pb-1 text-slate-600 ">Subject</label>
        <input
          type="text"
          name="subject"
          className="h-11 bg-gray-50 border border-gray-200 rounded-lg p-3 placeholder:underline"
          placeholder="Request to..."
        />
      </span>
      <span className="flex flex-col">
        <label className="text-sm pb-1 text-slate-600 ">Message</label>
        <textarea
          name="body"
          id="text-area"
          cols={15}
          rows={5}
          className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          placeholder="Enter your message"
        />
      </span>
      <button
          className="flex w-max justify-center items-center bg-blue-500 rounded-lg py-2 px-12 text-white text-base
          hover:bg-blue-400 mt-2"
          placeholder="message"
          type="submit"
        >
          Submit
        </button>
    </form>
  );
};

export default ContactForm;
