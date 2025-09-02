
export interface TeamMember {
  id: string;
  name: string;
  college: string;
  phone: string;
  email: string;
}

export enum Page {
  Landing,
  Registration,
  EventDetails,
  About,
}