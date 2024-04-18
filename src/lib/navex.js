/*

Hey gang,

Thanks for taking the time to meet with me. I'd of course welcome the opportunity to learn more about the team and how I could contribute. Something the job description mentions that we didn't get a chance to cover is design and web page layout.

If you haven't already, Check out the design page of my personal website, as well as my web implementation of the social deduction game 'Deception' (best experienced with enough people to start a game, though there are screenshots on my website's 'code' page as well).
See here: https://www.scottsilsbe.com/design
and here: https://mhk.vercel.app

As for JavaScript, if you haven't already, check out my 'Deception' GitHub repos (which include plenty of documentation). The front end is in React. But there's quite a bit of vanilla Js and close-to-vanilla Js in there, including custom hooks for forms and http calls. On the back end, there is loads more vanilla Js logic.
See here: https://github.com/Zilifant/mhk-front
and here: https://github.com/Zilifant/mhk-back

I've also been building my own personal npm package of useful functions, including a somewhat silly attempt at a markdown syntax for outputting HTML.
See here: https://github.com/Zilifant/zilutil/tree/main/functions

Below, please find my solutions to the tasks from our meeting.

Lastly, I woud like to humbly defend my `location.pathname` answer. It is part of the HTML standard! I blanked at the time, but I do remember why I chose it over `window.location.href`. Basically, the question didn't specify the whole URL, only the path. So I opted for the method that would return just the path, rather than getting the whole URL and then breaking out a substring to test. Not sure if that is the best way to do it, but that was my logic.
See here: https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname

I look forward to hearing from you.

Best,
Scott

*/

var rentalInventory = {
  Store_1: {
    Compact: [
      { lic: '63A9540', rented: false },
      { lic: '5WAS988', rented: false },
      { lic: '5GCV293', rented: false },
    ],
    'Mid-size': [
      { lic: '6HQB328', rented: true },
      { lic: '89219S1', rented: false },
      { lic: 'BB8246F', rented: false },
    ],
    'Full-size': [
      { lic: 'H146525', rented: false },
      { lic: '7XLS324', rented: false },
      { lic: '155RDLO', rented: true },
    ],
    Luxury: [
      { lic: '8KEP939', rented: false },
      { lic: 'FFW2280', rented: false },
      { lic: '5WAT527', rented: false },
    ],
  },
  Store_2: {
    Compact: [
      { lic: '5KZZ235', rented: true },
      { lic: 'CYN9595', rented: true },
      { lic: '8FAY202', rented: false },
    ],
    'Mid-size': [
      { lic: '6HOY759', rented: false },
      { lic: 'LKT0574', rented: true },
      { lic: 'JEH8235', rented: false },
    ],
    'Full-size': [
      { lic: '82887JS', rented: false },
      { lic: 'BIR7807', rented: false },
      { lic: 'IC8P998', rented: false },
    ],
    Luxury: [
      { lic: 'SVJ2928', rented: true },
      { lic: '3768AY4', rented: false },
      { lic: 'MGMJGM7', rented: false },
    ],
  },
  Store_3: {
    Compact: [
      { lic: '53253A5', rented: false },
      { lic: 'HWL0721', rented: false },
      { lic: '915TQX1', rented: true },
    ],
    'Mid-size': [
      { lic: 'LHAJ496', rented: false },
      { lic: '7YRU986', rented: false },
      { lic: '61A914B', rented: true },
    ],
    'Full-size': [
      { lic: '4ROR340', rented: true },
      { lic: 'F69JLUP', rented: false },
      { lic: '7ZEL367', rented: false },
    ],
    Luxury: [
      { lic: '2425756', rented: false },
      { lic: 'T96DEG0', rented: false },
      { lic: 'ZV64693', rented: false },
    ],
  },
};

// 1. Remove car with license plate "6HOY759" from Store_2 and add it to Store_1.
const reassignCarByLic = (lic, inventory) => {
  // assign vars for readability
  const store1 = inventory.Store_1;
  const store2 = inventory.Store_2;

  for (const style in store2) {
    // find the car
    const car = store2[style].find((car) => car.lic === lic);

    if (car) {
      // remove the car from the list of styles
      store2[style] = store2[style].filter((car) => car.lic !== lic);
      // add car to store 1
      store1[style].push(car);
    }
  }
};

// 2. Return a summary of all unrented cars.
const generatedUnrentedCarSummary = (inventory) => {
  const summary = {};

  for (const store in inventory) {
    summary[store] = {};

    // assign var for readability
    const currentStore = inventory[store];
    for (const style in currentStore) {
      summary[store][style] = currentStore[style]
        .filter((car) => car.rented === false)
        .map((car) => car.lic);
    }
  }

  return summary;
};

// 3. Add a third key "color" to each car and set the value to an empty string.
const addColorProperty = (inventory) => {
  for (const store in inventory) {
    const currentStore = inventory[store];
    for (const style in currentStore) {
      inventory[store][style].forEach((car) => (car.color = ''));
    }
  }
};

reassignCarByLic('6HOY759', rentalInventory);

addColorProperty(rentalInventory);

// iterate for more readable log
Object.keys(rentalInventory).forEach((storeName) => {
  console.log(`${storeName}:`, rentalInventory[storeName]);
});

const unrentedCarsSummary = generatedUnrentedCarSummary(rentalInventory);
console.log(unrentedCarsSummary);
