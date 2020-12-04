import { combineReducers } from "redux";
// import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";



const initialState = {
  blog:JSON.parse(localStorage.getItem("blog")) || [
    {id:'123',title:"Fast & Furious", story:"Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists and spies. The franchise also includes short films, a television series, live shows, video games and theme park attractions. It is distributed by Universal Pictures"},
    
    {id:'13',title:"Ocean's Eleven", story:"Danny Ocean, a gangster, assembles a group of eleven people in an effort to steal money from three popular casinos in Las Vegas owned by his rival, Terry Benedict.."},
    {id:'12',title:"Hera Pheri", story:"The plot revolves around an eccentric trio, consisting of a comically hilarious but kind-hearted garage owner named Baburao Ganpatrao Apte, fondly called as Babu Bhaiya (Paresh Rawal), a crafty and cunning loafer named Raju (Akshay Kumar), and a simple and struggling pauper named Ghanshyam a.k.a. Shyam (Sunil Shetty), who find themselves trapped in crazy shenanigans including hilarious bits from Baburao himself."},
  ]
};
  
  function blogReducer(state = initialState, action) {
  
    const { type, payload } = action;
  
    switch (type) {
  
      case "ADD":
          let updatedBlog = [...state.blog, {...payload}];
          localStorage.setItem('blog', JSON.stringify([...state.blog, {...payload}]))
        return {
          ...state,
          blog: [...updatedBlog],
        };
  
      case "DELETE":
          let newUpdate = state.blog.filter(
              (item) => item.id !== payload
          );

          let newArray = JSON.stringify(newUpdate);
          localStorage.blog = newArray
        return {
          ...state,
          blog: newUpdate,
        };
  
      case "EDIT":
          let EditUpdate = state.blog.filter((blog) => blog.id !== payload.id)
          let newEditUpdate = [...EditUpdate, payload]
          let newEditArray = JSON.stringify(newEditUpdate);
          localStorage.blog = newEditArray
        return {
          ...state,
          blog: newEditUpdate,
        };
  
      default:
        return state;
    }
  }
  

 

const initState = {

  authError : null
}

const authReducer = (state = initState, action) => {
    switch(action.type){

        case "LOGIN_ERROR":
            console.log("loggin error")
            return {
                 ...state,
                authError:"Login failed"
                } 
      
        case "LOGIN_SUCCESS" :
            console.log("login success")
            alert("login success")
            return {
                ...state,
                authError:null
              
                
            } 
          
            
        case "SIGNOUT_SUCCESS" :
            alert ("sign out successful ")      
            console.log ("sign out successful ") 
        
         break;
            
        case "REGISTRATION_SUCCESS" :
            console.log("registration success")
            alert("Registered")  
            return{
                ...state,
                authError:null
            } 
           
        case "REGISTRATION_ERROR" :
                console.log("registration failed")
                alert("RE--Registered")  
                return{
                    ...state,
                    authError:action.err.message
                }      
    
         default:
            return state; 
           
            
               
            
    }
}

// export default authReducer;




const rootReducer  = combineReducers({
    auth: authReducer,
    blogState: blogReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    profile: authReducer,
    
})

export default rootReducer 

//   const initialUserState = {
//     user: JSON.parse(localStorage.getItem("user")) || null,
//     isAuthenticating: false,
//   };
  
  
  
//   const userReducer = (state = initialUserState, action) => {
  
//     const { type, payload } = action;
  
//     switch (type) {
  
//       case "SET_USER":
//         const userJSON = JSON.stringify(payload);
//         localStorage.setItem("user", userJSON);
//         return { ...state, user: payload };
  
//       case "TOGGLE_AUTH_STATE":
//         return { ...state, isAuthenticating: !state.isAuthenticating };
  
//       case "LOGOUT_USER":
//         localStorage.removeItem("user");
//         return { ...state, user: null };
        
//       default:
//         return state;
//     }
//   };




// const rootReducer  = combineReducers({
//     userState: userReducer,
//     blogState: blogReducer,
    
// })

// export default rootReducer