import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Mario Camacho');

    navigate(lastPath, {
      replace: true,
    });
  };

  useEffect( () => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    }
  }, []);

  return (
      <div className="container mt-5 text-center center">
        <h1 className="login fw-bold">Login</h1>

        <button className="btn btn-primary button fs-6" onClick={onLogin}>
          Login
        </button>
      </div>
  );
};
