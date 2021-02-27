import './App.css';
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      filter:"",
      users: [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ]
    }
  }

handleChange=(e)=>{
  this.setState({filter:e.target.value})
}

  render(){

    const {filter,users}=this.state

    const loweCaseFilter=filter.toLocaleLowerCase()
    const filterData=users.filter(item=>{
      return Object.keys(item).some(key=>{
        if(typeof item[key]==='string'){
          return item[key].toLocaleLowerCase().includes(loweCaseFilter)
        }
      })
    })

    console.log(filter)
    return(
      <>
       <input onChange={(e)=>this.handleChange(e)}/>
       <div className="list_container">
       
       {
         filterData.map(user=>(
           <div className="profile_container">
             <img className="profile" src={user.avatar}/>
             <div>{user.email}</div>
             <div>{user.first_name} {user.last_name}</div>
           </div>
         ))
       }       
     </div>
      
      </>
      
    )
  }
}

export default App;
