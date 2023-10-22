import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { storage } from "../../firebase/config";
import { ref, uploadBytesResumable } from "firebase/storage";
// import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

// const storage = getStorage();

// const upload = async (file, currentUser) => {
//     const fileRef = ref(storage, "profileAvatars/" + currentUser + ".png");
//     const snapshot = await uploadBytesResumable(fileRef, file);
// };

const upload = async (file, currentUser) => {
    const response = await fetch(file);
    const blob = await response.blob();
    const fileRef = ref(storage, "profileAvatars/" + currentUser + ".png");
    await uploadBytesResumable(fileRef, blob);
};

export const registration = createAsyncThunk(
    "authorization/registration",
    async (userData, thunkAPI) => {
        try {
            const { userName, email, password, userPhoto } = userData;
            const tryRegistration = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (tryRegistration) {
                await updateProfile(auth.currentUser, {
                    displayName: userName,
                    photoURL: userPhoto,
                });

                await upload(userPhoto, tryRegistration.user.uid);
                return tryRegistration.user;
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    "authorization/login",
    async (userData, thunkAPI) => {
        try {
            const { email, password } = userData;
            const tryLogin = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (tryLogin) {
                const uid = tryLogin.user.uid;
                console.log(uid);
                const userPhotoName = uid + ".png";
                console.log(userPhotoName);

                let imageRef = storage.ref("profileAvatars/" + userPhotoName);
                imageRef
                    .getDownloadURL()
                    .then(url => {
                        //from url you can fetched the uploaded image easily
                        this.setState({ profileImageUrl: url });
                    })
                    .catch(e =>
                        console.log("getting downloadURL of image error => ", e)
                    );
            }
            return tryLogin._tokenResponse;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    "authorization/logout",
    async (userData, thunkAPI) => {
        try {
            const result = await auth.signOut();
            return result;
            return tryLogin._tokenResponse;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
