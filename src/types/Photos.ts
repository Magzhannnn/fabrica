export interface ILinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface IProfileImage {
  large: string;
  medium: string;
  small: string;
}

export interface IUser {
  id: string;
  name: string;
  instagram_username: string;
  profile_image: IProfileImage;
}

export interface IUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface IGallery {
  id: string;
  alt_description: string;
  links: ILinks;
  user: IUser;
  urls: IUrls;
  liked_by_user: boolean
}
