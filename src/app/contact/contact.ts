export class Contact {
  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, address?: IAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: IAddress;
  }

interface IAddress {
  street: string;
  postalCode: string;
  city: string;
}
