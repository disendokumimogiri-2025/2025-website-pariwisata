export interface AttributeDataInterface {
  _id: string;
  attribute_subtitle: string;
  attribute_desc: string;
  image?: string;
  ordernum: number;
  createdAt?: string;
}

export interface RoutesDataInterface {
  _id: string;
  createdAt: string;
  image: string;
  lat: number;
  long: number;
  route_desc: string;
  route_name: string;
  updatedAt: string;
}

export interface TermsDataInterface {
  createdAt: string;
  term_desc: string;
  term_title: string;
  updatedAt: string;
  _id: string;
}

export interface CulinaryDataInterface {
  attributes?: AttributeDataInterface[];
  blogabstract: string;
  blogimage: string;
  blogtitle: string;
  createdAt: string;
  desc: string;
  name: string;
  status: string;
  terms?: TermsDataInterface[];
  updatedAt: string;
  _id: string;
}

export interface DestinationDataInterface {
  _id: string;
  attributes?: AttributeDataInterface[];
  blogabstract: string;
  blogimage: string;
  blogtitle: string;
  createdAt: string;
  desc: string;
  name: string;
  price: string;
  routes?: RoutesDataInterface[];
  status: string;
  terms?: TermsDataInterface[];
  updatedAt: string;
}

export interface EducationDataInterface {
  attributes?: AttributeDataInterface[];
  blogabstract: string;
  blogimage: string;
  blogtitle: string;
  createdAt: string;
  desc: string;
  name: string;
  status: string;
  terms?: TermsDataInterface[];
  updatedAt: string;
  _id: string;
}
