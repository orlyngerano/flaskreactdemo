import { RECEIVE_PROFILES, RECEIVE_PROFILE } from '../actions/Actions';

const initState = {
    profiles:[
        /*{
        name: "Orlyn",
        club: "Manchester",
        position: "striker"
    },{
        name: "Orlyn",
        club: "Manchester",
        position: "striker"
    },{
        name: "Orlyn",
        club: "Manchester",
        position: "striker"
    },{
        name: "Orlyn",
        club: "Manchester",
        position: "striker"
    }*/],
    profile:{}
};

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case RECEIVE_PROFILES:{
            return Object.assign({}, state, { profiles: action.profiles });
        }
        case RECEIVE_PROFILE:{
            console.log("shit");
            console.log(action.profile);
            return Object.assign({}, state, { profile: action.profile });
        }
        default:{
            return state;
        }
    }    
}

export default ProfileReducer;