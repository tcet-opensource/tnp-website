///  <reference types="@astrojs/image/client" />

export type TestimonialType = {
    info: string;
    photo: string;
    name: string;
    position: string;
  }

export type StaffTNP = {
  StaffName: string;
  designation: string;
  staffPhoto: string;
  experties: string;
};
  
export type link = {
  title: string;
  link: string;
  subLinks?: link[];
}

export type imageLink =  {
  img: string;
  alt: string
}

export type EventType = {
  title: string;
  slug: string;
  purpose: string;
  objective: string;
  photos: imageLink[];
}