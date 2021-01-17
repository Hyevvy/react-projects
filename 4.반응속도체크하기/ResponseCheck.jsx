import React, {Component} from 'react';
class ResponseCheck extends Component{
    state ={
        state: 'waiting', //배경색 ready, go, waiting
        message:'클릭해서 시작하세요.',
        result: [],
    };
    timeout; //state가 바뀌면 랜더링이 다시 되지만 이 친구들은 바뀌어도 랜더링이 다시 되지 않는다.
    startTime;
    endTime;

    onClickScreen = () =>{
        const {state, message, result } = this.state;
        if(state === 'waiting'){
            this.setState({
                state: 'ready',
                message:'초록색이 되면 클릭하세요.'
            })
            this.timeout = setTimeout(()=>{
                this.setState({
                    state:'now',
                    message:'지금클릭'
                })
                this.startTime = new Date();
            },Math.floor(Math.random()*1000)+2000)
        } else if (state === 'ready'){ //성급하게 클릭
                clearTimeout(this.timeout);
                this.setState({
                    state:'waiting',
                    message:'이런! 성급하게 클릭하셨군요! 초록색이 된 후에 클릭하세요' 
                })
        } else if(state==='now'){ //반응속도 체크
            this.endTime=new Date();
            this.setState((prevState)=>{
                return {
                    state:'waiting',
                    result:[...prevState.result, this.endTime-this.state],
                    message:'클릭해서 시작하세요!'
                }
            })
        }
    }
    onReset = () => {
        this.setState({
            result:[]
        })
    }
//react에서 null, false -> 태그 없음을 의미 
//react render에서는 조건문쓸 때 삼항연산자를 사용한다.
    render(){
        return(
            <>
            <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
                {this.state.message}
            </div>
            {this.state.result.length === 0 ? null :  <div>평균시간: {this.state.result.reduce((a,c)=> a+c)/ this.state.result.length}ms</div>}
            <button onClick={this.onReset}>리셋버튼</button>
            </>
        )
    }
}

export default ResponseCheck;