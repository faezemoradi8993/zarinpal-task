import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from "../loading"

const FormMaker = ({ formData, func }) => {
  const { loading } = useSelector(state => state.products)
  const { loading: userLoading } = useSelector(state => state.users)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(func(data))
  };

  return (
    <div className="container">
      <div onClick={() => navigate(-1)} className="back_btn">بازگشت</div>
      <div className="box">
        <h1>{formData.titleform}</h1>
        <form className="flexCenter" onSubmit={handleSubmit(onSubmit)}>
          {formData.field.map((formItem) => (
            <div className="input" key={formItem.name}>
              <label htmlFor={formItem.name}>{formItem.title}</label>
              <input {...register(formItem.name.toString(), { required: true })} name={formItem.name} type={formItem.type} />
            </div>
          ))}
          <button className="button" type="submit">{formData.titleform}</button>
        </form>
      </div>
      {(loading == "pending" || userLoading == "pending") ? <Loading /> : null}
    </div>
  );
};

export default FormMaker;
