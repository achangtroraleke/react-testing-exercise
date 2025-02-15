import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    if(currCardIdx === 2){
      setCurrCardIdx(0)
    }
    else{
    setCurrCardIdx(currCardIdx + 1);
    }
  }
  // Reduce currCardIdx state by 1
  function goBackward(){
    if(currCardIdx === 0){
      setCurrCardIdx(2)
    }
    else{
      setCurrCardIdx(currCardIdx-1)
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
          style={{display:currCardIdx===0?"none":"block"}}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          style={{display:currCardIdx===2?"none":"block"}}
        />
      </div>
    </div>
  );
}

export default Carousel;
