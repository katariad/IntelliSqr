export interface User {
  id: number;
  name: string;
  email: string;
}

export interface authenciateUser {
 uid:string;
 password:string;
}

export interface ApiError extends Error {
  statusCode: number;
  errors?: string[];
}
