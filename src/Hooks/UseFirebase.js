import { getAuth, createUserWithEmailAndPassword,updateProfile,signOut,signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup, GoogleAuthProvider   } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import swal from 'sweetalert';
initializeFirebase()
const UseFirebase = () => {
const auth = getAuth();
const [user,setUser]=useState({})
const [error,setError]=useState('')
const [error2,setError2]=useState('')
const [isLoading,setIsLoading]=useState(true)
const [admin,setAdmin]=useState(false)
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
      userInfoSvae(email,name)
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
        setError2('')
        const ridairect_uri=location.state?.from || '/home'
        navigate(ridairect_uri)
    })
    .catch((error) => {
    setError2(error.message) 
    })
    .finally(()=>setIsLoading(false))
   }



   const googleSingIn=()=>{
    setIsLoading(true)
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



   const userInfoSvae=(email,name)=>{
     const newUser={email,name}
     fetch(`https://floating-shore-46558.herokuapp.com/User`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    body:JSON.stringify(newUser)
     }).then(res=>res.json())
     .then(data=>{
       if(data.insertedId){
        swal("Good Job", "your Information successfully saved", "success");

       }
     })

    
   }


    useEffect(()=>{
      fetch(`https://floating-shore-46558.herokuapp.com/User/${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        if(data.admin){
          setAdmin(true)
        }
      })
    },[user.email])










  return{
    registerFunction,
    loginFunction,
    googleSingIn,
    logOut,
    user,
    error,
    isLoading,
    admin,
    error2
  }




};

export default UseFirebase;