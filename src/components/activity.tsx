import React from 'react';

const Activity = (data) => {

  return (
    <div className="activity">
      <div className="activity-time">
        From
        <div>{data.activity.start.toDate().toLocaleString()}</div>
        until
        <div>{data.activity.end.toDate().toLocaleString()}</div>
      </div>
      <div className="activity-buttons">
        <button className="button active">Details</button>
        <button className="button active">Edit</button>
        <button className="button active">Delete</button>
      </div>
    </div>
  )
}

export default Activity;