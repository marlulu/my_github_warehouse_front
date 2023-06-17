import axios from "axios";

export function sendSqlite(type, channel,data,callback){
    if(type === "GET") {
        axios({
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            method: 'GET',
            url: 'http://localhost:8080/' + channel,
            params: data
        }).then(res => {
            callback(res)
        }).catch(error => {
            callback(error)
        })
    } else if(type === "POST") {
        axios({
            headers:{'Content-Type':'application/json'},
            method: 'POST',
            url: 'http://localhost:8080/' + channel,
            data: data
        }).then(res => {
            callback(res)
        }).catch(error => {
            callback(error)
        })
    }
}