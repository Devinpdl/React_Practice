import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DBService{
    //Let's define variables inside the class to make them accessible for all methods.
    client = new Client();
    //Let's define the properties of our database service:
    databases;
    bucket;
    //you can say storage or bucket whatever you want..
    //Above all the variables are defined..And Now, when should there must be creation of account?
    //As we know, account should be created when the constructor gets called..right?
    //So, we do call constructor.. 
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        //Now, we do fill above databases and bucket as like below;
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    //Let, we do create a method with async keyword so that it will return Promise.
    async createPost({title,slug, content, featuredImage, status, userId}){
     // Here,with an array of title,slug, content, featuredImage, status, userId're the values which we need to insert 
     //into the table posts.

     try {

        const postcreation  = await this.databases.createDocument(
            conf.appwriteDatabaseId, // Database Id does comes from appwriteDatabaseId in Appwrite
            conf.appwriteCollectionId,// Collection id is coming from conf file.
            slug, //slug is for asking Document's ID for making unique url.
            //We use slugify npm package to generate slug. At last we need object...
            {
                //We're passing further information as an object..
                title,
                // slug, //We don't need slug to be added as object here..
                content,
                featuredImage,
                status,
                userId,

            }

        );
        return postcreation;
        
     } catch (error) {
        console.log("Appwrite service :: createpost :: error", error);
        
     }



    }
    //Update method;
    async updatePost(slug, {title,content, featuredImage, status}){
        //Here, we do need DocumentId to update the post so 1st we did take slug as parameter and then
        //.. we passed an object with an array to select and that need to be updated..
        try {
            const updatedDoc= await this.databases.updateDocument(
                //updateDocument is method and it does takes following things;
                //Database ID,
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                //As we do know, we're directly updating slug we're defining slug here and then object okay?
                slug,
                {
                    //If the following object do get changes as user give new title or Images etc..
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            return updatedDoc;
            
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }



    }
    //Delete method;
    async deletePost(slug){
        //We just need only documentId so we define slug only to match the id and delete the post accordingly..
        try {
            //No need to return the method when deleting the post..
            await this.databases.deleteDocument(
                //deleteDocument method do needs following requirements;
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // we do need slug here too..
            )
            //once try method does delete the post we do return true;
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            //We catch can't handle error then we do return false..
            //It's upto front-end's work to handle the error if it gets some trouble from it..
            //So, for now we just throw false..
            return false;
        }

    }

    //Let create a method for to get a single particular post..
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                //If all of this 3 Id including slug is getting then it does get return else not..
                //Means we have got single post.. else not..  
            )

            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            //If it doesn't get any post then we do return false for it..
            return false;            
        }

    }

    //Method to get all the post..
    //For this we do use listDocuments() method which is defined inside appwrite documentation..
    //Here, we don't want to take all the documents coz their all status is not active at the same time..
    //So, we do use Queries whose status is active..

    async getPosts(queries= [Query.equal("status","active")]){
    //Here, queries is just a variable which holds the actual queries's parameter..
    //Here, just R.H.S array[] is where we do write our actual queries..
    //Here, we do matching our status with equal.. just to check if our status is active or not..
    //Here, status is keys that we have defined inside Appwrite by creating indexes (inside our databases)..
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            [
                Query.equal("status", "active"),
            ]
        )
        
    } catch (error) {
        console.log("Appwrite Service :: getPosts :: error", error);
        return false; // If no none of values is returned from it..
    }

    }

    //File upload service method creation starts now;
    async uploadFile(file){
        //Here, don't give file name but give the files blog as parameters..
        try {
            return await this.bucket.createFile(
                //createFile is the method and it takes the following values;
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
        }
    }

    //File Delete method;
    async deleteFile(fileId){
        //It does need file's Id while deleting our file
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true; //If it does delete the files..
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false; // If no any value is returned from catch too..
            
        }
    }

    //Method to Preview the file;
    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const dbservice = new DBService();

// export default DBService;
//Here, Instead of exporting the class itself we are creating an instance of that class and then exporting it. 
//This way we can use the service as a singleton.
export default dbservice;