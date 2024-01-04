import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './login.styles.scss';

const Login = () => {
  return (
    <div className="form-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Login; 