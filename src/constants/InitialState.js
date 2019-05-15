export const initialState = {

  userState: {
    kitchen: {
      waffles: 1,
      strawberryWaffles: 2,
      biscuits: 2
    },
    pantry: {
      batter: 5,
      strawberries: 7
    }
  },

  userLevel: 1,
  dayTime: false,
  customerCount: 1,

  levelData: {
    1: {
      dayInstructions: '',
      nightInstructions: '',
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
};
