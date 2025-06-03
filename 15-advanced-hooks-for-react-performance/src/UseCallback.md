When we pass a mere function as a prop to a child componet and though we could have been exportiong the child component using
react memo, the child will stil re-render on every render of parent component.
Cause, function is also a refence type data type and every time our compoent renders a new refernce is created and that is passed to the
chid component which causes it re-rendering.
To prevent this unneccessary render, we can use useMemo to preserve or memoize the function in it .
like

const handleClick=useMemo(()=>{
return //function definition
},[])

but we can also use useCallback function here, which is same as useMemo, only differnce is that we return the function inside a arrow function in useMemo, but in useCallback we can directly write function definition without any arrow function.as usecallback is specially made for function

i.e:

const handleClick = useCalllback(// function definition, [])
