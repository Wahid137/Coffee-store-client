import { useLoaderData } from "react-router-dom";

const CoffeeCard = () => {
  const loadedCoffees = useLoaderData();
  return (
    <div>
      <h1>Card</h1>
    </div>
  );
};

export default CoffeeCard;
