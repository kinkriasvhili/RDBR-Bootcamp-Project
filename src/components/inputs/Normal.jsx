export default function NormalInput({ formData, handleChange, inputName, type, name }) {
  return (
    <>
      <label>{inputName}*</label>
      <input
        type={type}
        name={name}
        value={formData ? formData[name] : ""}
        onChange={handleChange}
        required
      />
    </>
  );
}
