import { Formik, Field, Form, ErrorMessage } from "formik";

import validationSchema from "./schema";

const initialValues = {
  email: "",
  password: "",
};

function onSubmit(values: any) {
  console.log(values);
}


export function Login() {
  return (
    <div className="App"> 
      <header className="App-header">
        {/* <h3>Heiser Fitness</h3> */}
        <label className="">Gestão Financeira</label>
        
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
                <Field className="rounded-sm" type="email" name="email" />
                <ErrorMessage className="text-yellow-300 text-sm" name="email" component="div" />
              </div>
            </div>
            <div>
              <div>
                <small>Password</small>
              </div>
              <div>
                <Field className="rounded-sm" type="password" name="password" />
                <ErrorMessage className="text-yellow-300 text-sm"  name="password" component="div" />
              </div>
            </div>
            <div className="">
            <button className="bg-green-600 hover:bg-green-500 rounded-lg px-20 h-6 transition-colors text-white flex m-4 items-center group" type="submit" > LOGIN </button>
            </div>
          </Form>
        </Formik>
      </header>
    </div>
  );
}
