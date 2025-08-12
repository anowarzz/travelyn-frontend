export interface ISendOtp {
  email: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

 interface Auth {
  provider: string;
  providerId: string;
}

export interface IRegisterResponse {
  name: string;
  email: string;
  password: string;
  isDeleted: boolean;
  isActive: string;
  isVerified: boolean;
  auths: Auth[];
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILoginResponse {
  accessToken: string;
  user: ILoginResponseUser;
}

 interface ILoginResponseUser {
  _id: string;
  name: string;
  email: string;
  isDeleted: boolean;
  isActive: string;
  isVerified: boolean;
  auths: Auth[];
  role: string;
  createdAt: string;
  updatedAt: string;
}
