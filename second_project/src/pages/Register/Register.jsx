import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate, } from "react-router-dom";
import "./register.css"
import registerSchema from "../../schemas/register";

export default function Register() {
    const navigate = useNavigate();

    async function registerAccountHandler(values, { resetForm }) {
        delete values.confirmPassword;
        await fetch("http://localhost:3004/users", {
            method: "post",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        });
        resetForm();
        navigate('/Login')
    }

    return (
        <div className="formik">
            <Formik
                initialValues={
                    {
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }
                }
                validationSchema={registerSchema}

                onSubmit={registerAccountHandler}

            >

                <Form className="user__form my-5">
                    <div className="d-flex flex-column gap-2 mb-3">
                        <label htmlFor="">Full Name:</label>
                        <Field name="name" placeholder="Full Name:" type="text" />
                        <ErrorMessage name="name" />
                    </div>
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
                    <div className="d-flex flex-column gap-2 mb-3">
                        <label htmlFor="">Confirm Password:</label>
                        <Field name="confirmPassword" placeholder="Confirm Password:" type="password" />
                        <ErrorMessage name="confirmPassword" />
                    </div>
                    <div>
                        Already have an account? <Link to="/Login">Login Now</Link>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit" className="mt-2">
                            Register
                        </Button>
                    </div>

                </Form>

            </Formik>
        </div>
    )
}