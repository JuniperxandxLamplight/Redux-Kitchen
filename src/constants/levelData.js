export const levelData = {
  1: {
    dayInstructions: 'These are some instructions for level 1!',
    nightInstructions: '',
    answersDay: ["COOK_WAFFLES", "COOK_WAFFLES", "COOK_WAFFLES"],
    answersNight: ["COOK_BUSCUITS", "biscuits", "biscuits"],
    editorText : ["var action = {", "&ensp;type : <input type=text></input>", "}"]
  },
  2: {
    dayInstructions: '',
    nightInstructions: '',
    answersDay: ["COOK_WAFFLES"],
    answersNight: [],
    editorText : ["function waffleStation(state = initialState, action){" , "&ensp;switch(action.type){" , "&ensp;&ensp;case 'COOK_WAFFLE:'" , "&ensp;&ensp;&ensp;return{cookedWaffles:cookedWaffles +1};", "&ensp;&ensp;case <input type=text></input>:" , "return{<input type=text></input> : <input type=text></input> +1};", "&ensp;}", "}"]
  }
}
