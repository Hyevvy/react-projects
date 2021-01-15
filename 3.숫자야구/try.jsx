import React, {Component} from 'react';
//가독성, 재사용성 , 성능최적화에 좋다
//props는 부모에게 받은 것 -> 보면 부모를 찾을 것
{/* JSX 주석은 이렇게 해용 */}
class Try extends Component{
    render(){
        return (
            <>
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
            </>
        )
    }
}
export default Try;