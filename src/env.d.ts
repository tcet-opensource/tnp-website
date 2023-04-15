///  <reference types="@astrojs/image/client" />

export type TestimonialType = {
    info: string;
    photo: string;
    name: string;
    position: string;
  }

  
export type link = {
  title: string;
  link: string;
  subLinks?: link[];
}