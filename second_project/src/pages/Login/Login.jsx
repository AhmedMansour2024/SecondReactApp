import { Field, Form, Formik, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css"
import loginSchema from "../../schemas/login";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../rtk/slices/authSlice";

export default function Login() {
    const dispatch = useDispatch();
    const authData = useSelector(state => state.authSlice)

    async function loginHandler(values) {
        const res = await fetch(`http://localhost:3000/users?email=${values.email}&password=${values.password}`);
        const data = await res.json();

        if (data.length > 0) {
            dispatch(login(data[0]))
        }

    }

    return (
        <div className="formik">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={loginHandler}

            >
                <Form className="user__form my-5">
                    <div className="d-flex flex-column gap-2 mb-3">
                        <label htmlFor="">Email:</label>
                        <Field name="email" placeholder="Email:" type="email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div className="d-flex flex-column gap-2 mb-3">
                        <label htmlFor="">Password:</label>
                        <Field name="password" placeholder="Password:" type="password" />
                        <ErrorMessage name="password" />
                    </div>
                    <div>
                        Don{"'"}t Have an account? <Link to="/Register">Create New Account</Link>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit" className="mt-2">
                            Login
                        </Button>
                    </div>

                </Form>
            </Formik>
        </div>
    )
}
