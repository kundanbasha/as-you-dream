import { ChangeEvent, useState } from "react";
import formStyles from "./contact-form.module.scss";
import { FormEvent } from "react";

export default function ContactForm() {
  const [contactDetails, setContactDetails] = useState({
    "Full Name": "",
    "Mobile Number": "",
    Email: "",
    "Town/City": "",
    "Additional Notes": "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: any = document.getElementById("contact-form");

    const data = new FormData(form);
    const action =
      "https://script.google.com/macros/s/AKfycbxfbJxosuuaVqUGiv4InP_8RWEBpm9gsIcNIACHrKYUKfQdrCjy2TcbCgDqzpTH2Zfk/exec";
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert(
        "Success! Your request has been submitted to the As You Dream team. We appreciate your interest and will be connecting with you soon to discuss your event needs. Together, let's bring your dream event to life."
      );
      setContactDetails({
        "Full Name": "",
        "Mobile Number": "",
        Email: "",
        "Town/City": "",
        "Additional Notes": "",
      });
    });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  return (
    <form
      id="contact-form"
      className={formStyles["contact-form-container"]}
      onSubmit={handleSubmit}
    >
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        value={contactDetails["Full Name"]}
        name="Full Name"
        placeholder="eg: As you dream"
        onChange={onChange}
      />

      <label htmlFor="mobileNumber">Mobile Number</label>
      <input
        id="mobileNumber"
        name="Mobile Number"
        type="number"
        value={contactDetails["Mobile Number"]}
        placeholder="eg: xxxxxxxxx"
        onChange={onChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="Email"
        value={contactDetails.Email}
        placeholder="eg: mail@mail.com"
        onChange={onChange}
      />

      <label htmlFor="city">Town/City</label>
      <input
        id="city"
        type="text"
        name="Town/City"
        value={contactDetails["Town/City"]}
        placeholder="eg: Hyderabad"
        onChange={onChange}
      />

      <label htmlFor="additionalNotes">Additional Notes</label>
      <textarea
        name="Additional Notes"
        id="additionalNotes"
        value={contactDetails["Additional Notes"]}
        onChange={onChange}
        placeholder="eg: ABHB colony, opp to DLF
              cybercity, Gachibowli, Hyderabad"
      />
      <button>Submit</button>
    </form>
  );
}
