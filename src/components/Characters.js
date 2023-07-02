import React from "react";

export const Characters = (props) => {
  const { characters, setCharacters } = props;

  const resetCharacters = () =>{
    setCharacters(null);
  }
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver al inicio</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Vivo
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Muerto
                  </>
                )}
              </h6>
              <p className="text-grey">
                <span>Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p className="text-grey">
                <span>Especie: </span>
                <span>{character.species}</span>
              </p>
              <p className="text-grey">
                <span>Genero: </span>
                <span>{character.gender}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver al inicio</span>
    </div>
  );
};
