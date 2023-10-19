import Example from './components/Example';
import Another from './components/Another';
export default function App() {
  return (
    <div>
      <h1>Hello, developer</h1>
      <p>
        This document was generated using JSX as template engine without using
        React or Virtual DOM
      </p>
      <h2>Using a custom component:</h2>
      <Example onClick={() => console.log('clicked')} test={'bar'} />
      <h2>Same component used many times:</h2>
      <Another />
      <Another />
      <Another />
	   
<div>
  <button class="btn"
          hx-post="/submit"
          hx-prompt="Enter a string"
          hx-confirm="Are you sure?"
          hx-target="#response">
    Prompt Submission
  </button>
  <div id="response"></div>
</div>
    </div>
  );
}
