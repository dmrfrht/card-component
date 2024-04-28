import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card, { CardLayout } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1710378175108-7f6cd1880928?q=80&w=4142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      layout: CardLayout.ImageLeft,
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1710378175108-7f6cd1880928?q=80&w=4142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      layout: CardLayout.ImageRight,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      {data.map((item) => (
        <Card
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          layout={item.layout}
        />
      ))}
    </div>
  );
}
