import config from "../config/Config";
import {Client , Account , ID} from "appwrite"

export class Authservices {
    client = new Client();
    account ;

    constructor(){
        this.client 
        .setEndpoint(config.appwriteurl)
        .setProject(config.appwriteprojectid); 
        this.account = new Account(this.client)
    }

        async createAccount ({email,password,name}){
            try{
              const useraccount =  await this.account.create(ID.unique(),email,password,name)    
              if (useraccount) {
                //call another mehtod
                return this.login({email,password})

              } else {
                 return useraccount
              }
            }
            catch(error){
                throw error
            } 

                               }
                               
          async login ({email,password}){
            try {
           return await this.account.createEmailPasswordSession(email, password);  
            } 
            catch (error) {
              throw error ;
            }

          }
          async getcurrentuser(){
            try {
             return await this.account.get();
            }
             catch (error) {
            console.log("appwrite serivce : getcurrentuser ::errror " , error)
            }
            return null
          }

          async logout (){
            try {
              await this.account.deleteSessions()
            } catch (error) {
              console.log("appwrite service :: logout :: error " ,error)
            }
          }
}

const authservices = new Authservices()

export default authservices