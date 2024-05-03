import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    //here we created a class called authservice that will handle all the authentication related operations.
    //Now, we do create client and account for our app.
 client = new Client();
 //Now, we need to create account right?
 account;
 //Here, we do write only variable name coz we know account can be created using const account = new Account(client);
//Also, with the client you've to create setEndpoints with project DB url and setProject with project ID.
//Now, when there's creation of object through this class then it automatically sets end points and project.
//So, there must be creation of client and then only you can do have proper access of account right?
//Now, when the object is created then call the constructor where you will initialize your account.
constructor() {
    //Inside the constructor we do give the references of client..
    this.client
    //We do access the endpoints and projectID through config.js
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);

}
    //Here, we do create a method to wait and do call every services of the appwrite..
    //Also,we do use async wait method just coz until there won't happens of creation of an account we don't
    //go to next step like login ..
    async createAccount({email,password,name}) {
        // our method is createAccount and inside it need some parameters and we have destructure and make
        //it email,password and name..
        //If account creation may get fails then we have to handle the error using try catch..
        try {
          const userAccount=  await this.account.create(ID.unique(),email,password,name);
          //We're passing ID.unique() which gives unique id from Appwrite each time so no two users'll have same ID.
          //And we're passing other values email, password and name as it is just to await until account do created..
          if (userAccount) {
            //Call another method like; Let say, If user created successfully then put the method to get login..
            return this.login(email,password)
            //This helps to login into newly created account.


            // return userAccount;
          } else {
            return userAccount;
            
          }
        } catch (error) {
            throw error; //It can easily handle error in backend side..
            
        }
    }
    async login({email, password}){
        try {
         const mylogin= await this.account.createEmailSession(email,password);
         //Here, you can also directly do return await method instead of holding it in mylogin..
         //Here, createEmailSession returns a JWT which is used for authentication with Appwrite API routes 
         //and Appwrite SDK methods.
         return mylogin;
            
        } catch (error) {
            throw error;
            
        }
    }
    //Now, if user directly does get lands in Homepage and let's check if user is logged in or not..
    //So, here we are creating a method called isAuthenticated..
    async isAuthenticated() {
      try {
       const getCurrentUser = await this.account.get();
       //Getting current active session from Appwrite server..
       //if there is any valid session present in users browser then it will give us an object otherwise null..
       return getCurrentUser;
      }
      catch(error){
       console.log("Appwrite Service :: isAuthenticated :: error", error);
      }
      //If there's problem in try..catch method and if can't get the user account details then we do return null..
      return null;
    }
    //Method to get logout..
    async logOut(){
        try {
            await this.account.deleteSessions();
            //we can also use this.account.deleteSession('current or session_ID');
            


            
        } catch (error) {
            console.log("APPWRITE SERVIE :: LOGOUT :: ERROR",error);
        }
    }

}
//Here, we create an object called authService using new keyword i.e; creating through constructor..
const authService = new AuthService();
//Here, if someone signup and do create an object then there must be creation of client and
// there must be proper way of accessing an account right?


// export default AuthService;
//Here if we directly export the class then whoever uses this class, you've to create new object from this class
//Then, only the whole methods can be used...
//So, insted of exporting class we do export object directly as below;
export default authService;