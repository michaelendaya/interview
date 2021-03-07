export default function (context){
    console.log("HELLO")
    if(context.store.getters.isLoggedIn==false){
        context.redirect('/')
    }
}