export enum VisitorFrom {
  nuevo = "nuevo",
  iglesia = "iglesia"
}

export type Kid = {
  name: string;
  slug: string;
  lastName: string;
  birthDate: string;
  age: number;
  phoneNumber: number;
  lastGrade: string;
  tutorName: string;
  visitorFrom: VisitorFrom;
  image: {
    formats: {
      medium: {
        url: string;
      }
    };
  };
};