interface iEvent {
  date_time: string;
  location: string;
  name: string;
  organizer: string;
  notes: string;
}

export interface iEvents extends Array<iEvent> {}

interface iSchedule {
  AO: {
    location_geopoint: {
      _type: string;
      lat: number;
      lng: number;
    };
    location_name: string;
    name: string;
    neighborhood: string;
  };
  day: string[];
  name: string;
  start_time: string;
  style: string;
}

export interface iSchedules extends Array<iSchedule> {}
