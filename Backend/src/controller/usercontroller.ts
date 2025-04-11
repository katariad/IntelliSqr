import { Request, Response } from "express";


// Mock user data


interface User {
  UID: string;
  password: string;
}

const users: User[] = [
  {
    UID: 'admin',
    password: 'admin', // plain password for demo
  },
];


export const authenciateuser = (req: Request,res:Response):void =>{
  const { UID, password } = req.body;

  if (!UID || !password) {
  res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.find(u => u.UID === UID && u.password === password);

  if (!user) {
   res.status(401).json({ message: 'Invalid uid or password' });
  }

  res.status(200).json({
    message: 'Login successful',
    userId: user?.UID,
  });
}

export const servermain= (req:Request,res:Response):void=>{
  res.send("srever is running")
}