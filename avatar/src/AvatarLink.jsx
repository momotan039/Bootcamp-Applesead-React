import { Link } from "react-router-dom";

function AvatarLink({ avatars }) {
  return (
    <>
      {avatars.map((a,i) => {
        return (
          <Link key={i} to={"/avatars/" + a.name.first}>
            <div className="braif-avatar">
              <img src={a.picture.large} />
              <h2>{a.name.first}</h2>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default AvatarLink;
