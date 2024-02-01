import { ReactNode} from 'react'
import { useCounter } from '../CounterContext/CounterContext'
import { useText } from '../CounterContext/CounterContext'

type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
  
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useText();

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <br />
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  )
}
export default Counter