import React, {memo} from 'react';
//가독성, 재사용성 , 성능최적화에 좋다
//props는 부모에게 받은 것 -> 보면 부모를 찾을 것
{/* JSX 주석은 이렇게 해용 */}

//성능 최적화 - > pureComponent사용 (클래스일 때)
//hooks에서는 memo로 컴퍼넌트를 감싼다
const Try = memo(({tryInfo})=>{
    return(
        <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
    </li>
    )
});
export default Try;