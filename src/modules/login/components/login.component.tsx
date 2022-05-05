import { Formik, Field, Form, ErrorMessage } from "formik";
import "../../../App.css";

import validationSchema from "./schema";

const initialValues = {
  email: "",
  password: "",
};

function onSubmit(values: any) {
  console.log(values);
}

export default function Login() {
  return (
    <div className="App"> 
      <header className="App-header">
        {/* <h3>Heiser Fitness</h3> */}
        <label>Gestão Financeira</label>
        <br />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div>
              <div>
                <small>Username</small>
              </div>
              <div>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
            <div>
              <div>
                <small>Password</small>
              </div>
              <div>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
            </div>
            <button type="submit" > LOGIN </button>
          </Form>
        </Formik>
      </header>
    </div>
  );
}
