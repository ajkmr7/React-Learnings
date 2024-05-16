export const CoreConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt="components image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
