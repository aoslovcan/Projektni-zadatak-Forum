import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import './Post.css'
import axios from 'axios'

function Post(props) {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const items = data;


console.log(data.map(m => m.body));
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };


 

const getData = (x) =>{

    axios
    .get('http://localhost:3001/posts/' + x + '/comments')
    .then((res) => {
      let items = JSON.parse(res.data)
     setData(items)
      console.log(items)
    })
    .catch((err) => {
     console.log(err)
    });
    
    openModal();

  } 


  
  return (
    <div className="col-sm-3">
      <p onClick={() => getData(props.post.id)} id="title">
        <strong>{props.post.title}</strong>
      </p>

 
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="skillModal">
          <h5>{props.post.title}</h5>
    <p>{props.post.body}</p>
    {data.map(m => <li>{m.body}</li>)}
   
      </div>
      </Modal>
    </div>
  );
}
export default Post;
