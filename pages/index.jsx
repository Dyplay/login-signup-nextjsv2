import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'

export default function HomePage( {username} ) {
    return (
        <Layout  pageTitle="Home">
            <br />
            <br />
            {username ?
                <>
                    <h2>Hi {username}<img className='pfp' src='https://cdn.discordapp.com/attachments/784531291701641256/1155586774526070844/default.jpg' alt='image not found'/></h2>
                    <Link href="/profile">Profile</Link>
                    <Link className='secondlink' href="/api/logout">Logout</Link>
                </>:
                <>
                    <h2>Log in</h2>
                    <Link href="/login">Login</Link><br/>
                    <Link href="/signup">Signup</Link>
                </>
            }
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        username = false;
    }
    return { props: {username} };
}

