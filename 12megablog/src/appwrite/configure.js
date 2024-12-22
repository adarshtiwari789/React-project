import config from "../config/Config";
import { Client , ID , Databases, Storage, buket, Query } from "appwrite";


export class Serivce{

    client = new Client()
    Databases;
    bucket; 


    constructor(){
        this.client
        .setEndpoint(config.appwriteurl)
        .setProject(config.appwriteprojectid)
        this.databases = new Databases(this.client)
        this.buket = new Storage(this.client)
    }

    async createpost({title, slug , content ,featuredimage , status, userid})
    {
        try {
            return await this.Databases.createDocument(
                config.appwritedatabaseid,
                config.appwritecollection,
                slug,//document id
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid,
                }
            )
        } catch (error) {
            console.log(error)
        }

    }

    async updatepost(slug ,{title , content , featuredimage , status, userid }){
        try {
            return await this.account.databases.updateDocument(
                config.appwritedatabaseid,
                config.appwritecollection,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,

                }
            )
            
        } catch (error) {
            throw error
        }
    }
    async deletepost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwritedatabaseid,
                config.appwritecollection,
                slug,
                
            )
            return true
        } catch (error) {
            return false
        }
    }

    async getpost(slug){
        try {
          return  await this.databases.getDocument(
                config.appwritedatabaseid,
                config.appwritecollection,
                slug,
                )
        } 
        catch (error) {
            return false
        }
    }
}

const service = new Serivce()
export default service
    