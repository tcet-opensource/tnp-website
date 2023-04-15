import "../../../styles.css";
const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        <div className="flex flex-col">
          <label className="text-sm pb-1 text-slate-600">First Name</label>
          <input
            placeholder="Eg: John Doe"
            type="text"
            className="h-11 bg-gray-100 border-2 border-gray-200 rounded-lg p-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm pb-1 text-slate-600 ">Last Name</label>
          <input
            type="text"
            className="h-11 bg-gray-100 border-2 border-gray-200 rounded-lg p-3"
            placeholder="yeah"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm pb-1 text-slate-600 ">Email</label>
        <input
          type="email"
          className="h-11 bg-gray-100 border-2 border-gray-200 rounded-lg p-3 placeholder:underline"
          placeholder="johnDoe@gmail.com"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm pb-1 text-slate-600 ">Message</label>
        <textarea
          name="message"
          id="text-area"
          cols={15}
          rows={5}
          className="bg-gray-100 border-2 border-gray-200 rounded-lg p-3"
          placeholder="Enter your message"
        />
      </div>
      <div className="flex flex-grow h-12 pt-3">
        <button
          className="flex flex-grow justify-center items-center bg-blue-600 rounded-lg p-3text-white text-white text-base"
          placeholder="message"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
