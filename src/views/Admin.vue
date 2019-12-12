<template>
    <div class="admin">
        <div class="content" v-show="logIn == false">
            <button @click="logOut">Log Out</button>
            <div class="interfata">
                <div class="produs">
                    <h3>Alege categoria: </h3>
                    <select v-model="categorie" @change="checkIfTrue">
                        <option value=""></option>
                        <option value="burgers">Burgers</option>
                        <option value="crispy">Crispy</option>
                        <option value="salate">Salate</option>
                        <option value="bauturi">Bauturi</option>
                    </select>
                    <div v-show="showCat">
                        <p>Adaugati un produs in categoria: <b>{{ categorie.toUpperCase() }} </b></p>
                        <input type="text" placeholder="Nume produs..." v-model="produs.name"><br>
                        <input type="number" placeholder="Pret produs..." v-model="produs.price"><br><br>
                        <button @click="addToCat(categorie, produs)">Adaugati produs</button>
                    </div>
                </div>
                <div class="combo">
                    <h3>Creati un combo nou:</h3>
                    <div class="categorii">
                        <div class="cat">
                            <p><b>Produs nr 1:</b></p>
                            <select v-model="categorieCombo1" @change="alegeCat(1, categorieCombo1)">
                                <option value=""></option>
                                <option value="burgers">Burgers</option>
                                <option value="crispy">Crispy</option>
                                <option value="salate">Salate</option>
                                <option value="bauturi">Bauturi</option>
                            </select>

                            <div class="produsDinCat" v-show="showCat1">
                                <p>Alegeti un produs din categoria: <b>{{categorieCombo1.toUpperCase()}}</b></p>
                                <select v-model="produs1" @change="showprod2">
                                    <option value=""></option>
                                    <option v-for="produs in categorii1" :key="produs.index" :value=produs.name>
                                        {{ produs.name }}
                                    </option>
                                </select>
                                <p>{{produs1}}</p>
                            </div>
                        </div>
                        <div class="cat" v-show="showNextProd">
                            <p><b>Produs nr 2:</b></p>
                            <select v-model="categorieCombo2" @change="alegeCat(2, categorieCombo2)">
                                <option value=""></option>
                                <option value="burgers">Burgers</option>
                                <option value="crispy">Crispy</option>
                                <option value="salate">Salate</option>
                                <option value="bauturi">Bauturi</option>
                            </select>

                            <div class="produsDinCat" v-show="showCat2">
                                <p>Alegeti un produs din categoria: <b>{{categorieCombo2.toUpperCase()}}</b></p>
                                <select v-model="produs2" @change="showDet">
                                    <option v-for="produs in categorii2" :key="produs.index" :value=produs.name>
                                        {{ produs.name }}
                                    </option>
                                </select>
                                <p>{{produs2}}</p>
                            </div>
                        </div>

                        <div class="details" v-show="showDetails">
                            <input type="text" placeholder="Nume combo..." v-model="combo.name"><br>
                            <input type="number" v-model="combo.price"><br><br>
                            <button @click="addToCat('combo', combo)">Adaugati combo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="logIn" v-show="logIn">
            <form>
                <input id="admin" type="text" placeholder="Username...">
                <input id="pass" type="text" placeholder="Password...">
                <button type="button" @click="checkAdmin()">Log In</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Store from '../store/index.js'

    export default {
        name: "Admin",
        data(){
            return{
                categorie: '',
                showCat: false,
                produs:{
                    id: 0,
                    name: '',
                    price: 0,
                    img: ''
                },
                categorieCombo1: '',
                categorieCombo2: '',
                showCat1: false,
                showCat2: false,
                showNextProd: false,
                showDetails: false,
                produs1: '',
                produs2: '',
                combo:{
                    id: 0,
                    name: '',
                    price: 0,
                    img1: '',
                    img2: ''
                }
            }
        },
        computed: mapGetters(['logIn', 'admin', 'categorii1', 'categorii2','allBurgers']),
        methods: {
            checkAdmin(){
                let admin = document.getElementById('admin').value;
                let pass = document.getElementById('pass').value;
                if(admin === this.admin.user && pass === this.admin.password){
                    Store.commit('logInFalse')
                }
            },
            logOut(){
                Store.commit('logInTrue')
            },
            checkIfTrue() {
                if (this.categorie != '') {
                    this.showCat = true
                } else {
                    this.showCat = false
                }
            },
            addToCat(cat, data) {
                Store.commit('addToCat', {categorie: cat, produs: data});
                alert("Ati adaugat un produs nou in categoria " + cat);
                this.showCat = false;
                this.showCat1 = false;
                this.showCat2 = false;
                this.showNextProd = false;
                this.showDetails = false
            },
            alegeCat(cat, name){
                if(cat == 1){
                    if (this.categorieCombo1 != '') {
                        this.showCat1 = true
                    } else {
                        this.showCat1 = false
                    }
                } else if(cat == 2) {
                    if (this.categorieCombo2 != '') {
                        this.showCat2 = true
                    } else {
                        this.showCat2 = false
                    }
                }
                Store.commit('changeCat', {cat: cat, name: name})
            },
            showprod2(){
                if (this.produs1 != '') {
                    this.showNextProd = true
                } else {
                    this.showNextProd = false
                }
            },
            showDet(){
                if (this.produs2 != '') {
                    this.showDetails = true
                } else {
                    this.showDetails = false
                }
            }
        }
    }
</script>

<style scoped>
    .interfata{
        display: flex;
        justify-content: space-evenly;
    }
    .categorii{
        display: flex;
        flex-direction: column;
    }
    .cat{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        align-items: center;
    }
    .produs, .combo{
        width: 50%;
        border-radius: 40px;
        background: #eeeeee;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        text-align: center;
        margin: 25px;
    }
</style>