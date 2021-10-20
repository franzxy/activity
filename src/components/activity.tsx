import React from 'react';
import { doc, deleteDoc  } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../services/firebase';

const Activity = (data) => {

  const [user, userLoading, userError] = useAuthState(auth);

  return (
    <div className="activity">
      <div className="activity-time">
        From
        <div>{data.activity.activity.start.toDate().toLocaleString()}</div>
        until
        <div>{data.activity.activity.end.toDate().toLocaleString()}</div>
      </div>
      <div className="activity-buttons">
        <button className="button active" onClick={() => deleteDoc(doc(db, "users/"+(user && user.uid)+"/activities", data.activity.id))}>Delete</button>
      </div>
    </div>
  )
}

export default Activity;