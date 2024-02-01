import useLocalstorage from "./Hooks/useLocalstorage";
import useUpdateLogger from "./Hooks/useUpdateLogger";

function App() {
  const [name, setName] = useLocalstorage("name", "mazen");
  useUpdateLogger(name);

  return (
    <main>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </main>
  );
}

export default App;
/* 
  - SEARCH ABOUT (DECRATORS) 
  - getBoundingClientRect(); js built in function

*/
/*
  keep striving for progress over perfection and alittle progress every day will go a very long way
*/

// Explantion with details

/*
  - useCallback => return the function itself and we use it to less the unnecessary re-renders by memomize the component
  we surrontd our function with it and our component with React.memo === memo(distructerd from react);

  - functions works only after calling
  - useMemo => returns value
  - useCallback => return function
  - do not think about performance in the begginning think when you optemize

  -React.memo:-
    React.memo is a higher-order component (HOC) that is used for optimizing functional components by preventing unnecessary renders.
    It takes a component as an argument and returns a new memoized component. The memoized component will only re-render if its props have changed.
    It's used to avoid re-rendering of a functional component when its props remain the same.

    -useMemo: 
    useMemo is a hook that is used for memoizing the result of a function or computation. It's typically used for optimizing expensive calculations in your functional components.
    It takes two arguments: a function and an array of dependencies. The function is the computation you want to memoize, and the array of dependencies tells React when to recompute the memoized value.
    It returns the memoized value, which can be any type (e.g., an object, an array, a number).
  
  - useTransition():
    const [isPending, startTransition] = useTransition();
    isPending => ture or false depending on the state of the elements
    startTransition => is our function which tills react the whatever inside me is low priority than the rest
    elements so do not care for it and execute the rest and then care for me.
    because react try to combine all the state together in the same priority, and some times it is bad so, we use 
    useTransition();
    
    - useDeferredValue();
      is a hooks used in react to apply teh dbounce concept; 

    - useLayoutEffect();
      It is similar to useEffect, but with little difference even React official documentation recomends to
      use useEffect first and if needed use useLayoutEffect.
      it is a synchronous hooks which accept 2 parameters 1 - callback function, 2 - array of dependencies
      and it triggre re-render to change what inside the callback function when any item of dependencies 
      change, but synchronously.

    - useDebugValue();
      it works only on custom hooks, we use it for debuging purposes and it makes a label for our custom hook
      it takes 2 argumens: 1 - the value you want to show, 2 - callback function;
      useDebugValue(value, fn); => it will work every time your component re-renderd
      useDebugValue(value, v => console.log(v) ); => it will work only if you openning react dev tools
      

    - useImpretiveHandle();
      uses in the case of popp like => login or ads, it allows us to 
      use the child methods inside the parent component.

    - useId();
      when create an input and you need to create a label you might have to use htmlFor and id attributes 
      to link them together, but in react you might make it a component so how you will deal with this?
      may be you will say use Math.random(), well it is not a bad decission but it has some behaviours that you 
      will not be even able to exepect, so react comes up with [useId()] which make a unique id for each element
      and it make the id with  that will makes js cannot access this elements by normal way, but you access it 
      by using refs => useRef();

      it dose not accept any parameters, it just returns a random id but this id will be constant for the element
      even if you reloaded the page

    - JSON.parse() transform the json object to js object to be able to use it as normal obj
      
    - JSON.stringify() transform the js object to json object to be able to be stored on locallstorage or whateever
        you need to do.

    - use => is an experimental hook which is not absolutely supported, it allow us to handle asynchronous 
        operation with a little code and else catching the errors and handle loading state;

    - useEffectEvent() =>  it is an experimental hook else
      it is used instead of useEvent which try to recover some behaviours of useEffect, i do not have the
      all information about it but i will to try to understand it more;
      
    - useFormStatus() => it is an experimental hook else it is used to handle form actions;
    
    - useIsomorphicLayoutEffect() {
    
      The useIsomorphicLayoutEffect hook is a variation of the useLayoutEffect hook in React. 
      It's used for running code with side effects in a React component, 
      but it's particularly useful in environments where server-side rendering (SSR) is involved. 
      The term "isomorphic" means the code can run both on the server (during SSR) and the client 
      (in the browser).

      Here's how it works and why it's used:

      useIsomorphicLayoutEffect vs. useLayoutEffect: 
      In a standard React application running in the browser,
      you would often use the useLayoutEffect hook. It runs synchronously after all DOM mutations, 
      just like componentDidMount and componentDidUpdate. However, 
      when you're doing server-side rendering (SSR), 
      using useLayoutEffect can cause issues because it doesn't run on the server. 
      That's where useIsomorphicLayoutEffect comes in.

      Compatibility with SSR: useIsomorphicLayoutEffect is designed to be compatible with SSR. 
      When you use it in a component that's rendered on the server, 
      it will behave like useEffect and run asynchronously after the render. 
      This is important because the DOM doesn't exist on the server, 
      so attempting to manipulate it synchronously can lead to errors.

      Client-Side Rendering: When the same code is executed on the client side (in the browser), 
      useIsomorphicLayoutEffect will behave like useLayoutEffect, 
      running synchronously after the render and allowing you to make DOM mutations safely.
    
    }
    
  - useOptimistic() {
    it else an expremintal hook which used to enhance the performance of your app and it looks like useState
    but the value which it accepts not just default value, but it is else [source of truth]
  }
    - dbouncing => (search about movie example) => {
        imagine when you write every single character it makes a request to server to fetch the needed data
        it will casue unexpected behaviour and it will not be user friendly, so here we go:
        we can use dbounce to avoid this problems and  in a less words we can say that dbounce is a delay we
        which we do to make the app wait the change we make to be done like search about movie with it's name
    }
    */

// list of ended hooks

/*
1 - useState();
2 - useEffect();
3 - useRef();
4 - useMemo();
5 - useCallback();
6 - useTransition();
7 - useDeferredValue();
8 - useLayoutEffect(); 
9 - useDebugValue();
10 - useImpretiveHndle();
11 - useId();
12 - some custom hooks [useUpdateLogger, useLoacalstorage];
13 - useEffectEvent();
14 - use();
15 - useFormStatus(); 
16 - useIsomorphicLayoutEffect();
17 - useOptimistic();
*/
