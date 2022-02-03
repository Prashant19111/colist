import React from "react";
import { ContestItem } from "./ContestItem";
import { useEffect,useState } from "react";


const Contest = () => {
  const [contest, setContest] = useState({title: ''});
  useEffect(() => {
    const url = `https://kontests.net/api/v1/all`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setContest({title: json[5].name})
        
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <ContestItem title = {contest.title} />
    </div>
  );
};

export default Contest;
