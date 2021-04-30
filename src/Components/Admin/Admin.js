import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Admin.css";

const Admin = () => {
  const [roseUrl, setRoseUrl] = useState();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const roseDetails = {
      name: data.name,
      imageUrl: roseUrl,
      rosePrice: "$30",
    };
    //const url = `http://localhost:5000/addRoses`;
    const url = `https://pumpkin-pudding-22933.herokuapp.com/addRoses`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(roseDetails),
    });
  };

  //handelRoseUpload to imgBB
  const handleRoseUpload = (e) => {
    const roseData = new FormData();
    roseData.set("key", "1f6fec24351d37c497ecd536fc45b98e");
    roseData.append("image", e.target.files[0]);

    //axious
    axios
      .post("https://api.imgbb.com/1/upload", roseData)
      .then(function (response) {
        setRoseUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <form className="rose_form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          defaultValue="lovely roses"
          ref={register}
        />
        <br />
        <input name="roses" type="file" onChange={handleRoseUpload} />
        <br />
        <hr />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;
