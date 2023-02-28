import React from "react";
import photo from "./images/photo.png";
import logo from "./images/instalogo.png";
import "./post_view.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Post_view = () => {
  const [server, setServer] = useState();
  const fetchAll = () => {
    fetch("https://rahul-insta-back.onrender.com/allpost")
      .then((data) => data.json())
      .then((data) => {
        setServer(data);
        console.log("server",server);
        debugger
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <div className="navbar">
        <img className="Insta_circle" src={logo} />
        <Link to="/uploads">
          <img className="Photo_upload" src={photo} />
        </Link>
      </div>
      <div>
        {server?.reverse().map((a) => {
          return (
            <section className="card">
              <section className="card-header">
                <div className="card-header_name">{a?.name}</div>
                <div className="card-place">{a?.address}</div>
                <span></span>
              </section>
              <section className="image">
                <img className="post_image"src={`https://rahul-insta-back.onrender.com/images/${a?.image}`}/>
              </section>
              <section className="footer">
                <div className="likes">{a?.likes} likes</div>
                <div className="date">{a?.date}</div>
              </section>
              <section>
                <p>{a?.description}</p>
              </section>
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Post_view;
