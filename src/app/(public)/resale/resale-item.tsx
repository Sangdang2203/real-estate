import { Unit } from "@/app/libs/interfaces";
import ItemCard from "@/components/ItemCard";

interface Props {
  unit: Unit;
}

const ResaleItem = ({ unit }: Props) => {
  return <ItemCard item={unit} />;
};

export default ResaleItem;
