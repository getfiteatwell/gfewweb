import React, { useState } from 'react';
import './CreateChallenge.css';

function CreateChallenge() {
  // State to manage input values
  const [challengeData, setChallengeData] = useState({
    challengeName: '',
    startDate: '',
    startTime: '',
    description: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChallengeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    // Save data to console
    console.log('Challenge Data:', challengeData);

    // You can also send the data to a server or perform other actions here
  };

  return (
    <div className="create-challenge">
      <h2>Challenge Details</h2>
      <label className="challenge-label">
        Challenge Name *
        <input
          type="text"
          id="cname"
          name="challengeName"
          value={challengeData.challengeName}
          onChange={handleInputChange}
        />
      </label>
      <div className="challenge-time-input">
        <label className="challenge-label">
          Starts Date *
          <input
            type="date"
            id="cdate"
            name="startDate"
            value={challengeData.startDate}
            onChange={handleInputChange}
          />
        </label>
        <label className="challenge-label">
          Time *
          <input
            type="time"
            id="ctime"
            name="startTime"
            value={challengeData.startTime}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <label className="challenge-label">
        Description *
        <textarea
          id="cdescription"
          name="description"
          rows="4"
          cols="50"
          value={challengeData.description}
          onChange={handleInputChange}
        ></textarea>
      </label>
      <button className="challenge-next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default CreateChallenge;
