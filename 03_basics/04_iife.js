//  Immideately Invoked Function Expression (IIFE)
//This is used to remove the gloabl scope pollution which make it faster
(function chai(){
    //named iife
    console.log("Database connected");
    
})();//must end with semicolon because the  new iifm expression will not run without semicolon

( () => {
    //unnamed or arrow iife
    console.log("Database Connneted two");
    
})();

( (name) => {
    //parametered iifi
    console.log(`Database Connneted two ${name}`);
    
})("Suraj");