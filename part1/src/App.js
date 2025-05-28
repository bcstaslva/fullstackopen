// Resolução dos exercício 1.1 e 1.2 da Part1

const Header = () => {
  const course = 'Desenvolvimento de Aplicação Half Stack';

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({parts}) => {
  return (
    <div>
      <p>{parts[0].part} {parts[0].exercise}</p>
      <p>{parts[1].part} {parts[1].exercise}</p>
      <p>{parts[2].part} {parts[2].exercise}</p>
    </div>
  );
};

const Total = ({parts}) => {
  const total = parts.reduce((total, parts) => {
    return total + parts.exercise;
  }, 0);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const parts = [
    {part: 'Fundamentos da biblioteca React', exercise: 10},
    {part: 'Ussado props para passar dados', exercise: 7},
    {part: 'Estado de um componente', exercise: 14}
  ];

  return (
    <div>
      <Header />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;