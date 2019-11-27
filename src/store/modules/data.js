const state = {
    burgers: [
        {
            id: 11,
            name: 'Burger Angus',
            price: 17,
            img: require('../../assets/img/burgers/Burger Angus.jpg')
        },
        {
            id: 12,
            name: 'Burger vegetarian',
            price: 19,
            img: require('../../assets/img/burgers/Burger vegetarian.jpg')
        }
    ],
    crispys: [
        {
            id: 21,
            name: 'Crispy mic',
            price: 20,
            img: require('../../assets/img/crispy/Crispy 5 buc.jpg')
        },
        {
            id: 22,
            name: 'Crispy mare',
            price: 30,
            img: require('../../assets/img/crispy/Crispy 8 buc.jpg')
        }
    ],
    salads: [
        {
            id: 31,
            name: 'Salata greceasca',
            price: 15,
            img: require('../../assets/img/salate/Salata greceasca.jpg')
        },
        {
            id: 32,
            name: 'Salata de varza',
            price: 15,
            img: require('../../assets/img/salate/Salata de varza.jpg')
        }
    ],
    drinks: [
        {
            id: 41,
            name: 'Apa minerala / plata',
            price: 4,
            img: require('../../assets/img/bauturi/Apa minerala sau Apa plata.jpg')
        },
        {
            id: 42,
            name: 'Suc - gama pepsi',
            price: 5,
            img: require('../../assets/img/bauturi/Gama pepsi.jpg')
        }
    ],
    combos: [
        {
            id: 51,
            name: 'Crispy + Suc',
            price: 22.5,
            img1: require('../../assets/img/crispy/Crispy 5 buc.jpg'),
            img2: require('../../assets/img/bauturi/Gama pepsi.jpg')
        },
        {
            id: 52,
            name: 'Crispy + Apa',
            price: 21.5,
            img1: require('../../assets/img/crispy/Crispy 5 buc.jpg'),
            img2: require('../../assets/img/bauturi/Apa minerala sau Apa plata.jpg')
        },
        {
            id: 53,
            name: 'Crispy + salata la alegere',
            price: 31.5,
            img1: require('../../assets/img/crispy/Crispy 5 buc.jpg'),
            img2: require('../../assets/img/salate/Salata de varza.jpg')
        },
        {
            id: 54,
            name: 'Burger la alegere + Apa',
            price: 19,
            img1: require('../../assets/img/burgers/Burger Angus.jpg'),
            img2: require('../../assets/img/bauturi/Apa minerala sau Apa plata.jpg')
        },
        {
            id: 55,
            name: 'Burger la alegere + Suc',
            price: 20,
            img1: require('../../assets/img/burgers/Burger Angus.jpg'),
            img2: require('../../assets/img/bauturi/Gama pepsi.jpg')
        }
    ],
    price: 0,
    cumparaturi: [],
    cumparaturiLaCasa: [],
    nrDeOrdine: [1],
    checkoutList: []
};

const getters = {
    allBurgers: (state) => state.burgers,
    allCrispys: (state) => state.crispys,
    allSalads: (state) => state.salads,
    allDrinks: (state) => state.drinks,
    allCombos: (state) => state.combos,
    shopping: (state) => state.cumparaturi,
    shoppingToPay: (state) => state.cumparaturiLaCasa,
    price: (state) => state.price,
    nrDeOrdine: (state) => state.nrDeOrdine,
    checkoutList: (state) => state.checkoutList
};

const actions = {};

const mutations = {
    add(state, data){
        state.cumparaturi.push(data);
        mutations.calcPrice()
    },
    checkIfEmpty(state, data){
        if(state.cumparaturi.length == 0){
            mutations.add(state, data);
        } else {
            mutations.incrementOrAdd(state, data);
        }
    },
    incrementOrAdd(state, data) {
        let foundElement = false;
        for (let i = 0; i < state.cumparaturi.length; i++) {
            if (state.cumparaturi[i].id == data.id) {
                foundElement = true;
                state.cumparaturi[i].quantity += 1;
                mutations.calcPrice();
                break;
            }
        }
        if(foundElement == false){
          mutations.add(state, data)
        }
    },
    clearArray(state){
        state.cumparaturi = [];
        state.price = 0;

    },
    calcPrice(){
        state.price = 0;
        for (let i = 0; i < state.cumparaturi.length; i++) {
            state.price += state.cumparaturi[i].price * state.cumparaturi[i].quantity;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}