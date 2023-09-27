import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
// import './Navbar.css'

export function Navbar() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    if(!title){
      navigate(`/`);
      reset();
    }
    else{
      navigate(`/search/${title}`);
      reset();
    }
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </InputSpace>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo do Breaking News" />
        </Link>

        <Button>Entrar</Button>
      </Nav>
      <Outlet />
    </>
  );
}
