import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileNews,
  ProfileUser,
} from "./ProfileStyled";
import { getAllNewsByUser } from "../../services/newsServices";
import { Card } from "../../components/Cards/Card";

export function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  async function findAllNewsByUser() {
    const newsResponse = await getAllNewsByUser();
    setNews(newsResponse.data.results);
  }

  useEffect(() => {
    findAllNewsByUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>
        <ProfileBackground src={user.background} />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h2>@{user.username}</h2>
        </ProfileUser>

        <ProfileActions>
          <ProfileIconAdd>
            <i className="bi bi-plus-circle"></i>
          </ProfileIconAdd>
        </ProfileActions>
      </ProfileHeader>
      <ProfileNews>
        {news.length === 0 ? (
          <h3>Você ainda não criou nenhuma notícia...</h3>
        ) : (
          news.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}
              />
            );
          })
        )}
      </ProfileNews>
    </ProfileContainer>
  );
}
