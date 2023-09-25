import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LoginPage( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Login">
            <Link href="/">Home</Link><br/>
            <div className="body"></div>
            <div className="grad"></div>
            <div className="header">
                <div>Site<span>Random</span></div>
            </div>
            <br/>
            <form action='/api/login' method='POST'>
                <div className="login">
                    <input minLength="3" type="text" placeholder="username" name="username" id="username"  required/>
                    <br/>
                    <input minLength="5" type="password" placeholder="password" name="password" id="password"  required />
                    <br/>
                    <input type="submit" value="Login" />
                    {msg ?
                        <h3 className="red">{msg}</h3>
                        :
                        <></>
                    }
                </div>
            </form>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false} };
};