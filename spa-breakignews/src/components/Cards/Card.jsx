import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyle";

export function Card({ top, title, text, banner, likes, comments }) {
  return (
    <CardContainer>
      <CardBody >
        <div>
          <CardHeader top={top}>
            <h2>{title}</h2>
            <TextLimit text={text} limit={150} />
          </CardHeader>

          <CardFooter>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{likes?.length}</span>
            </section>

            <section>
              <i className="bi bi-chat"></i>
              <span>{comments?.length}</span>
            </section>
          </CardFooter>

        </div>
        <img src={banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}
