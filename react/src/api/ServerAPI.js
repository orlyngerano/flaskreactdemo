
//let ServerAPIURL = 'http://localhost:5000';
let ServerAPIURL = window.serverapi;


function handleErrors(response) {
    console.log(response);
    if (!response.ok) {    
        throw Error(response.statusText);
    }
    return response;
}

function handleSuccess(response) {
    return response.json();
}


let ServerAPI = {
    fetchProfiles(){
        return fetch(ServerAPIURL+'/profile').then(handleErrors).then(handleSuccess);
    },
    fetchProfile(id){
        return fetch(ServerAPIURL+'/profile/'+id).then(handleErrors).then(handleSuccess);
    },
    saveProfile(profile){
        let url = ServerAPIURL+'/profile'
        let method = 'POST';
        if(profile.id){
            url = url + '/' + profile.id;
            method = 'PUT';
        }
        return fetch(url,{
            method: method,
            body: JSON.stringify(profile),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(handleErrors).then(handleSuccess);
    },
    deleteProfile(id){
        return fetch(ServerAPIURL+'/profile/'+id,{
            method: 'DELETE'
        }).then(handleErrors).then(handleSuccess);
    }
};

export default ServerAPI;