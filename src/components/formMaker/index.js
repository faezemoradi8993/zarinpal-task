import React from "react";
import { useDispatch} from 'react-redux'

const FormMaker = ({ formData , func }) => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    // dispatch(func())
    e.preventDefault();
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
