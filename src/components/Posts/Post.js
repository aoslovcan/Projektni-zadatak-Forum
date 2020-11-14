import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import "./Post.css";
import axios from "axios";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CloseIcon from "@material-ui/icons/Close";
import { easings } from "react-animation";

const style = {
  animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`,
};

function Post(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const getData = (x) => {
    axios
      .get("http://localhost:3001/posts/" + x + "/comments")
      .then((res) => {
        let items = JSON.parse(res.data);
        let comments = items;
        setData(comments);
        console.log(items);
        openModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="col-sm-3 post">
        <p
          key={props.post.id}
          onClick={() => getData(props.post.id)}
          id="title"
        >
          <strong>{props.post.title}</strong>
        </p>
      </div>

      <Modal
        style={{ overflow: "auto" }}
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="skillModal" style={style}>
          <div className="container">
            <div className="row">
              <CloseIcon id="close-button" onClick={closeModal} />
            </div>
            <div className="row ">
              <div className="modal-body ">
                <h3>{props.post.title}</h3>
                <p>{props.post.body}</p>
              </div>
            </div>
            <div className="row ">
              <div className="modal-body" id="comments">
                <h5>Comments:</h5>
                {data.map((m) => (
                  <ul className="list-group">
                    <li className="list-group-item">
                      <p>
                        <FormatQuoteIcon />
                      </p>
                      <p>{m.body}</p>
                      <p style={{ float: "right" }}>
                        <FormatQuoteIcon />
                      </p>

                      <p style={{ clear: "both" }}>
                        by: {m.email.split("@")[0]}
                      </p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Post;
