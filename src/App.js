import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading,setLoading]=useState(true);
  const [jobs,setjobs]=useState([]);
  const [value,setvalue]=useState(0);

  const fetchjobs= async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    setjobs(data);
    setLoading(false);

  }
  useEffect(()=>{
    fetchjobs();

  },[])

  
if(loading){
  return(
    <section className="section loading">
      <h1>Loading...</h1>
    </section>
  )
}

  const { title, dates, duties, company } = jobs[value];
 
  return <main>
    
    <div className="section">
     
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item,index)=>{
              return <button onClick={()=>setvalue(index)} className={`job-btn ${index===value && 'active-btn'}`}>
              {item.company}
              </button>
            })
          }


        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((dty)=>{
            return <div className="job-desc">
              <FaAngleDoubleRight className="job-icon" ></FaAngleDoubleRight>
              <p>{dty}</p>
            </div>
          })}

        </article>
      </div>
    
    </div>

  
  </main>
}

export default App
