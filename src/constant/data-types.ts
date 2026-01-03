export interface AttributeDataInterface {
  attribute_title: string;
  attribute_subtitle: string;
  attribute_desc: string;
  image?: string;
  timestamps?: string;
}

export interface DestinationRouteDataInterface {
  route_name: string;
  route_desc: string;
  lat: number;
  long: number;
  image?: string;
  timestamps?: string;
}

export interface DestinationDataInterface {
  name: string;
  desc: string;
  status: string;
  price: string;
  routes?: DestinationRouteDataInterface[];
  attributes?: AttributeDataInterface[];
  timestamps?: string;
}

export interface EducationDataInterface {
  name: string;
  desc: string;
  start: string;
  end: string;
  status: string;
  attributes?: AttributeDataInterface[];
  timestamps?: string;
}
