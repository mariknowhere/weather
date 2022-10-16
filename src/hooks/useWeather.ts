import { IDayCardProps } from "../blocks/dayCard/DayCardTypes";

interface IGeoProps {
  lat: string;
  lng: string;
}

interface IAddressProps {
  geo: IGeoProps;
}

interface IDayProps {
  address: IAddressProps
}

export const useWeather = async () => {
  let count = 0;
  let weatherActual = [] as IDayCardProps[];

  // создаем GET запрос за данными (API Weather был платный, я делаю запрос за users где их гео-координаты адреса имитируют погоду)
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const weather = await response.json();

  const date = new Date();

  // берем массив данных который нам пришел из нашего GET запроса и рефакторим их в нужный нам формат через map()
  weather.map((day: IDayProps) => {
    const minimum = parseInt(day.address.geo.lat);
    const maximum = parseInt(day.address.geo.lng);

    let dayActual = {
      minimum: minimum,
      maximum: maximum,
      day: date.getDate() + count, // сегодняшнее число + count(с каждой итерацией будет увеличен на 1)
    }

    count++; // увеличение на 1

    return weatherActual.push(dayActual); // пушим объект в изначально пустой массив, где будут хранятся наши дни погоды
  })

  return [ ...weatherActual ]
}
