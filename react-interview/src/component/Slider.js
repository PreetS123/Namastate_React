import { useEffect, useState } from "react";
const dataOfName = [
  "Preeti",
  "Viabhav",
  "Jitesh",
  "Shivani",
  "Priya",
  "Ayush",
  "Minakshi",
  "Sibtain",
];

export const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderNext = () => {
    sliderIndex===dataOfName.length-1?setSliderIndex(0):setSliderIndex(sliderIndex+1);
    // if(sliderIndex<dataOfName.length-1) setSliderIndex(sliderIndex+1);
  };
  const handleSliderPrev = () => {
    sliderIndex===0 ?setSliderIndex(dataOfName.length-1):setSliderIndex(sliderIndex-1);
    // if(sliderIndex>0) setSliderIndex(sliderIndex-1);
  };
   
  useEffect(()=>{
    const timer= setTimeout(()=>{
        handleSliderNext()
    },5000)
    return ()=>clearTimeout(timer);
  },[sliderIndex])


  return (
    <>
      <div className="slider-main">
        <div className="slider-box">
          <button onClick={handleSliderPrev}>Prev</button>
          {dataOfName.map((el,i)=>{
            return(
                <div key={i} className={sliderIndex===i?"slider_active":"slider_hidden"} style={{ height: "200px", width: "400px", textAlign: "center" }}>
                <h2>{dataOfName[sliderIndex]}</h2>
              </div>
            )
          })}
          <button onClick={handleSliderNext}>Next</button>
        </div>
      </div>
    </>
  );
};
