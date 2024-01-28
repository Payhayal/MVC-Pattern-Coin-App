import { useFormik } from "formik";
import { useContext } from "react";
import { schema } from "./schema";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, signUser } = useContext(UserContext);
  const navigate = useNavigate();

  // console.log(user, signUser);

  // this is a hook that allows us to use form features
  const formik = useFormik({
    // we determine the initial values of the values to be kept in the form
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    // define validation rules
    validationSchema: schema,
    // it works when the form is submitted
    // there is no need to write e.preventDefault(); Formik has the function to do it
    onSubmit: async (values, actions) => {
      // simulates api request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // creates user account
      signUser(values);
      // clears the form
      actions.resetForm();
      // navigates to the main page
      navigate("/coins");
    },
  });
  // console.log(formik);
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/coin-logo.png" alt="" />
          <h3>
            Coin<span className="text-warning fs-bold">Ex</span>
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              autoComplete="off"
              className={formik.errors.email && formik.touched.email && "error"}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="ex:name@name.com"
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label>Age</label>
            <input
              name="age"
              value={formik.values.age}
              className={formik.errors.age && formik.touched.age && "error"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              placeholder="ex:33"
            />
            {formik.errors.age && formik.touched.age && (
              <p>{formik.errors.age}</p>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              autoComplete="off"
              name="password"
              value={formik.values.password}
              className={
                formik.errors.password && formik.touched.password && "error"
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              placeholder="••••••"
            />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "error"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              placeholder="••••••"
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p>{formik.errors.confirmPassword}</p>
              )}
          </div>

          <div className="check-wrapper">
            <div className="check">
              <input
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="checkbox"
                id="terms"
              />
              <label htmlFor="terms">I have read and accept the terms</label>
            </div>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms}</p>
            )}
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
