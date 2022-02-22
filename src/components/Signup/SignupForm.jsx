import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(6, "Must be 6 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Please enter a valid email addres"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Pass must be 7 to 19 characters and contain at least one letter, one number and a speacil character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          "Must be valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors.password);

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && (
          <p className="errorMsg"> {formik.errors.name} </p>
        )}
        <label> Email Address </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="errorMsg"> {formik.errors.email} </p>
        )}
        <label> Password </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && (
          <p className="errorMsg"> {formik.errors.password} </p>
        )}
        <label> Comfirmed Password </label>
        <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
        )}
        <label> Phone Number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone"
        />
        {formik.errors.phone && (
          <p className="errorMsg"> {formik.errors.phone} </p>
        )}
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default SignupForm;
