import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<>
<div className="Preview">
  <img className="Wall-Preview" src="/img/Army-Chief-Generic.jpg"></img>
</div>
<div className="Wall-Selections">
  <div>
  <div className="Wall-01"></div>
  <label className="container">
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
</div>
<div>
  <div className="Wall-01"></div>
  <label className="container">
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
</div>
<div>
  <div className="Wall-01"></div>
  <label className="container">
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
</div>
<div>
  <div className="Wall-01"></div>
  <label className="container">
  <input type="radio" name="radio"/>
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
