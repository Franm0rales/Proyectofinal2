import { useState } from "react";
import LoginAlumno from "../../components/LoginAlumno/LoginAlumno";
import LoginEmpresa from "../../components/LoginEmpresa/LoginEmpresa";
import Registro from "../../components/Registro/Registro";
import RegistroEmpresa from "../../components/RegistroEmpresa/RegistroEmpresa";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function LoginAcount() {
  const [view, setView] = useState("Alumno");
  const { toggleUser,user } = useAuthContext();
  console.log(user)
  return (
    <div className="d-flex  justify-content-around pt-5">
      <nav className="col-5">
        <ul className="nav nav-tabs px-5">
          <li className="">
            <a
              type="button"
              onClick={() => {
                setView("Alumno");
                toggleUser();
              }}
              className="nav-link active text-dark "
            >
              Alumno
            </a>
          </li>
          <li className="">
            <a
              type="button"
              onClick={() => {setView("Empresa")
              toggleUser();}
            }
              className="nav-link active text-dark"
            >
              Empresa
            </a>
          </li>
        </ul>
        {view === "Alumno" ? <LoginAlumno /> : <LoginEmpresa />}
        {view === "Alumno" ? <Registro /> : <RegistroEmpresa />}
      </nav>
    </div>
  );
}
