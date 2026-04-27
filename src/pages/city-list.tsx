import Loader from "../components/loader";
import { Message } from "../components/message";

function formatData(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

interface CityType {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}
interface Props {
  isLoading: boolean;
  cities: CityType[];
}
export default function CitiesList({ cities, isLoading }: Props) {
  if (isLoading)
    return (
      <div className="my-auto">
        <Loader />
      </div>
    );
  if (cities.length === 0)
    return (
      <div className="mt-9">
        <Message message="Add your first city by clicking on a city on the map." />
      </div>
    );
  return (
    <ul className="flex flex-col gap-2 my-8">
      {cities.map((city) => (
        <li
          key={city.id}
          className="flex items-center-safe py-2 px-3 border-l-3 border-l-primary rounded-md bg-primary/10"
        >
          <span className="text-lg">{city.emoji}</span>
          <div className="flex flex-col ml-2 text-sm">
            <strong>{city.country}</strong>
            <span>{city.cityName}</span>
          </div>
          <time className="ml-auto text-sm">{formatData(city.date)}</time>
          <button className="text-sm bg-rose-100 text-rose-500 w-5 rounded-full aspect-square ml-2 hover:bg-rose-200 cursor-pointer duration-150">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}
