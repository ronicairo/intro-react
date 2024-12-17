function Player() {
  const score = 85; // Vous pouvez changer cette valeur pour tester

  return (
    <div>
      {score > 30 ? (
        <p>Vainqueur avec un score de {score}</p>
      ) : (
        <p>Perdant avec un score de {score}</p>
      )}
    </div>
  );
}

export default Player;