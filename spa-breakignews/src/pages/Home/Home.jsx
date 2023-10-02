import Cookies from "js-cookie";
import { Card } from "../../components/Cards/Card";
import { getAllNews, getTopNews } from "../../services/newsServices";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findNews() {
    const NewsResponse = await getAllNews();
    setNews(NewsResponse.data.results);

    const topNewsResponse = await getTopNews();
    setTopNews(topNewsResponse.data.news);
  }

  useEffect(() => {
    findNews();
  }, []);

  // findAllNews();

  return (
    <>
      <HomeHeader>
        <Card
          top={true}
          key={topNews.id}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
