import Counter from "./components/Counter"
import { CounterProvider } from "./CounterContext/CounterContext"


function App() {

  return (
    <>
      <CounterProvider>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  )
}

export default App