import { useFormik } from "formik";
import React, { useEffect } from "react";
import axios from "axios";

// initial form value-
const formValues =  {
    _id: "",
    name: "",
    email: "",
    password: "",
}

// validate form-
const validate = (values) => {
    let errors = {};
    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    return errors;
}

const FormikPractice = () => {
    // form submit-
    const formik = useFormik({
        initialValues: formValues,
        validate,
        onSubmit: async (values) => {
            try{
                if(!formik.values._id){
                    const response = await axios.post("http://localhost:8000/api/v1/user", values);
                    console.log("response 39", response);
                }
                else{
                    const response = await axios.patch(`http://localhost:8000/api/v1/user/${formik.values._id}`, values);
                    console.log("response 39", response);
                }
            }
            catch(error){
                console.log(error);
            }
        }
    });

    // get-
    const getFunction = async () => {
        try{
            const response = await axios.get("http://localhost:8000/api/v1/user");
            const getData = response.data?.message;
            const newData = {
                _id: getData?._id || "", 
                name : getData?.name || "",
                email : getData?.email || "",
                password : getData?.password || ""
            }
            formik.setValues(newData);

        } 
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getFunction();
    }, [])

    console.log('formik', formik);


  return (
    <>
      <form style={{ border: "1px solid", width: "400px", margin: "auto" }} onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    style={{ border: "1px solid" }} 
                    name="name" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? <p style={{color:"red"}}>{formik.errors.name}</p> : null}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    style={{ border: "1px solid" }} 
                    name="email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? <p style={{color:"red"}}>{formik.errors.email}</p> : null}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    style={{ border: "1px solid" }} 
                    name="password" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? <p style={{color:"red"}}>{formik.errors.password}</p> : null}
            </div>
            {/* <div>
                <label htmlFor="category">Category</label>
                <select 
                    type="text"
                    style={{ border: "1px solid" }} 
                    name="category" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                >
                    <option value="coder">Coder</option>
                    <option value="developer">Developer</option>
                </select>
                {formik.errors.category && formik.touched.category ? <p style={{color:"red"}}>{formik.errors.category}</p> : null}
            </div> */}
            <div>
                <input type="submit" value={"Submit"} />
            </div>
      </form>
    </>
  );
};

export default FormikPractice;
