import React from 'react';

const Activity = (data) => {

  return (
    <div className="activity">
      From
      <div>{data.activity.start.toDate().toLocaleString()}</div>
      until
      <div>{data.activity.end.toDate().toLocaleString()}</div>
    </div>
  )
}

export default Activity;