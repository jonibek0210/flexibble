import { db } from "@/firebase/firebase.config";
import { collection, getDocs, query } from "firebase/firestore";

async function getData(collectionName: string) {
    let arr: any = []
    try {
        const ref = query(collection(db, "todos"))

        const snapshot = await getDocs(ref)

        snapshot.forEach((doc) => {
            arr.push({
                id: doc.id,
                ...doc.data()
            })
        })

        return arr
    } catch (error) {

    }
}

export { getData }