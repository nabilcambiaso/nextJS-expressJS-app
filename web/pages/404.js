import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from "next/router";
const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
        //   this router go to go back -1 or forward 1
        //   router.go(-1);
          router.push('/');
      }, 8000);
    }, [])
    
    return ( 
        <div className="not-found">
<h1>Oooooops....</h1>
<h2>the page cannot be found.</h2>
<p>Go back to the <Link href="/"><a className="btn" >Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;