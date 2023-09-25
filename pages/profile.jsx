import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import clientPromise from "../lib/mongodb";
import {useRouter} from "next/router";
export default function ProfilePage( {username, created} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Profile">
            <br />
            <br />
            <Link href="/">Home</Link><br/>
            <img className='pfp-profile' src='https://cdn.discordapp.com/attachments/784531291701641256/1155586774526070844/default.jpg' />
            <br />
            <h2>{username}'s Profile</h2>
            <p>Account created at <strong>{created}</strong></p>
            <br/>
            <p>Change Profile Picture</p>
            <form action='/api/image' method='POST' method='GET'>
                <input type='file'/>
                <input type='submit' value='Upload'/>
                {msg ?
                    <h3 className="red">{msg}</h3>
                    :
                    <></>
                }
            </form>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    const client = await clientPromise;
    const db = client.db("Users");
    const users = await db.collection("Profiles").find({"Username": username}).toArray();
    const userdoc = users[0]
    const created = userdoc['Created']
    return {
      props: {username: username, created: created},
    }
}