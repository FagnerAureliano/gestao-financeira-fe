import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string().required("This email is required!"),
  password: Yup.string().required("This pass is required!"),
});
