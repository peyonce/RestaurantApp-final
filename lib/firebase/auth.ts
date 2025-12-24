import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential
} from 'firebase/auth';
import { auth } from './config';
import { User as AppUser } from '../types';

export const registerUser = async (
  email: string, 
  password: string, 
  userData: { name: string; surname: string; phone: string; address: string }
): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update user profile with additional data
    await updateProfile(userCredential.user, {
      displayName: `${userData.name} ${userData.surname}`
    });

    return userCredential;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const formatUserData = (firebaseUser: User): AppUser => {
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email || '',
    name: firebaseUser.displayName?.split(' ')[0] || '',
    surname: firebaseUser.displayName?.split(' ')[1] || '',
    phone: '',
    address: '',
    createdAt: new Date(),
  };
};
