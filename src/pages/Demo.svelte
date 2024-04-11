<!-- Sandbox -->
<script lang="ts">
  import { sample } from '$lib/utilities';
  import '$styles/pages/demo.scss';

  const QUOTE = `All the world's a stage,
And all the men and women merely players;
They have their exits and their entrances;
And one man in his time plays many parts,
His acts being seven ages. At first the infant,
Mewling and puking in the nurse's arms;
And then the whining school-boy, with his satchel
And shining morning face, creeping like snail
Unwillingly to school. And then the lover,
Sighing like furnace, with a woeful ballad
Made to his mistress' eyebrow. Then a soldier,
Full of strange oaths, and bearded like the pard,
Jealous in honour, sudden and quick in quarrel,
Seeking the bubble reputation
Even in the cannon's mouth. And then the justice,
In fair round belly with good capon lin'd,
With eyes severe and beard of formal cut,
Full of wise saws and modern instances;
And so he plays his part. The sixth age shifts
Into the lean and slipper'd pantaloon,
With spectacles on nose and pouch on side;
His youthful hose, well sav'd, a world too wide
For his shrunk shank; and his big manly voice,
Turning again toward childish treble, pipes
And whistles in his sound. Last scene of all,
That ends this strange eventful history,
Is second childishness and mere oblivion;
Sans teeth, sans eyes, sans taste, sans everything`;

  const meals = {
    breakfast: ['cereal', 'buttered toast', 'orange juice'],
    lunch: ['salad', 'sandwich', 'soda'],
    dinner: ['fingerling potatoes', 'beef Wellington', 'crème brulee'],
  };

  type TodaysMeals = {
    breakfast: string;
    lunch: string;
    dinner: string;
  };

  const getTodaysMealsAtRandom = (): TodaysMeals => {
    const todaysRandomMeals = {};

    for (const meal in meals) {
      // @ts-ignore
      todaysRandomMeals[meal] = sample(meals[meal]);
    }

    // @ts-ignore
    return todaysRandomMeals;
  };

  const alertTodaysMeals = (): void => {
    const todaysMeals = getTodaysMealsAtRandom();

    let alertText = '';

    for (const meal in todaysMeals) {
      // @ts-ignore
      alertText = alertText + `${[meal]}: ${todaysMeals[meal]}\n`;
    }
    window.alert(alertText);
  };

  {
    /*
  General Notes:
  - I've tried to use as much vanilla JavaScript/TypeScript as I could, rather than stuff provided by Svelte.
  - I don't make a habit of using @ts-ignore, but given the time constraint and that using TypeScript wasn't explicitely part of tha task, I used it a few times to squelch the errors.
  - I've broken things down into a bunch of more-or-less single-task functions. Not the quickest, shortest solution for a one-off task; but I wanted to approach it as if it was part of something larger and much more complex.
  - Two bugs I'm aware of: 1) after submitting, the 'please fill out this field' text appears. For the moment, I prefer that visual bug to removing the 'required' attribute. 2) the output text loses the new lines in the original quote.
  */
  }

  const getQuote = (): string => {
    const element = document.querySelector('#quote');
    // @ts-ignore
    const quote = element?.value;
    return quote;
  };

  const tallyModifications = (quote: string): { modifications: number } => {
    const regex = /( his )|(His)|(big manly voice)/g;
    const tally = (quote.match(regex) || []).length;
    return {
      modifications: tally,
    };
  };

  // Since the task only specified using the sample input, I targeted that text. If we were testing this against any number of quotes, I would take more time and use regex to account for variations of white space, new lines, capitalization, etc.
  const updateQuote = (quote: string): string => {
    return quote
      .replaceAll(' his ', ' his/her ')
      .replaceAll('His', 'His/Her')
      .replace('big manly voice', 'assertive voice');
  };

  const displayUpdatedQuote = (updatedQuote: string): void => {
    const element = document.querySelector('.output');
    if (element) {
      element.textContent = updatedQuote;
      element.classList.remove('untouched');
    }
  };

  const displayTally = (tally: string): void => {
    const element = document.querySelector('.tally');
    if (element) {
      element.textContent = tally.toString();
      element.classList.remove('untouched');
    }
  };

  const updateQuoteAndDisplay = (): void => {
    const quote = getQuote();
    if (!quote) return;

    const tally = tallyModifications(quote);
    displayTally(JSON.stringify(tally));
    const updatedQuote = updateQuote(quote);
    displayUpdatedQuote(updatedQuote);

    // @ts-ignore
    document.querySelector('#quote').value = '';
  };
</script>

<div class="page-wrapper demo">
  <h1>Coding Task for NAVEX</h1>
  <h2>Short Answers</h2>
  <ul class="short-answer-questions">
    <li>
      <p class="question">
        What is the difference between a JS Array and an Object?
      </p>
      <p class="answer">
        With the exception of 'primitives' such as booleans, strings, and
        numbers, under the hood everything in JavaScript is an object. Arrays
        are a type of object. Both objects and arrays are used to store sets of
        data (and/or functions, in the case of object methods). Objects are
        indexed by key-value pairs, or 'properties', whereas arrays are indexed
        by number (starting at 0).
      </p>
    </li>
    <li>
      <p class="question">
        Write a line of JS that determines whether the current page is
        <code>index.html</code>
      </p>
      <p class="answer">
        <code>const isIndexDotHtml = location.pathname === '/index.html'</code
        ><br />
        Depending on the environment/framework we might first need to check if
        <code>location</code> is defined.
      </p>
    </li>
    <li>
      <p class="question">
        For the following object, write a line of JS that will alert select a
        single option from each meal of the day: <code
          >{JSON.stringify(meals)}</code
        >
      </p>
      <div class="answer">
        <p class="answer">
          Find the solution <a
            href="https://github.com/Zilifant/svksil/blob/7515bea18063fa6e5272810e0e9a709db01b3ae6/src/pages/Demo.svelte#L36"
            >here</a
          >. Click the button to see it work.
        </p>
        <button class="demo-button alert" on:click={alertTodaysMeals}>
          <p>Today's Meals!</p>
        </button>
      </div>
    </li>
    <li>
      <p class="question">
        What is the <code>g</code> modifier in a Regular Expression?
      </p>
      <p class="answer">
        The <code>g</code> flag indicates that we want to identify <b>all</b> possible
        matches to the regex in the given string, not just the first match.
      </p>
    </li>
    <li>
      <p class="question">
        What property would you use to call a function when a dropdown is
        changed?
      </p>
      <p class="answer">
        For vanilla JavaScript using a <code>select</code> element, I would use
        the <code>onchange</code> property.
      </p>
    </li>
    <li>
      <p class="question">
        Using FlexBox, write CSS to move the black box to the top right and
        center of the container:
      </p>
      <div class="answer">
        <p class="answer">
          Find the solutions <a
            href="https://github.com/Zilifant/svksil/blob/98f7f6512fcb9e800be5dfae10cd92a3de6911bb/src/styles/pages/demo.scss#L33"
            >here</a
          >.
        </p>
        <div class="outer-box top-right">
          <div class="inner-box" />
        </div>
        <div class="outer-box center">
          <div class="inner-box" />
        </div>
      </div>
    </li>
  </ul>
  <h2>Quote Modifier</h2>
  <p class="answer">
    See <a
      href="https://github.com/Zilifant/svksil/blob/98f7f6512fcb9e800be5dfae10cd92a3de6911bb/src/pages/Demo.svelte#L73"
      >here</a
    > for the code, including comments on my thought-process.
  </p>
  <div class="quote-modifier-wrapper">
    <form class="quote-modifier-form">
      <div class="input-wrapper">
        <label for="text">Enter Quote: </label>
        <textarea value="" id="quote" required />
      </div>
      <button class="demo-button submit" on:click={updateQuoteAndDisplay}>
        <p>Update Quote</p>
      </button>
    </form>
    <div class="outputs-wrapper">
      <div class="output-wrapper">
        <h6>New Quote:</h6>
        <p class="output untouched">Enter a quote above.</p>
      </div>
      <div class="tally-wrapper">
        <h6>Modification Tally:</h6>
        <p class="tally untouched">Enter a quote above.</p>
      </div>
    </div>
  </div>
</div>
