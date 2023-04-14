import "../../../styles.css";
const ContactForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        <div className="flex flex-col">
          <label className="text-sm text-[#475467]">First Name</label>
          <input
            placeholder="Eg: John Doe"
            type="text"
            className="h-11 bg-[#f9fafb] rounded-lg p-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-[#475467]">Last Name</label>
          <input
            type="text"
            className="h-11 bg-[#f9fafb] rounded-lg p-3"
            placeholder="yeah"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-[#475467]">Email</label>
        <input
          type="email"
          className="h-11 bg-[#f9fafb] rounded-lg p-3"
          placeholder="yeah"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-[#475467]">Message</label>
        <textarea
          name="message"
          id="text-area"
          cols={15}
          rows={5}
          className="bg-[#f9fafb] rounded-lg p-3"
        />
      </div>
      <div className="flex flex-grow h-12 pt-3">
        <button
          className="flex flex-grow justify-center items-center bg-[#1570EF] rounded-lg p-3text-white text-white text-xl"
          placeholder="message"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
