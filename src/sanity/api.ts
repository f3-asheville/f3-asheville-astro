import { useSanityClient, groq } from "astro-sanity";
import type { iEvents, iSchedules } from "../types";
import imageUrlBuilder from "@sanity/image-url";

const dummySchedules: iSchedules = [
  {
    AO: {
      location_geopoint: {
        _type: "geopoint",
        lat: 35.594635,
        lng: -82.56195799999999,
      },
      location_name: "SowTrue Seed Parking Lot",
      name: "Mission",
      neighborhood: "Asheville",
    },
    day: ["Saturday"],
    name: "Mission",
    start_time: "07:00",
    style: "Bootcamp",
  },
];

const dummyEvent = [
  {
    date_time: "now",
    location: "here",
    name: "placeholder",
    organizer: "Pax X",
    notes: "lorem ipsum",
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

const now = new Date().toISOString();
export async function getEvents() {
  const query = groq`*[_type == "events" && date_time > '${now}']{location, name, date_time, organizer, notes} | order(date_time asc)`;
  const events: iEvents = await useSanityClient().fetch(query);
  if (events) {
    return {
      events: events,
    };
  } else {
    return {
      events: dummyEvent,
    };
  }
}

const builder = imageUrlBuilder(useSanityClient());

function urlFor(source) {
  return builder.image(source);
}

export async function getHeroImage() {
  const heroImage = await useSanityClient().fetch(
    `*[_type == "heroImage" && current==true]`
  );

  if (heroImage) {
    return {
      heroImage,
      urlFor,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error fetching HeroImage"),
  };
}
