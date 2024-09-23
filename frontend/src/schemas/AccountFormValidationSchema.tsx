import * as Yup from "yup"


export const signUpFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Confirm password is required"),
})

export const signInFormSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Passwords are longer than 6 characters")
        .required("Password is required"),
})