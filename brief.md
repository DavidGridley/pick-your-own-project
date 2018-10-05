# Pick your own project

Build an app of your choice.

- You are free to use any technologies covered so far, but feel free to try new technologies you find interesting.
- Keep it simple. Aim to get the basic functionality working on day one. You can then extend it on days two and three.
- Feel free to use an external API to provide additional functionality to your app. Use an API that either does not have any authentication or uses API keys.
- This is an opportunity to practice the parts you have challenging so far and improve your understanding of them.
- Use pen and paper to draw a diagram of the webpage layout before starting to code. Have a think about what components you will need in advance.
- Use prop-types and stateless components where appropriate.
- Try to use Sass to create a separate stylesheet for each component.
- Try to add some unit testing. Some parts will be easier to test than others, focus on those first.
- Think about how to organise your data in advance
- Make sure your app is responsive
- Commit frequently
- Create pull request at the end
- Demos will be at 4pm on Friday
- Keep it simple

## Technical notes

* Run `npm install` after cloning to download all dependencies
* Use `npm run dev -- --watch` to build React
* Use `npm test` or `npm test -- --watchAll` to run tests

## README

* Produce a README.md which explains
  * what the project does
  * what technologies it uses
  * how to build it and run it
  * any unresolved issues the user should be aware of

## Inspiration

- Take a look at [https://public-apis.jeremyfairbank.com/](https://public-apis.jeremyfairbank.com/) or [https://github.com/toddmotto/public-apis](https://github.com/toddmotto/public-apis) for possible APIs to use.

## Default option

If you are struggling to think of a project to build. Try to create a Top Trumps using the [Star Wars API](https://swapi.co/) which allows one user to play the game against the computer.

- On load, fetch all vehicles from [https://swapi.co/api/vehicles/](https://swapi.co/api/vehicles/) end point.
- Randomise the cards and deal half to player and half to computer.
- Display top card to user
- Allow user to pick an attribute from their card such as `cost_in_credits`, `length`, `max_atmosphering_speed`, `crew`, `passengers`, `cargo_capacity`.
- If the value for chosen attribute is higher on the user's card than on computer's top card, they win the computer's card and it should be taken from computer's deck and added to the bottom of the user's deck. If the attribute is higher on the computer's top card, then user's card should be taken from the user's deck and added to the bottom of computer's deck.
- Game continues until either user or computer has all the cards.
- Implement some features of your choosing.
