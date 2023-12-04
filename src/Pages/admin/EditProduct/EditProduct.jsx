
import React from 'react';
import './EditProduct.css';
import { useFormik } from 'formik';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast'
import useHTTP from '../../../hooks/useHTTP';


const EditProduct = () => {
    const { editData } = useHTTP("https://northwind.vercel.app/api/products");
  
    const formik = useFormik({
      initialValues: {
        id: "",
        name: "",
        unitPrice: "",
      },
      onSubmit: (values, { resetForm }) => {
        if (!values.name || !values.unitPrice || !values.id) {
          toast.error("Zəhmət olmasa boşluqları doldurun");
          return;
        }
  
        editData(values.id, { ...values }); 
        toast.success("Uğurla əlavə olundu");
        resetForm();
      },
    });
      

  return (
    <div className='edit'> 

 <div className="div-container">
      <form onSubmit={formik.handleSubmit}>
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <br />
        <input
          className="input-field"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />

        <label className="form-label" htmlFor="unitPrice">
          Unit Price
        </label>
        <br />
        <input
          className="input-field"
          id="unitPrice"
          name="unitPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.unitPrice}
        />
        <br />

        <label className="form-label" htmlFor="id">
          Product ID
        </label>
        <br />
        <input
          className="input-field"
          id="id"
          name="id"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        <br />

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <Toaster/>
    </div>




    </div>
   
  );
};

export default EditProduct;
