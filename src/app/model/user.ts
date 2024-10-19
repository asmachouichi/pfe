export enum Role {
  User = 'user',
  Admin = 'admin',
  Enseignant = 'enseignant'
}

export class User {
  username: string = '';
  password: string = '';
  name: string = '';
  role:String='';
  token: string = '';



}


  