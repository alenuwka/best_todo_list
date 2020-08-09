import React, { Component } from 'react';
import InProgres from './InProgres';
import Done from './Done';
import Block from './Block';

export class TodoListDisplay extends Component {
  
    constructor(props) {
        super(props);
         this.state = { inprogress : [{id : 4, text :'task1'}, {id : 1, text :'task2'}],
          done : [{id : 2, text :'task3'}], blocked : [{id : 3, text :'task4'}]};
        // this.state = {"inprogress": [],"done" :[], "blocked":[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.taskID = 5;
        this.taskDone = this.taskDone.bind(this);
        this.taskBlock = this.taskBlock.bind(this);
        this.taskInProgress = this.taskInProgress.bind(this);
        this.getStateTask = this.getStateTask.bind(this);
      }
    
      render() {
        return (
            <div class="container">
              <div class="input row justify-content-left">
                <form onSubmit={this.handleSubmit}>
                  <input
                    id="new-todo"
                    onChange={this.handleChange}
                    value={this.state.text}
                  />
                  <button class="btn btn-info">Add</button>
                </form>
              </div>
              
              <div class="row justify-content-center">
                <div class="col-md border">
                  <InProgres  taskBlock={this.taskBlock} taskDone={this.taskDone} todo={this.state.inprogress} />
                </div>
                <div class="col-md border">
                  <Done taskBlock={this.taskBlock} taskInProgress={this.taskInProgress} done={this.state.done}/>
                </div>
                <div class="col-md border">
                  <Block taskDone={this.taskDone} taskInProgress={this.taskInProgress} blocked={this.state.blocked}/>
                </div>
              </div>
            </div>           
        );
      }
    
      taskDone(e) {
        const newItem = {
          id: e.id,
          text : e.text
        };
        

        const stateTask = this.getStateTask(e.id);
        const removeIndex = this.state[stateTask].map(item => item.id).indexOf(e.id);
        this.state[stateTask].splice(removeIndex,1);

        this.setState(state => ({
          done: state.done.concat(newItem),
        }));


      }

      taskBlock(e) {
        const newItem = {
          id: e.id,
          text : e.text
        };

        const stateTask = this.getStateTask(e.id);
        const removeIndex = this.state[stateTask].map(item => item.id).indexOf(e.id);
        this.state[stateTask].splice(removeIndex,1);

        this.setState(state => ({
          blocked: state.blocked.concat(newItem),
        }));

      }

      taskInProgress(e) {
        const newItem = {
          id: e.id,
          text : e.text
        };

        const stateTask = this.getStateTask(e.id);
        const removeIndex = this.state[stateTask].map(item => item.id).indexOf(e.id);
        this.state[stateTask].splice(removeIndex,1);

        this.setState(state => ({
          inprogress: state.inprogress.concat(newItem),
        }));

      }

      handleChange(e) {
       this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
         return;
       }
         const newItem = {
          id: this.taskID,
          text : this.state.text
        };
        this.taskID = ++this.taskID ;
        this.setState(state => ({
          inprogress: state.inprogress.concat(newItem),
          text: ''
        }));
      }

      getStateTask(e){
        let stateTask ='';
        Object.keys(this.state).map(key =>{
          this.state[key].map(task =>{
            if(task.id === e){
              stateTask = key;
            }
          })
        });
          return stateTask
      }

    }


export default TodoListDisplay
