import type { Metadata } from "next";



import { getBalance } from "./utils/getBalance"; // <-- это строка 5


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
    
    </html>
  );
}
