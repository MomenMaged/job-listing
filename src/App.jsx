import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './Pages/HomePage'
import Mainlayout from './Pages/Layouts/Mainlayout'
import Jobspage from './Pages/Jobspage'
import Notfoundpage from './Pages/Notfoundpage'
import JobPage, {jobLoader}from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage'
const App = () => {
  const addJob =  async (newJob)=>{
    const res = await fetch('/api/jobs', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob)
    })
    return

  };
  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`, {
      method:'DELETE',
      
    })
    return
  }
  const updatedJob = async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job)
    })
    return;
    
    
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Mainlayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<Jobspage/>}/>
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
    <Route path='/edit-job/:id' element={<EditJobPage updatedJobSubmit={updatedJob}/>} loader={jobLoader}/>
    <Route path='*' element={<Notfoundpage/>}/>
    </Route>
  )
  );
  return  <RouterProvider router={router}/>;
  
};

export default App