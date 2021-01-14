const React = require('react');
const {useState, useRef} = React;
//const { EvalDevToolModulePlugin } = require('webpack');

    const GuGuDan = () =>{
        //setState와 ref안 쓸 때는 함수 컴퍼넌트로 사용
        //Hooks 는 함수형인데도 setState와 ref를 사용할 수 있게 추가해준 것
        const [first, setFirst] = useState(Math.ceil(Math.random()*9));
        const [second, setSecond] = useState(Math.ceil(Math.random()*9));
        const [value, setValue] = useState('');
        const [result, setResult] =useState('');
        //Hooks에서는 state를 하나씩 분류 후 setState한다.
        //무조건 컴퍼넌트안에 넣어줘야한다

        //ref사용법
        const inputRef = useRef(null);

        const onChangeInput = (e) => {
            //value를 setState할 때는 setValue를 사용한다.
            setValue(e.target.value);
        }

        const onSubmitFrom =(e) => {
            e.preventDefault();
            if(parseInt(value) === first * second){
                setResult('정답' + value),
                setFirst(Math.ceil(Math.random()*9)),
                setSecond(Math.ceil(Math.random()*9)),
                setValue('')
                inputRef.current.focus();
            }else{
                setResult('땡'),
                setValue('')
                inputRef.current.focus();
            }
        }

        //state바꾸면 함수 전체가 다시 실행돼서 클래스형보다 좀 더 느릴 수 있다.
        return <>
            <div>{first} 곱하기  {second} 는?</div>
            <form onSubmit = {onSubmitFrom}>
                <input ref={inputRef} value ={value} onChange = {onChangeInput} />
                <button>입력</button>
            </form>
            
            <div id="result">{result}</div> 
            </>;
}
module.exports = GuGuDan;