import { getAuth, createUserWithEmailAndPassword,updateProfile,signOut,signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup, GoogleAuthProvider   } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase()
const UseFirebase = () => {
const auth = getAuth();
const [user,setUser]=useState({})
const [error,setError]=useState('')
const [isLoading,setIsLoading]=useState(true)

// registration
  const registerFunction=(email,password,name,navigate)=>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setError('')
      const user = userCredential.user;
     const info={...user,displayName:name}
     setUser(info)
     updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
      }).catch((error) => {
      })
      navigate('/home')
    })
    .catch((error) => {
        setError(error.message) 
      })
      .finally(()=>setIsLoading(false))
  }
  



   const loginFunction=(email,password,location,navigate)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setError('')
        const ridairect_uri=location.state?.from || '/home'
        navigate(ridairect_uri)
    })
    .catch((error) => {
    setError(error.message) 
    })
    .finally(()=>setIsLoading(false))
   }



   const googleSingIn=()=>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        setError('')
    }) 
    .catch((error) => {
    setError(error.message) 
    })
    .finally(()=>setIsLoading(false))

}

const logOut=()=>{
    signOut(auth).then(() => {
        setUser({})
    })
      .catch((error) => {
        setError(error.message) 
      });
}




// strong user
   useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser({})
        } 
        setIsLoading(false)
      });
      return()=>unsubscribe
   },[])








  return{
    registerFunction,
    loginFunction,
    googleSingIn,
    logOut,
    user,
    error,
    isLoading
  }




};

export default UseFirebase;