export interface IBlog {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  bannerImage: string;
  sections: Array<{
    heading: string;
    content: string;
    images: Array<{ url: string; caption: string }>;
  }>;
  recommendations: string[];
}
