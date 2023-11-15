import { useState } from "react";
import "./App.css";

const images = [
  "https://media.architecturaldigest.com/photos/59d28384cab06f4b588af249/16:9/w_1920,c_limit/FallingwaterLOW_Andrew%20Pielage-1.jpg",
  "https://th.bing.com/th/id/R.48157ca1c797dfcd16e8b90d4d4ffe8c?rik=H1%2bJPzQ0SLeG1g&pid=ImgRaw&r=0",
  "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Zaha-Hadid-Baku.jpg",
  "https://i.pinimg.com/originals/4b/fa/8c/4bfa8c696e12ebd243f3cd01ef1a807c.png",
  "https://th.bing.com/th/id/R.66a6b3b96bf42454006c6aceddc9fe47?rik=HJRAEsLT2Tlj9w&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f51eed906e4b0953024980af9%2ft%2f54a86b48e4b0f3612b1701eb%2f1420323658378%2fBest-of-2014-Scupltural-Architecture-Buildings-Architects-SQ3.jpg&ehk=jG91AIz1fSoHr34FETh2Sv2vMQB0eVqNt5PVFCT1iG8%3d&risl=&pid=ImgRaw&r=0"
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Inspirational Architecture</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
