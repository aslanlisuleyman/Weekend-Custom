import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import './AddPage.css'
import useHTTP from '../../../hooks/useHTTP'


const AddProduct = () => {
  const {  postData } = useHTTP('https://northwind.vercel.app/api/products');
  const formik = useFormik({
    initialValues: {
      name: '',
      unitPrice: ''
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.name || !values.unitPrice) {
        toast.error("Zəhmət olmasa boşluqları doldurun");
        return;
      }
      postData({ ...values });
      toast.success("Uğurla əlavə olundu")
      resetForm()
        
    }

    
  });
  

  return (
    <div className="div-container">
      <form onSubmit={formik.handleSubmit}>
        <label className="form-label" htmlFor="name">Name</label><br />
        <input className="input-field" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} /><br />

        <label className="form-label" htmlFor="unitPrice">Unit Price</label><br />
        <input className="input-field" id="unitPrice" name="unitPrice" type="text" onChange={formik.handleChange} value={formik.values.unitPrice} /><br />

        <button className="submit-button" type="submit">Submit</button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;
