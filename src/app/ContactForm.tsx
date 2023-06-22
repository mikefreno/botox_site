"use client";

export default function ContactForm() {
  const sendContactEmail = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={sendContactEmail}>
        <div className="flex flex-row justify-between">
          <div className="input-group mx-1">
            <input type="text" required className="bg-transparent" />
            <span className="bar"></span>
            <label>Name</label>
          </div>
          <div className="input-group mx-1">
            <input type="text" required className="bg-transparent" />
            <span className="bar"></span>
            <label>Email</label>
          </div>
        </div>
        <div className="textarea-group w-full">
          <textarea required className="w-full bg-transparent"></textarea>
          <span className="bar"></span>
          <label>Message</label>
        </div>
      </form>
    </>
  );
}
