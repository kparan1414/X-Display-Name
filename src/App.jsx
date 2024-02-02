import { useState } from "react";

function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (key, event) => {
    console.log(name);
    setName((prevName) => {
      return { ...prevName, [key]: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => {
              handleChange("firstName", e);
            }}
            value={name.firstName}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => {
              handleChange("lastName", e);
            }}
            value={name.lastName}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Full Name: {`${name.firstName} ${name.lastName}`}</p>}
    </div>
  );
}

export default App;
