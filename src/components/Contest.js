import React from "react";
import { ContestItem } from "./ContestItem";
import { useEffect,useState } from "react";


const Contest = () => {
  const [contest, setContest] = useState({title: [], duration: '',start: '',site : ''});
  useEffect(() => {
    const url = `https://kontests.net/api/v1/all`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        let json = await response.json();
        console.log(json);
        setContest({title: json})
        
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Event</th>
          <th scope="col">Start time</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>

          {contest.title.map((e)=>{
                return (<ContestItem title = {e.name} start={e.start_time} duration={e.duration} key={e.name}/>); 
          })}
      </tbody>
    </table>
    </div>
  );
};

export default Contest;
