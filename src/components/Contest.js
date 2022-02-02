import React from 'react';
import { useEffect } from 'react';
const Contest = () => {
    const api="80e8a4c0021ee3f1a7966cb7ee1474a4ee500707";
    useEffect(() => {
        const url = `https://clist.by/api/v2/json/contest/?username=Zaid@786&api_key=${api}`;
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
  return <div></div>;
};

export default Contest;
