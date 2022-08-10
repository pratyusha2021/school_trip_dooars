import './components.css'; 
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import styles from "./components.css";



export const SliderData = [
    
    "http://1.bp.blogspot.com/-Tbc_5uRlWRU/UcWDV0B-u1I/AAAAAAAAASQ/c6-1O8k2gls/s1600/misty+tea+garden.jpg",
    "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/24667756661_42d9b56c91_b.jpg",
    "https://ttw.wlimg.com/package-images/photo-big/dir_13/385927/309894.jpg",
    "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Samsing-Dooars-in-Monsoon.jpg"
];


export default function Slider() {
  return (
    <div className={styles.container} id='slider'>
      <Slide easing="ease">
        {SliderData.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${SliderData[index] } )`  }} className='dooarsimg'>

                  <span>Holidays are Temporary. Adventures are Forever.</span>
                
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}




/*

const Slider = ({ slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current ===  length -1 ? 0: current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
}

if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

  return (
        <section className='slider'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={ prevSlide } />
            <FaArrowAltCircleRight className="right-arrow" onClick={ nextSlide }  />
            
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active': 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt= 'dooars images' className='dooarsimg' />)}
                    </div>
                )
            }
            )}
        </section>
    )
}

export default Slider;


*/

