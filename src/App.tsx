
import { useCallback, useEffect, useState, MouseEvent, KeyboardEvent, useMemo, useRef } from "react"

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n < 2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User[] | null>(null)

  const inputref = useRef<HTMLInputElement>(null);

  console.log(inputref?.current)
  console.log(inputref?.current?.value)

  useEffect(() => {
    console.log('mounting');
    console.log('USERS: ', user);
    //with react18 when using strict mode which applys development mode mount, unmount, remount so it behaves twice
    return () => console.log('unmounting');
  },[user])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prv => prv + 2), [])
//useCallback =  it does not need to be recalculated

const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <>
  <h1>{count}</h1>
  <button onClick={addTwo}>Add</button>
  <h2>{result}</h2>
  <input ref={inputref} type='text'/>
    </>
  )
}

export default App
