import Cookies from 'cookies'
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    if (req.method == "POST" || req.method == "GET"){
        const db = client.db("Images");
        const imagepfp = req.body['image']
        const bodyObject = {
            PreImage: imagepfp
        }
        // Image POST
        await db.collection("Profiles").insertOne(bodyObject);
        const cookies = new Cookies(req, res)
        cookies.set('imagepfp', imagepfp)
        res.redirect("/profile?msg=New Image has been set!");
        // Image GET
        const cookiess = new Cookies(req, res)
        cookiess.set('imagepfp', imagepfp)
    }
}