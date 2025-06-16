import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'influencer' or 'brand'
  const [isPaidMember, setIsPaidMember] = useState(false);
  const [loading, setLoading] = useState(true);

  function signup(email, password, type, displayName) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Set user type in local storage for persistence
        localStorage.setItem('userType', type);
        setUserType(type);
        
        // Update profile with display name
        return updateProfile(userCredential.user, {
          displayName: displayName
        });
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Retrieve user type from local storage
        const storedUserType = localStorage.getItem('userType');
        if (storedUserType) {
          setUserType(storedUserType);
        }
      });
  }

  function logout() {
    return signOut(auth);
  }

  // Check if user is a paid member
  function checkPaidStatus(userId) {
    // This would normally be an API call to check subscription status
    // For demo purposes, we're simulating with a timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate that some users are paid members
        const isPaid = userId ? userId.length % 2 === 0 : false;
        setIsPaidMember(isPaid);
        resolve(isPaid);
      }, 500);
    });
  }

  // Function to determine if content should be hidden based on paid status
  function shouldHideContent(contentOwnerId) {
    // If viewing own profile, show everything
    if (currentUser && currentUser.uid === contentOwnerId) return false;
    
    // If viewer is paid member, show everything
    if (isPaidMember) return false;
    
    // Otherwise, hide sensitive information
    return true;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Retrieve user type from local storage
        const storedUserType = localStorage.getItem('userType');
        if (storedUserType) {
          setUserType(storedUserType);
        }
        
        // Check paid status
        checkPaidStatus(user.uid);
      } else {
        setUserType(null);
        setIsPaidMember(false);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userType,
    isPaidMember,
    signup,
    login,
    logout,
    shouldHideContent,
    checkPaidStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
