const state = {
    burgers: [
        {
            id: 1,
            name: 'Burger Angus',
            price: 'xx lei',
            img: require('../../assets/img/burgers/Burger Angus.jpg')
        },
        {
            id: 2,
            name: 'Burger vegetarian',
            price: 'yy lei',
            img: require('../../assets/img/burgers/Burger vegetarian.jpg')
        }
    ],
    crispys: [
        {
            id: 1,
            name: 'Crispy mic',
            price: 'xx lei',
            img: require('../../assets/img/crispy/Crispy 5 buc.jpg')
        },
        {
            id: 2,
            name: 'Crispy mare',
            price: 'yy lei',
            img: require('../../assets/img/crispy/Crispy 8 buc.jpg')
        }
    ],
    salads: [
        {
            id: 1,
            name: 'Salata greceasca',
            price: 'xx lei',
            img: require('../../assets/img/salate/Salata greceasca.jpg')
        },
        {
            id: 2,
            name: 'Salata de varza',
            price: 'yy lei',
            img: require('../../assets/img/salate/Salata de varza.jpg')
        }
    ],
    drinks: [
        {
            id: 1,
            name: 'Apa minerala / plata',
            price: 'xx lei',
            img: require('../../assets/img/bauturi/Apa minerala sau Apa plata.jpg')
        },
        {
            id: 2,
            name: 'Suc - gama pepsi',
            price: 'yy lei',
            img: require('../../assets/img/bauturi/Gama pepsi.jpg')
        }
    ],
    combos: [
        {
            id: 1,
            name: 'Crispy + Suc',
            price: 'xx lei',
            img1: require('../../assets/img/crispy/Crispy 5 buc.jpg'),
            img2: require('../../assets/img/bauturi/Gama pepsi.jpg')
        },
        {
            id: 2,
            name: 'Crispy + Apa',
            price: 'yy lei',
            img1: require('../../assets/img/crispy/Crispy 5 buc.jpg'),
            img2: require('../../assets/img/bauturi/Apa minerala sau Apa plata.jpg')
        },
        {
            id: 3,
            name: 'Crispy + salata la alegere',
            price: 'xx lei',
            img1: require('../../assets/img/crispy/Crispy 5 buc.jpg'),
            img2: require('../../assets/img/salate/Salata de varza.jpg')
        },
        {
            id: 4,
            name: 'Burger la alegere + Apa',
            price: 'yy lei',
            img1: require('../../assets/img/burgers/Burger Angus.jpg'),
            img2: require('../../assets/img/bauturi/Apa minerala sau Apa plata.jpg')
        },
        {
            id: 5,
            name: 'Burger la alegere + Suc',
            img1: require('../../assets/img/burgers/Burger Angus.jpg'),
            img2: require('../../assets/img/bauturi/Gama pepsi.jpg')
        }
    ],
    cumparaturi: []
};

const getters = {
    allBurgers: (state) => state.burgers,
    allCrispys: (state) => state.crispys,
    allSalads: (state) => state.salads,
    allDrinks: (state) => state.drinks,
    allCombos: (state) => state.combos,
    shopping: (state) => state.cumparaturi
};

const actions = {};

const mutations = {
    add(state, data){
        state.cumparaturi = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}