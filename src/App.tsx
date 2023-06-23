import ReducerCounter from "./ReducerCounter"

const App = () => {
  return (
    <div>
      <ReducerCounter>
        {(num: number) => <>Current Count: {num}</>}
      </ReducerCounter>
    </div>
  )
}

export default App