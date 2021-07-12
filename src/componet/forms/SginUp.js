import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UUID from "react-uuid";
import Localbase from "localbase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let db = new Localbase("db");

const validationSchema = Yup.object({
    
    username: Yup.string().required("This field is required"),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().required('Confirm password is required')
   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const signupData ={
    username:"",
    password:"",
    passwordConfirmation:""
  }

  toast.configure();

const notify_success = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notify_error = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};




function SginUp({setopenModal}) {

    const creatAccount = (data)=>{
        data.id= UUID()
        db.collection('users').add(data).then(res =>{
            notify_success("Account created successfully")
            setopenModal(false)
        })
    }

    const formik = useFormik({
        initialValues: signupData,
        onSubmit: (values) => {
          
            db.collection('users').get().then(users => {
              
                let isfound = users.find(x=> (x.username === values.username))

               let found = isfound?.username || false

                    !found ?creatAccount(values) : notify_error("Sorry! Username already taken")

            
              })
            
           
          formik.resetForm();
        },
        validationSchema: validationSchema,
      });
    



    return (
        <div>
        <form  onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              id="name"
              label="username"
              margin="normal"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
         
        
          <div>
            <TextField
             value={formik.values.password}
              id="password"
              label="password"
              type="password"
              margin="normal"
              name="password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
          <div>
            <TextField
             value={formik.values.passwordConfirmation}
              id="passwordConfirmation"
              label="confirm password"
              type="password"
              margin="normal"
              name="passwordConfirmation"
              onChange={formik.handleChange}
              error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
              helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
          <Button
           variant="contained"
            fullWidth
            color="primary"
            type="submit"
          >
            Create Account
          </Button>
        </form>
        </div>
    )
}

export default SginUp


