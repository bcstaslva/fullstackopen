// Resolução dos exercício 1.3 e 1.5 da Part1

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts;
  return (
    <div>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((total, parts) => {
    return total + parts.exercises;
  }, 0);

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Desenvolvimento de Aplicação Half Stack',
    parts: [
      { name: 'Fundamentos da biblioteca React', exercises: 10 },
      { name: 'Ussado props para passar dados', exercises: 7 },
      { name: 'Estado de um componente', exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;