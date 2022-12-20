import React from 'react'
import './rightBar.scss'
const RightBar = () => {
  return (
    <div className='rightBar'>
    <div className="container">
    
      <div className="item">
      <span>Suggestion for you</span>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
          <span>Raj kumar</span>
          </div>
          <div className="buttons">
          <button className='followBtn'>follow</button>
            <button className='dismissBtn'>dismiss</button>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
            <span>Raj kumar</span>
          </div>
          <div className="buttons">
            <button className='followBtn'>follow</button>
            <button className='dismissBtn'>dismiss</button>
          </div>
        </div>
      </div>

      <div className="item">
        <span>Latest Activities</span>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
         <p>
         <span>Raj kumar</span> change their cover picture
         </p> 
          </div>
        <span>1 min ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
         <p>
         <span>Raj kumar</span> change their cover picture
         </p> 
          </div>
        <span>1 min ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
         <p>
         <span>Raj kumar</span> change their cover picture
         </p> 
          </div>
        <span>1 min ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
         <p>
         <span>Raj kumar</span> change their cover picture
         </p> 
          </div>
        <span>1 min ago</span>
        </div>
      </div>
      <div className="item">
      <span>Online friends</span>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
          <div className='online'/>
          <span>Raj kumar</span>
          </div>
       
        </div>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
          <div className='online'/>
          <span>Raj kumar</span>
          </div>
       
        </div>
        <div className="user">
          <div className="userInfo">
          <img src="https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg" alt="" />
          <div className='online'/>
          <span>Raj kumar</span>
          </div>
       
        </div>
       
      </div>
    </div>

    </div>
  )
}

export default RightBar