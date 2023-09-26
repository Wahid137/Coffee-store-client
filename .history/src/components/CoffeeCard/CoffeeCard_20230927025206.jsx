import { useLoaderData } from "react-router-dom";

const CoffeeCard = () => {
  const loadedCoffees = useLoaderData();
  return (
    <div>
      <h1>Card: {loadedCoffees.length}</h1>
    </div>
  );
};

export default CoffeeCard;
