     export const levelData = {
  1: {
    dayInstructions: 'Your type value tells your reducer what action you\’re sending it. *> If you look at your current reducer, the only action type they can take right now is \'COOK_WAFFLE\'. Try dispatching it an action with that type! *> Note: Your reducers are written with switch statements. If you’re not familliar with them, check out this link: (mdn link)',
    nightInstructions: 'Alright! That was a great first day! But your customers will soon get bored if you only serve waffles won\’t they?Let’s make a new dish for our reducer to cook! *> Your reducer here is a function with a switch statement. To create a new case, you will need to put a new action type and a new return statement to say which part of your state you want to change. *> Check out the case above it if you need a reference! You want it to look almost exactly the same, only with biscuits instead of waffles. *> hint: case types are written in all caps with an underscore for spaces: (‘SNAKE_CASE’)',
    answersDay: ["COOK_WAFFLES", "COOK_WAFFLES", "COOK_WAFFLES"],
    answersNight: ["COOK_BISCUITS", "biscuits", "biscuits"],
    promptDay : ["var action = {", "&ensp;type : <input type='text' id='type' placeholder='action type' ref='input1' />", "}"],
    promptNight : ["function waffleStation(state = initialState, action){" , "&ensp;switch(action.type){" , "&ensp;&ensp;case 'COOK_WAFFLE:'" , "&ensp;&ensp;&ensp;return{cookedWaffles:cookedWaffles +1 };", "&ensp;&ensp;case <input type=text placeholder='action type' ref='input1'></input>:" , "return{<input type=text placeholder='state slice' ref='input2'></input> : <input type=text placeholder='state slice' ref='input3'></input> +1};", "&ensp;}", "}"]
  },
  2: {
    dayInstructions: 'Make sure to pay attention to what the customer is ordering! *> You\'ll have to dispatch a different action for differrent orders.',
    nightInstructions: 'Your new biscuits area hit! How about you make your robot more efficient, and rake in even more cash! *> A payload is an extra piece of info you send with your action to your reducer. In your case, this will be a quantity value, so your robot can make more than one waffle at a time! To do this, you need to modify your reducer to use this payload. *> Here\'s your reducer. Let\'s put action.quantity where the "1" used to be, so it will use your quantity payload to cook as many waffles as you want!',
    answersDay: ["COOK_WAFFLES"],
    answersNight: [],
    promptDay : ["var action = {", "&ensp;type : <input type='text' id='type' placeholder='action type' ref='input1' />", "}"],
    promptNight : ["function waffleStation(state = initialState, action){" , "&ensp;switch(action.type){" , "&ensp;&ensp;case 'COOK_WAFFLE:'" , "&ensp;&ensp;&ensp;return{cookedWaffles:cookedWaffles +1 };", "&ensp;&ensp;case <input type=text placeholder='action type' ref='input1'></input>:" , "return{<input type=text placeholder='state slice' ref='input2'></input> : <input type=text placeholder='state slice' ref='input3'></input> +1};", "&ensp;}", "}"]
  },
  3: {
    dayInstructions: '',
    nightInstructions: '',
    answersDay: ["COOK_WAFFLES"],
    answersNight: [],
    promptDay : ["function waffleStation(state = initialState, action){" , "&ensp;switch(action.type){" , "&ensp;&ensp;case 'COOK_WAFFLE:'" , "&ensp;&ensp;&ensp;return{cookedWaffles:cookedWaffles +1};", "&ensp;&ensp;case <input type=text></input>:" , "return{<input type=text></input> : <input type=text></input> +1};", "&ensp;}", "}"],
    promptNight : ["&ensp;&ensp;case 'COOK_WAFFLE:'" , "&ensp;&ensp;&ensp;return{cookedWaffles:cookedWaffles +1};", "&ensp;&ensp;case <input type=text></input>:" , "return{<input type=text></input> : <input type=text></input> +1};", "&ensp;}", "}"]
  }
}
