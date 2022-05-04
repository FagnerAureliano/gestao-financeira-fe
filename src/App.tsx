import { Formik, Field, Form, ErrorMessage } from "formik";
import "./App.css";

function App() {
  const initialValues = {
    email: "",
    password: "",
  };

  function onSubmit(values: any) {
    console.log(values)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Project Gestão Financeira </p>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}

          render={({ values }) => (
            <Form>
              <div>
                <div>
                  <label>Username</label>
                </div>
                <div>
                  <Field type="email" name="email" />

                  <ErrorMessage name="email" component="div" />

                </div>
              </div>
              <div>
                <div>
                  <label>Password</label>
                </div>
                <div>
                  <Field type="password" name="password"  />
                </div>
              </div>
              <button type="submit" > Submit </button>
            </Form>
          )}
        />
      </header>
    </div>
  );
}

export default App;
