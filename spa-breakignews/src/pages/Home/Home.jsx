import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews } from "../../services/newsServices";
import { HomeBody } from "./HomeStyled";

export default function Home() {

  let news;

  async function findAllNews() {
    const response = await getAllNews();
    news = response.data.results
  } 

  findAllNews();

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
    </>
  );
}
