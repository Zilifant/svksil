// database

import type { PageLoad } from './$types';
import { dev } from '$app/environment';

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=40.74&longitude=-73.03&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,surface_pressure,cloudcover,visibility,windspeed_10m&daily=sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York';

export const load = (async ({ fetch }) => {
  if (dev) console.time('fetching from open-meteo...');
  const meteoResponse = await fetch(weatherUrl);
  const meteoJson = await meteoResponse.json();
  if (dev) console.timeEnd('fetching from open-meteo...');

  return { weatherData: meteoJson };
}) satisfies PageLoad;
