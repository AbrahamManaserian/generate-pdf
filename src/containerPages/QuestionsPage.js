import { doc, setDoc, deleteDoc, getDocs, collection } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import {db} from '../firebas'

export default function QuestionsPage () {
    // const [questions, setQuestions] = useState([])

    const arr = [1,2,3,4]
    const arr1 = [...arr]
    arr1.push(9)
    console.log(arr)

    // useEffect(()=>{
    //     getDocs(collection(db, "questions")).then(result=>{
    //         result.forEach((doc) => {
    //             setQuestions((prev)=>[...prev,{[doc.id]:doc.data()}])
    //             // console.log(`${doc.id} => ${doc.data()}`);
    //           })
    //     })
    // },[])

// console.log(questions)
    return (
        <div>
            QuestionsPage
        </div>
    )
}