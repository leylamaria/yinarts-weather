import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
            and is{" "}
            <a
              href="https://github.com/leylamaria/yinarts-weather"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
