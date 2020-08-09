import React, { Component } from 'react'

export class Block extends Component {
    render() {
        return (
            <div>
                <div className="mainDiv">
                    Blocked 
                </div>
                {this.props.blocked.map(item => (      
                  <div class="row justify-content-center">
                      <div class="col border-bottom">
                        <span>{item.text}</span>
                      </div>
                      <div class="col-4 btn-group-vertical border-bottom">
                        <button class="btn btn-info" onClick={() => this.props.taskDone(item, "blocked")}>Done</button>
                        <button class="btn btn-info" onClick={() => this.props.taskInProgress(item, "blocked")}>To Do</button>
                      </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Block
