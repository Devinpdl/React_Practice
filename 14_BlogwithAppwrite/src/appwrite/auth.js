// import conf from "../conf/conf";
// import { Client, Account, ID } from "appwrite";
//  export class AuthService {
//     //here we created a class called authservice that will handle all the authentication related operations.
//     //Now, we do create client and account for our app.
//  client = new Client();
//  //Now, we need to create account right?
//  account;
//  //Here, we do write only variable name coz we know account can be created using const account = new Account(client);
// //Also, with the client you've to create setEndpoints with project DB url and setProject with project ID.
// //Now, when there's creation of object through this class then it automatically sets end points and project.
// //So, there must be creation of client and then only you can do have proper access of account right?
// //Now, when the object is created then call the constructor where you will initialize your account.
// constructor() {
//     //Inside the constructor we do give the references of client..
//     this.client
//     //We do access the endpoints and projectID through config.js
//     .setEndpoint(conf.appwriteUrl)
//     .setProject(conf.appwriteProjectId);
//     this.account = new Account(this.client);

// }
//     //Here, we do create a method to wait and do call every services of the appwrite..
//     //Also,we do use async wait method just coz until there won't happens of creation of an account we don't
//     //go to next step like login ..
//     async createAccount({email,password,name}) {
//         // our method is createAccount and inside it need some parameters and we have destructure and make
//         //it email,password and name..
//         //If account creation may get fails then we have to handle the error using try catch..
//         try {
//           const userAccount=  await this.account.create(ID.unique(),email,password,name);
//           //We're passing ID.unique() which gives unique id from Appwrite each time so no two users'll have same ID.
//           //And we're passing other values email, password and name as it is just to await until account do created..
//           if (userAccount) {
//             //Call another method like; Let say, If user created successfully then put the method to get login..
//             return this.login(email,password)
//             //This helps to login into newly created account.


//             // return userAccount;
//           } else {
//             return userAccount;
            
//           }
//         } catch (error) {
//             throw error; //It can easily handle error in backend side..
            
//         }
//     }
//     async login({email, password}){
//         try {
//          const session= await this.account.createEmailSession(email,password);
//          //Here, you can also directly do return await method instead of holding it in mylogin..
//          //Here, createEmailSession returns a JWT which is used for authentication with Appwrite API routes 
//          //and Appwrite SDK methods.
//          return session;
            
//         } catch (error) {
//             throw error;
            
//         }
//     }
//     //Now, if user directly does get lands in Homepage and let's check if user is logged in or not..
//     //So, here we are creating a method called isAuthenticated..
//     async isAuthenticated() {
//       try {
//        const currentUser = await this.account.get();
//        //Getting current active session from Appwrite server..
//        //if there is any valid session present in users browser then it will give us an object otherwise null..
//        return currentUser;
//       }
//       catch(error){
//        console.log("Appwrite Service :: isAuthenticated :: error", error);
//       }
//       //If there's problem in try..catch method and if can't get the user account details then we do return null..
//       return null;
//     }
//     //Method to get logout..
//     async logOut(){
//         try {
//             await this.account.deleteSessions();
//             //we can also use this.account.deleteSession('current or session_ID');
            


            
//         } catch (error) {
//             console.log("APPWRITE SERVIE :: LOGOUT :: ERROR",error);
//         }
//     }

// }
// //Here, we create an object called authService using new keyword i.e; creating through constructor..
// //In another language, Create an instance of AuthService
// const authService = new AuthService();
// //Here, if someone signup and do create an object then there must be creation of client and
// // there must be proper way of accessing an account right?


// // export default AuthService;
// //Here if we directly export the class then whoever uses this class, you've to create new object from this class
// //Then, only the whole methods can be used...
// //So, insted of exporting class we do export object directly as below;
// // export default authService;
// // Export authService directly
// export { authService };


// authservice.js
// auth/authservice.js

// import { Client, Account, ID } from "appwrite";
// import conf from "../conf/conf"; // Assuming you have a configuration file

// class AuthService {
//     constructor() {
//         // Initialize Appwrite client and account
//         this.client = new Client()
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId);
//         this.account = new Account(this.client);
//     }

//     async createAccount(email, password, name) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             // // Handle successful sign-up
//             // return userAccount;
//             if (userAccount) {
//                 // call another method
//                 return this.login({email, password});
//             } else {
//                return  userAccount;
//             }
//         } catch (error) {
//             // Handle sign-up error
//             console.error("Error signing up:", error);
//             throw error;
//         }
//     }

//     async login(email, password) {
//         try {
//             const session = await this.account.createEmailSession(email, password);
//             // Handle successful login
//             return session;
//         } catch (error) {
//             // Handle login error
//             console.error("Error logging in:", error);
//             throw error;
//         }
//     }

//     // async getCurrentUser() {
//     //     try {
//     //         const currentUser = await this.account.get();
//     //         // Handle getting current user
//     //         return currentUser;
//     //     } catch (error) {
//     //         // Handle error getting current user
//     //         console.error("Error getting current user:", error);
//     //         throw error;
//     //     }
//     //     return null;
//     // }
//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             console.log("Appwrite service :: getCurrentUser :: error", error);
//         }
//         return null;
//     }



//     async logout() {
//         try {
//             await this.account.deleteSessions();
//             // Handle logout success
//             console.log("Logged out successfully");
//         } catch (error) {
//             // Handle logout error
//             console.error("Appwrite serive :: logout :: error", error);
//             throw error;
//         }
//     }
// }

// const authService = new AuthService();
// export { authService };

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js"; // Assuming you have a configuration file

console.log('Appwrite Configuration in authservice.js:', conf);

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    // constructor() {
    //     // Initialize Appwrite client and account
    //     this.client = new Client();
    //     this.client
    //     .setEndpoint('https://cloud.appwrite.io/v1')
    //     .setProject('661f8352840cf5476ff8');
    //     this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        // if this method fails, thats why we are using try and catch
        try {
            console.log("Creating account with email:", email);
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log("Account created successfully:", userAccount);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount   :: error ",error);
            throw error;
        }
    }

    async login({ email, password }){
        try {
            const session = await this.account.createEmailPasswordSession( email, password);
            //we changed account.createEmailSession to createEmailPasswordSession and error is fixed.
            if(session){
                const verify = this.emailVerification()
                if(verify){
                    return session;
                }
                else{
                    console.log("Account not created ");
                }
            }
        } catch (error) {
            console.log("Appwrite service :: login :: error ",error);
        }
    }
 // To check whether we are login or not for home page
    async getCurrentUser() {
        console.log("Endpoint:", conf.appwriteUrl);
    //     try {
    //         // console.log("Getting current user");
    //         // console.log("Endpoint:", this.client.config.endpoint); // Log the endpoint value
           
    //         // const uri = new URL(this.client.config.endpoint);
    //         const currentUser = await this.account.get();
    //         console.log("Current user:", currentUser);
    //         return currentUser;
    //     } catch (error) {
    //         console.error("Error getting current user:", error);
    //         // throw error;
    //         return null; 
    //     }
    // }
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);

    }
    return null;

    
}

    async logout() {
        console.log('Logging out');
        try {
            await this.account.deleteSessions();
            console.log("Logged out successfully");
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
    async emailVerification() {
        const url ='http://localhost:5173/all-posts/'
        return await this.account.createVerification(url).then(( response) => {
            console.log("Verify your acccount by clicking on the verification link in your email ",response);
        })
        .catch((error) => {
            console.log("Verification failed ",error);
        })
    }
}

// creating object for AuthService class and exporting it
const authService = new AuthService();
export default authService;
