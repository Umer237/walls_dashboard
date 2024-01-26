'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {


  const [imageSource, setImageSource] = useState(null);
  const [imageSource2, setImageSource2] = useState(null);
  const [imageSource3, setImageSource3] = useState(null);
  const [imageSource4, setImageSource4] = useState(null);


  const [imgCheckbox, setImgCheckbox] = useState(null);


  const imgfun1 = (e) => {

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file) {

        setImageSource(URL.createObjectURL(file));

      }

    }
  }

  const imgfun2 = (e) => {

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file) {

        setImageSource2(URL.createObjectURL(file));

      }

    }
  }

  const imgfun3 = (e) => {

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file) {

        setImageSource3(URL.createObjectURL(file));

      }

    }
  }

  const imgfun4 = (e) => {

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file) {

        setImageSource4(URL.createObjectURL(file));

      }

    }
  }


  const getImg = (loc) => {

    return setImgCheckbox(loc);

  }

  console.log(imgCheckbox)


  return (
    <>


      <div className="Preview">
        <img className="Wall-Preview"  src={imgCheckbox}></img>
      </div>



      <div className="Wall-Selections">



        <div>
          <input type="file" accept="image/*" onChange={imgfun1}></input>

          <img src={imageSource} style={{ objectFit: 'cover', objectPosition: "75% " }} className="Wall-01"></img>
          <label className="container">
            <input type="radio" name="radio1" onClick={() => getImg(imageSource)} />
            <span className="checkmark"></span>
          </label>
        </div>



        <div>
          <input type="file" accept="image/*" onChange={imgfun2}></input>

          <img src={imageSource2} style={{ objectFit: 'cover', objectPosition: "75% " }} className="Wall-01"></img>
          <label className="container">
            <input type="radio" name="radio1" onClick={() => getImg(imageSource2)} />
            <span className="checkmark"></span>
          </label>
        </div>



        <div>
          <input type="file" accept="image/*" onChange={imgfun3}></input>
          <img src={imageSource3} style={{ objectFit: 'cover', objectPosition: "75% " }} className="Wall-01"></img>
          <label className="container">
            <input type="radio" name="radio1" onClick={() => getImg(imageSource3)} />
            <span className="checkmark"></span>
          </label>
        </div>



        <div>
          <input type="file" accept="image/*" onChange={imgfun4}></input>
          <img src={imageSource4} style={{ objectFit: 'cover', objectPosition: "75% " }} className="Wall-01"></img>
          <label className="container">
            <input type="radio" name="radio1" onClick={() => getImg(imageSource4)} />
            <span className="checkmark"></span>
          </label>
        </div>




      </div>


      <div className="Buttons">
        <button>LOAD</button>
        <button>FETCH</button>
      </div>
    </>
  );
}
