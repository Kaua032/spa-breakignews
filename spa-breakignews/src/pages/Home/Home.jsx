import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews } from "../../services/newsServices";
import { HomeBody } from "./HomeStyled";
import { useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
  }

  // findAllNews();

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes.length}
            comments={item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}
