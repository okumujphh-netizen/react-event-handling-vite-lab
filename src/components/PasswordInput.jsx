// Code PasswordInput Component Here


function PasswordInput() {
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <input
      type="password"
      onChange={handleChange}
      placeholder="Enter your password"
    />
  );
}

export default PasswordInput;