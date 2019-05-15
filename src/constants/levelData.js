export const levelData = {
  1: {
    dayInstructions: 'Your type value tells your reducer what action you\’re sending it. *> If you look at your current reducer, the only action type they can take right now is \'COOK_WAFFLE\'. Try dispatching it an action with that type! *> Note: Your reducers are written with switch statements. If you’re not familliar with them, check out this link: (mdn link)',
    nightInstructions: 'Alright! That was a great first day! But your customers will soon get bored if you only serve waffles won\’t they?Let’s make a new dish for our reducer to cook! *> Your reducer here is a function with a switch statement. To create a new case, you will need to put a new action type and a new return statement to say which part of your state you want to change. *> Check out the case above it if you need a reference! You want it to look almost exactly the same, only with biscuits instead of waffles. *> hint: case types are written in all caps with an underscore for spaces: (‘SNAKE_CASE’)',
    answersDay: ["COOK_WAFFLES", "COOK_WAFFLES", "COOK_WAFFLES"],
    answersNight: ["COOK_BUSCUITS", "biscuits", "biscuits"],
  },
  2: {
    dayInstructions: '',
    nightInstructions: '',
    answersDay: ["COOK_WAFFLES"],
    answersNight: [],
  }
}
