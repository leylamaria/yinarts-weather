import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Buen Hombre" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://yinarts.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Leyla Maria{" "}
            </a>
            is open-sourced on{" "}
            <a
              href="https://github.com/leylamaria/yinarts-weather"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
            and hosted on{" "}
            <a
              href="https://yinarts-weather.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
