import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import contestContext from '../context/contest/contestContext'
import { UserContestItem } from './UserContestItem';
const Mycontest = () => {
  const history=useNavigate();
  const context=useContext(contestContext);
  const {contests,getContest}=context;
  useEffect(() => {
    if(localStorage.getItem('token')){
    getContest();
    }
    else{
      history("/login");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Event</th>
          <th scope="col">Start time</th>
          <th scope="col">Duration</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>

          {contests.map((e,idx)=>{
                return (<UserContestItem title = {e.title} start={e.start} duration={e.duration} key={e.title} idx={idx} url={e.url} id={e._id} />); 
          })}
      </tbody>
    </table>
    </div>
  )
}

export default Mycontest