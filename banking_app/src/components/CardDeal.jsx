import {card} from '..//assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal<br/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-4`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo expedita magnam aspernatur doloremque, est fugiat dicta pariatur blanditiis quis magni necessitatibus aperiam, voluptatem accusamus repellendus, laudantium nesciunt ea nobis obcaecati.
        </p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />

      </div>
    </section>
  )
}

export default CardDeal