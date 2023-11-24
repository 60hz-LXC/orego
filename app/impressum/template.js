"use client";


import Navbar from "../navbar";


export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
        <Navbar /> 
          {children}
          
        </body>
      </html>
    </>
  );
}
