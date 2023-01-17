import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'userStore',
    state: ()=>{
        return {
            token: '',
            userInfo:{
                login: '',
                email: '',
                sex: '',
                avatar: ''
            },
            roles:[]
        }
    },
    getters: {

    },
    actions:{
        setToken(token:string){
            this.token = token;
        },
        setUserInfo(userInfo:any){
            this.userInfo = userInfo
        }
    },
    persist: true
})