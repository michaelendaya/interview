import Vuex from "vuex";
const createStore = () => {
    return new Vuex.Store({
        state:{
            isLoggedIn:false
        },mutations:{
            authUser(state){
                state.isLoggedIn = true;
            },
            logoutUser(state){
                state.isLoggedIn = false;
            }
        },actions:{
            login(context){
                console.log("HELO")
                context.commit("authUser")
            },
            logout(context){
                context.commit("logoutUser")

            }
        

        },getters:{
        isLoggedIn(state){
            return state.isLoggedIn
        }
        }
    })
}
export default createStore