import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
      /* TODO */
      <div/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br/>saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph} max-w-[550px]`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum et quasi neque blanditiis odit, provident magni itaque exercitationem cum architecto molestias ipsam! Laudantium nemo labore suscipit impedit nulla velit enim.</p>
        </div>
        
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
              <FeedbackCard key={card.id} {...card}/>
              )
              )} 
      </div>
    </section>
  )
}

export default Testimonials