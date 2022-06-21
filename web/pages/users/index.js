
import Link from 'next/link';
import styles from '../../styles/Users.module.css';
export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users:data
        }
    }
}


const Users = ({users}) => {
  return (
    <>
      <div>
        <h1>users list</h1>
        {users.map((user)=>(
            <Link href={`/users/${user.id}`} key={user.id}>
            <div className={styles.single} style={{marginBottom:10,backgroundColor:"white",padding:10,paddingLeft:20,borderRadius:20}}>
            <h3>full Name: {user.name + " " + user.username}</h3>
            <h6>Email: {user.email}</h6>
            <h6>Website: {user.website}</h6>
            </div>
            </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
