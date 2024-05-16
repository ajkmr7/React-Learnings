import headerLogo from "../../assets/react-core-concepts.png";

import "./Header.css";

const reactDescriptions = ["Fundamental", "Core", "Crucial"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={headerLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
