import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import UUID from "react-uuid";
import Localbase from "localbase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let db = new Localbase("db");



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

const validationSchema = Yup.object({
    
    username: Yup.string().required("This field is required"),
    password: Yup.string()
      .required("Please Enter your password")
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters,Uppercase,Lowercase, and character"
      // ),
  });



function Login({loginData,setAuth,setopenModal,setuser}) {

  
    const formik = useFormik({
        initialValues: loginData,
        onSubmit: (values) => {
            
            db.collection('users').get().then(users => {
              
                let isfound = users.find(x=> (x.username === values.username && x.password === values.password))

                let found = isfound? true : false ;
                setuser(isfound)

                if(found){
                    notify_success("Login successfully. You can vote now!")
                    setAuth(true)
                    formik.resetForm()
                    setopenModal(false)
                }else{
                    notify_error("Login failed")
                }
            
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
          <Button
           variant="contained"
            fullWidth
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
        </div>
    )
}

export default Login
