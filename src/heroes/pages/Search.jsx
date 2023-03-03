import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from 'query-string'
import { getHeroesByName } from "../helpers";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if(searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  }

  return (
    <>
      <h1 className="titulos">Búsqueda</h1>
      <hr className="titulos"/>

      <div className="row">
        <div className="col-5">
          <h4 className="titulos">Buscando</h4>
          <hr className="titulos"/>
          <form onSubmit={ onSearchSubmit } aria-label="form">
            <input
              type="text"
              placeholder="Busca un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-primary mt-2">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4 className="titulos">Resultados</h4>
          <hr className="titulos"/>

          {/* {
            ( q === '' )
            ? <div className="alert alert-primary">Busca un héroe</div>
            : ( heroes.length === 0) 
              && <div className="alert alert-danger">No hay resultados con <b>{ q }</b></div>
          } */}

        <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none'}}>Busca un héroe</div>

        <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none'}}>No hay resultados con <b>{ q }</b></div>

          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  );
};
