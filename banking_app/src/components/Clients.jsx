import {clients} from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      {clients.map((client) => (
        <div key={client.id}>
          <img src={client.logo} alt="client" className={` mr-20 w-[200px]`}/>
        </div>
      )

      )}
    </div>
  )
}

export default Clients