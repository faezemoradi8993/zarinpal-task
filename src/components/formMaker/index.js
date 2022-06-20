import React from "react";

const FormMaker = ({ formData }) => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>{formData.titleform}</h1>
      <form onSubmit={handleSubmit}>
        {formData.field.map((formItem) => (
          <div>
            <label htmlFor={formItem.name}>{formItem.title}</label>
            <input name={formItem.name} type={formItem.type} />
          </div>
        ))}
        <button type="submit">{formData.titleform}</button>
      </form>
    </div>
  );
};

export default FormMaker;
