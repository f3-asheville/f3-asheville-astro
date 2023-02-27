import { useSanityClient, groq } from 'astro-sanity';
import type { iSchedules } from '../types';

const dummySchedules: iSchedules = [
  {
    AO: {
      location_geopoint: {
        _type: 'geopoint',
        lat: 35.594635,
        lng: -82.56195799999999,
      },
      location_name: 'SowTrue Seed Parking Lot',
      name: 'Mission',
      neighborhood: 'Asheville',
    },
    day: ['Saturday'],
    name: 'Mission',
    start_time: '07:00',
    style: 'Bootcamp',
  },
];

export async function getSchedules() {
  const query = groq`*[_type == "schedule"]{day, name, start_time, style, AO->{name,location_name, neighborhood, location_geopoint}}`;
  const schedules: iSchedules = await useSanityClient().fetch(query);
  if (schedules) {
    return {
      schedules: schedules,
    };
  } else {
    return {
      schedules: dummySchedules,
    };
  }
}
