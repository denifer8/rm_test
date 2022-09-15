import React from "react";

export default function Componentes(props) {
  const { personajes, setPersonajes } = props;

  const regresar = () => {
    setPersonajes(null);
  }
  console.log(personajes);
  return (
    <div >
      <h1>Personajes</h1>
      <button onClick={regresar}>Regresar</button>
      <div className="lista" >
        {personajes.map((personaje, index) => (
          <div key={index} className="card">
            <img src={personaje.image} alt={personaje.name} className="foto" />
            <div>
                <h3 className="nombre"> {personaje.name} </h3>  
            </div>
            <h6>
            {
                (personaje.status === "Alive" ?
                    <>
                    <span className="status alive" />
                    {personaje.status}
                    </>
                :
                    <>
                    <span className="status dead" />
                    {personaje.status}
                    </>
                )
            }
            </h6>

          </div>
        ))}
      </div>
    </div>
  );
}
