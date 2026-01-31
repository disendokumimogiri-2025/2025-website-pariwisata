import type React from "react";

export enum DashboardOptionEnum {
  paketwisata = "paketwisata",
  kuliner = "kuliner",
  edukasi = "edukasi",
  landingpage = "landingpage",
  announcement = "announcement",
  privacypol = "privacypol",
  blog = "blog",
  souvenir = "souvenir",
  competition = "competition",
  gallery = "gallery",
  report2digitalscanner = "report2digitalscanner",
  n8n = "n8n",
  telegram = "telegram",
}

export interface CouraselComponent {
  name?: string;
  url?: string;
  id: number;
  component: React.ReactNode;
}

export interface BlogContentData {
  _id?: string;
  ordernum: number;
  title: string;
  content: string;
  image?: string;
}

export interface BlogData {
  _id?: string;
  name: string;
  desc: string;
  status: number;
  price: number;
  prior: boolean;
  imageplaceholder: string;
  blogtitle: string;
  blogabstract?: string;
  blogcover?: string;
  isClinary: number;
  contents: BlogContentData[];
}

export interface BlogMetaData {
  name: string;
  desc: string;
  status: number;
  price: number;
  prior: boolean;
  imageplaceholder: string;
}

export interface BlogHeadData {
  blogtitle: string;
  blogabstract?: string;
  blogcover?: string;
  isClinary: number;
}

export interface EducationData {
  _id?: string;
  name: string;
  desc: string;
  status: number;
  imageplaceholder: string;
  contenttitle: string;
  contentdesc: string;
  contentimage: string;
}

export interface SouvenirData {
  _id?: string;
  name: string;
  desc: string;
  stock: number;
  price: number;
  imageplaceholder: string;
  contenttitle: string;
  contentdesc: string;
  contentimage: string;
}

export interface GalleryData {
  _id?: string;
  order: number;
  status: number;
  gallerytitle: string;
  gallerydesc: string;
  galleryimage: string;
}

export interface HeroSectionContentSection {
  herotitle: string;
  herosubtitle: string;
  heroabstract: string;
  heroimageplaceholder?: string;
}

export interface PaketWisataContentSection {
  paketwisatatitle?: string;
  paketwisatasubtitle?: string;
  paketwisataabstract: string;
  paketwisataimageplaceholder?: string;
}

export interface EducationContentSection {
  educationtitle: string;
  educationsubtitle?: string;
  educationabstract?: string;
  educationimageplaceholder?: string;
}

export interface SouvenirContentSection {
  souvenirtitle: string;
  souvenirsubtitle?: string;
  souvenirabstract?: string;
  souvenirimageplaceholder?: string;
}

export interface AboutSectionContentSection {
  abouttitle: string;
  aboutabstract: string;
}

export interface PrivacyPolicyContentSection {
  privacypolicytitle: string;
  privacypolicysubtitle: string;
  termcondition: string[];
}

export interface GetDataFromAPIInterface {
  msg: string;
  error?: string;
}

export interface InternalWebsitePageData
  extends
    HeroSectionContentSection,
    AboutSectionContentSection,
    PaketWisataContentSection,
    EducationContentSection,
    SouvenirContentSection,
    PrivacyPolicyContentSection {
  _id?: string;
}

export interface InternalWebsiteContentInterface {
  msg: string;
  errror?: string;
  page: InternalWebsitePageData[];
  blogs: BlogData[];
  souvenirs: SouvenirData[];
  educations: EducationData[];
  gallery: GalleryData[];
}

export interface BlogDataInterface {
  msg: string;
  errror?: string;
  blog: BlogData;
}

export interface GetMarketPlaceDataInterface extends GetDataFromAPIInterface {
  blogs: BlogData[];
  souvenirs: SouvenirData[];
  educations: EducationData[];
}

export type AdderContentBlogComponentProps = {
  data: BlogContentData;
  onAdd: (data: BlogContentData) => void;
  onDelete: (ordernum: number) => void;
};

export interface HeadDataProps {
  blogtitle: string;
  blogabstract: string;
  blogcover: string;
  setBlogtitle: (v: string) => void;
  setBlogabstract: (v: string) => void;
  setBlogcover: (v: string) => void;
}