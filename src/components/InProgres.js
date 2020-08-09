import React, { Component } from 'react'



export class InProgres extends Component {
     render() {

         return (
           <div>
             <div className="mainDiv">
               In Progress
             </div>
                {this.props.todo.map(item => (      
                  <div class="row justify-content-center">
                    <div class="col border-bottom">
                      <span>{item.text}</span>
                    </div>
                    <div class="col-4 btn-group-vertical border-bottom">
                      <button class="btn btn-info" onClick={() => this.props.taskDone(item)}>Done</button>
                      <button class="btn btn-info" onClick={() => this.props.taskBlock(item)}>Block</button>
                    </div>
                    
                  </div>
                ))}
           </div>
         );
       }
       
}

export default InProgres
