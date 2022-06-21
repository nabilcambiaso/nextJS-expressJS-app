import styles from '../../styles/Users.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserDetails = () => {

  const router = useRouter();
  const [data, setData] = useState([]);

  const fetchData = async (id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    if (router.query.id) fetchData(router.query.id);
  }, [router.query.id]);
  
  return (
    <div>
      <h1>Details</h1>
      <div className={styles.single} style={{marginBottom:10,backgroundColor:"white",padding:10,paddingLeft:20,borderRadius:20}} key={data.id}>
            <h3>full Name: {data.name + " " + data.username}</h3>
            <h6>Email: {data.email}</h6>
            <h6>Website: {data.website}</h6>
            </div>
    </div>
  );
};

export default UserDetails;
