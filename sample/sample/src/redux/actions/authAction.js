import firebase from "firebase";
import  "firebase/auth"


export const register = (user) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(
      user.email,
      user.password
    ).then((resp) =>{
      return firebase
      .firestore()
      .collection("users").doc(resp.user.uid).set({
        username:user.userName,
        firstIntial:user.userName[0],  
      })
    }).then(()=>{
      dispatch({type:"REGISTRATION_SUCCESS"})
    }).catch(err => {
      dispatch({type:"REGISTRATION_ERROR",err})
    })
  }
}


export const signIn = (credentials) => {
  return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password)
        .then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch((err) =>{
            dispatch({
                type:"LOGIN_ERROR,",err
            })
        })
      }
    }
    
            

export const signOut = () =>  {
  return (dispatch) =>{
      firebase.auth().signOut()
        .then(() => {
                    dispatch({ type: "SIGNOUT_SUCCESS" });
                  })
                 .catch(() => {
                dispatch({ 
                      type: "SIGNOUT_ERROR", 
                    });
                  });
                }
              }
// export const setUser = (user) => {
//   return {
//     type: "SET_USER",
//     payload: user,
//   };
// };

// export const logOutUser = () => {
//   return {
//     type: "LOGOUT_USER",
//   };
// };

// export const toggleIsAuthenticating = () => {
//   return {
//     type: "TOGGLE_AUTH_STATE",
//   };
// };
