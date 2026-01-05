export interface AttributeDataInterface {
  _id: string;
  attribute_title: string;
  attribute_subtitle: string;
  attribute_desc: string;
  image?: string;
  timestamps?: string;
}

export interface DestinationRouteDataInterface {
  _id: string;
  route_name: string;
  route_desc: string;
  lat: number;
  long: number;
  image?: string;
  timestamps?: string;
}

export interface DestinationDataInterface {
  _id: string;
  name: string;
  desc: string;
  status: string;
  price: string;
  imageplaceholder?: string;
  routes?: DestinationRouteDataInterface[];
  attributes?: AttributeDataInterface[];
  timestamps?: string;
}

export interface EducationDataInterface {
  _id: string;
  name: string;
  desc: string;
  start: string;
  end: string;
  status: string;
  imageplaceholder?: string;
  attributes?: AttributeDataInterface[];
  timestamps?: string;
}
