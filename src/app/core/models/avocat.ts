export class Avocat {
  id: number;
  picture?: string;
  firstname: string;
  lastname: string;
  country: string;
  city: string;
  law: string[];
  pricing: string;
  rate: string;

  constructor(obj: any = {}) {
    this.id = obj.id;
    this.picture = obj.picture;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.country = obj.country;
    this.city = obj.city;
    this.law = obj.law;
    this.pricing = obj.pricing;
    this.rate = obj.rate;
  }
}
