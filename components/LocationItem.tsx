import { useRouter } from 'next/router';
import { Location } from '../locations/useGetLocations';

type LocationsItemProps = {
  location: Location;
};

const LocationsItem: React.FC<LocationsItemProps> = ({ location }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/residents/" + location.id);
  };

  return (
    <tr
      className="cursor-pointer group hover:bg-slate-200/10 transition-colors duration-300"
      onClick={onClick}
    >
      <td>{location.name}</td>
      <td>{location.type}</td>
      <td>{location.dimension}</td>
      <td>{location.residents?.length}</td>
      <td className="group-hover:text-green-600 transition-colors duration-300">
        <div className="text-xl scale-150 ">&#187;</div>
      </td>
    </tr>
  );
};

export default LocationsItem;