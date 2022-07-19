import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="title">Some Title</h1>
      <p id="description">some description</p>
      <form id="survey-form" aria-label='form'>
        <label for="name" id="name-label" aria-label='name label'>Name</label>
        <input id="name"  required/>
        <label for="email" id="email-label" aria-label='email label'>Email</label>
        <input id="email" type="email"  required/>
        <label for="number" id="number-label" aria-label='number label'>Age</label>
        <input id="number" type="number" max="65" min="10"/>
        <select>
          <option value="">(select one)</option>
          <option value="1">freeCodeCamp News</option>
        </select>
        <fieldset>
          <label><input type="radio" name="account-type" class="inline" /> Personal Account</label>
          <label><input type="radio" name="account-type" class="inline" /> Business Account</label>
          <label>
            <input type="checkbox" name="terms" class="inline" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
            <input type="checkbox" name="terms" class="inline" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
