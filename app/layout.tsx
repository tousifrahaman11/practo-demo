import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
export const metadata: Metadata = { title: "Intern Assignment Demo", description: "Practo for Animals, AI Academy and AI Carousel Studio demo" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-white text-slate-900"><Nav />{children}</body></html>);
}
