import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { postData } from "../../api";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from "../loading"

const FormMaker = ({ formData, endPoint }) => {
  const navigate = useNavigate();

  const {loading}=useSelector(state=>state.data)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(postData({endPoint,data}))
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
      {loading == "pending" ? <Loading /> : null}
    </div>
  );
};

export default FormMaker;
