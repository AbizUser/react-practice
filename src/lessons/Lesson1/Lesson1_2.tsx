import { ChangeEvent, useState } from "react";

const Lesson1_2 = () => {
    const [form, setForm] = useState({
      firstName: "code",
      lastName: "co",
      email: "@gmail.com",
    })
  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => 
            setForm(
              {
              firstName: e.target.value,
              lastName: form.lastName,
              email: form.email,
            })
          } 
          type="text" 
          className="border border-slate-500" />
        </label>
        <label>
          Last Name:
          <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => 
            setForm(
              {
              firstName: form.firstName,
              lastName: form.lastName,
              email: e.target.value,
            })
          } 
          type="text" 
          className="border border-slate-500" />
        </label>
        <label>
          Email:
          <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => 
            setForm(
              {
              firstName: form.firstName,
              lastName: form.lastName,
              email: e.target.value,
            })
          } 
          type="text" 
          className="border border-slate-500" />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
