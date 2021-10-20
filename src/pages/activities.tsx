import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, getDoc, addDoc, setDoc, QueryDocumentSnapshot, DocumentSnapshot, Timestamp, onSnapshot } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../services/firebase';
import Activity from '../components/activity';

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

  const getActivities = () => {
    const docRef = doc(db, "users", user && user.uid);
    getDoc(docRef).then((res) => {
      if(res.exists()) {
        const q = query(collection(db, "users/"+(user && user.uid)+"/activities"))
        getDocs(q).then((res) => {
          if(res.empty) {
            // doesn't have activities sub collection
            /*addDoc(collection(db, "users/"+user.uid+"/activities"), {
              test: "test"
            })*/
          } else {
            // has activities sub collection
            onSnapshot(q, (querySnapshot) => {
              setActivities(querySnapshot.docs)
            });
          }        
        })
      } else {
        setDoc(doc(db, "users", user && user.uid), {
          // further data to write to db
        })
      }
    })
  }
 
  useEffect(() => {
    const docRef = doc(db, "users", user && user.uid);
    getDoc(docRef).then((res) => {
      if(res.exists()) {
        const q = query(collection(db, "users/"+(user && user.uid)+"/activities"))
        getDocs(q).then((res) => {
          if(res.empty) {
            // doesn't have activities sub collection
            /*addDoc(collection(db, "users/"+user.uid+"/activities"), {
              test: "test"
            })*/
          } else {
            // has activities sub collection
            onSnapshot(q, (querySnapshot) => {
              setActivities(querySnapshot.docs)
            });
          }        
        })
      } else {
        setDoc(doc(db, "users", user && user.uid), {
          // further data to write to db
        })
      }
    })
  }, [])

  return (
    <div className="activities">
      <button onClick={() => addDoc(collection(db, "users/"+user.uid+"/activities"), {
          start: Timestamp.now(),
          end: Timestamp.now()
        }).then(() => {
          !activities && getActivities()
        })} className="add-activity button active">
        Add Activity
      </button>
      <div className="activities-list">
        {activities ? activities.map((activity, id) => <Activity key={id} activity={{id: activity.id, activity: activity.data()}} />) : <div className="activity"><b>No activities yet, uwu shouwd add owne... 👉👈</b></div>}
      </div>
    </div>
  )
};

export default Activities;