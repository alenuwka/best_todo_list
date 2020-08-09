import React, { Component } from 'react'

export class Done extends Component {
    render() {
        return (
            <div>
                <div className="mainDiv"> 
                    Done
                </div>
                {this.props.done.map(item => (      
                  <div class="row justify-content-center">
                      <div class="col justify-content-center border-bottom">
                        <span>{item.text}</span>
                      </div>
                      <div class="col-4 btn-group-vertical border-bottom">
                        <button class="btn btn-info" onClick={() => this.props.taskInProgress(item)}>To Do</button>
                        <button class="btn btn-info" onClick={() => this.props.taskBlock(item)}>Block</button> 
                      </div>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default Done
