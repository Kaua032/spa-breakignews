import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Datas.js";
import { getAllNews } from "../../services/newsServices";
import { HomeBody } from "./HomeStyled";

export default function Home() {

  async function findAllNews() {
    const response = await getAllNews();

    console.log(response);
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
