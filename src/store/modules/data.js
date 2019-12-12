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
    crispy: [
        {
            id: 21,
            name: 'Crispy 5 buc',
            price: 20,
            img: require('../../assets/img/crispy/Crispy 5 buc.jpg')
        },
        {
            id: 22,
            name: 'Crispy 8 buc',
            price: 30,
            img: require('../../assets/img/crispy/Crispy 8 buc.jpg')
        }
    ],
    salate: [
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
    bauturi: [
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
    combo: [
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
    categorii1: [],
    categorii2: [],
    price: 0,
    cumparaturi: [],
    cumparaturiLaCasa: [],
    nrDeOrdine: [1],
    checkoutList: [],
    allLength: 0,
    showCart: false,
    logIn: true,
    admin: {
        user: 'admin',
        password: '1234'
    }
};

const getters = {
    allBurgers: (state) => state.burgers,
    allCrispys: (state) => state.crispy,
    allSalads: (state) => state.salate,
    allDrinks: (state) => state.bauturi,
    allCombos: (state) => state.combo,
    shopping: (state) => state.cumparaturi,
    shoppingToPay: (state) => state.cumparaturiLaCasa,
    price: (state) => state.price,
    nrDeOrdine: (state) => state.nrDeOrdine,
    checkoutList: (state) => state.checkoutList,
    allLength: (state) => state.allLength,
    showCart: (state) => state.showCart,
    logIn: (state) => state.logIn,
    admin: (state) => state.admin,
    categorii1: (state) => state.categorii1,
    categorii2: (state) => state.categorii2
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
        mutations.hideCartContent();

    },
    calcPrice(){
        state.price = 0;
        for (let i = 0; i < state.cumparaturi.length; i++) {
            state.price += state.cumparaturi[i].price * state.cumparaturi[i].quantity;
        }
    },
    addToLength(){
        state.allLength = state.cumparaturiLaCasa.length + state.checkoutList.length
    },
    showCartContent() {
        state.showCart = true;
    },
    hideCartContent(){
        state.showCart = false;
    },
    logInFalse(){
        state.logIn = false
    },
    logInTrue(){
        state.logIn = true
    },
    addToCat(state, payload){
        let produs = payload.produs;

        switch (payload.categorie){
            case 'burgers':
                produs.id = state.burgers[state.burgers.length - 1].id + 1;
                produs.img = require('../../assets/img/menu/burgers.jpg');
                state.burgers.push(produs);
                break;
            case 'crispy':
                produs.id = state.crispy[state.crispy.length - 1].id + 1;
                produs.img = require('../../assets/img/menu/crispy.jpg');
                state.crispy.push(produs);
                break;
            case 'salate':
                produs.id = state.salate[state.salate.length - 1].id + 1;
                produs.img = require('../../assets/img/menu/salate.jpg');
                state.salate.push(produs);
                break;
            case 'bauturi':
                produs.id = state.bauturi[state.bauturi.length - 1].id + 1;
                produs.img = require('../../assets/img/menu/bauturi.jpg');
                state.bauturi.push(produs);
                break;
            case 'combo':
                produs.id = state.combo[state.combo.length - 1].id + 1;
                // produs.img = require('../../assets/img/menu/bauturi.jpg');
                state.combo.push(produs);
                break;
            default: break;
        }
    },
    changeCat(state, payload){
        if(payload.cat == 1){
            switch (payload.name) {
                case 'burgers': state.categorii1 = state.burgers;
                    break;
                case 'crispy': state.categorii1 = state.crispy;
                    break;
                case 'salate': state.categorii1 = state.salate;
                    break;
                case 'bauturi': state.categorii1 = state.bauturi;
                    break;
                default: break;
            }
        } else if(payload.cat == 2) {
            switch (payload.name) {
                case 'burgers': state.categorii2 = state.burgers;
                    break;
                case 'crispy': state.categorii2 = state.crispy;
                    break;
                case 'salate': state.categorii2 = state.salate;
                    break;
                case 'bauturi': state.categorii2 = state.bauturi;
                    break;
                default: break;
            }
        }
    }

};

export default {
    state,
    getters,
    actions,
    mutations
}