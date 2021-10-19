import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, getDoc, addDoc, setDoc, QuerySnapshot, QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../services/firebase';

const Activities = () => {

  const [user, userLoading, userError] = useAuthState(auth);
  const [activities, setActivities] = useState<QueryDocumentSnapshot[]>()

  /* risk of duplicate users
  const q = query(collection(db, "users"), where("email", "==", user && user.email));
  getDocs(q).then((res) => {
    console.log(res.empty)
    if(res.empty) {
      addDoc(collection(db, "users"), {
        email: user && user.email
      })
    }
  })
  */
 
  useEffect(() => {
    const docRef = doc(db, "users", user && user.uid);
    getDoc(docRef).then((res) => {
      if(res.exists()) {
        const q = query(collection(db, "users/"+(user && user.uid)+"/activities"))
        getDocs(q).then((res) => {
          if(res.empty) {
            // doesn't have activities sub collection
            console.log("doesn't have activs collection")
            /*addDoc(collection(db, "users/"+user.uid+"/activities"), {
              test: "test"
            })*/
          } else {
            // has activities sub collection
            console.log("has activs collection")
            setActivities(res.docs)
          }        
        })
      } else {
        setDoc(doc(db, "users", user && user.uid), {
          // further data to write to db
        })
      }
    })
  }, [])

  console.log(activities && activities[0].data())

  return (
    <div className="activities">
      <button className="button active">Add Activity</button>
      <ol className="activities-list">
        <>
        {activities ? activities.map(activity => {
          const data = activity.data()
          return <li>
            <div>{data.start.toDate().toLocaleString()}</div>
            <div>{data.end.toDate().toLocaleString()}</div>
          </li>
        }) : <div>no activities jet</div>}
        </>
      </ol>
    </div>
  )
};

export default Activities;