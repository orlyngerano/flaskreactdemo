import ServerAPI from '../api/ServerAPI';
import {RECEIVE_PROFILES, RECEIVE_PROFILE} from '../actions/Actions';

let ActionCreators = {
    fetchProfiles(){
        return (dispatch) => {
            ServerAPI.fetchProfiles().then(
                (result)=>{
                   dispatch({type: RECEIVE_PROFILES, profiles:result});
                },
                (error)=>{
                    dispatch({type: RECEIVE_PROFILES, profiles:[]});
                }
            );
        }
    },
    fetchProfile(id){
        return (dispatch) => {
            ServerAPI.fetchProfile(id).then(
                (result)=>{
                   dispatch({type: RECEIVE_PROFILE, profile:result});
                },
                (error)=>{
                    dispatch({type: RECEIVE_PROFILE, profile:{}});
                }
            );
        }
    },    
    saveProfile(profile){
        return (dispatch) => {
            ServerAPI.saveProfile(profile).then(
                (result)=>{
                   dispatch({type: RECEIVE_PROFILE, profile:result});
                },
                (error)=>{
                    dispatch({type: RECEIVE_PROFILE, profile:{}});
                }
            );
        }
    },
    deleteProfile(id){
        return (dispatch) => {
            ServerAPI.deleteProfile(id).then(
                (result)=>{
                   dispatch({type: RECEIVE_PROFILE, profile:{}});
                },
                (error)=>{
                    dispatch({type: RECEIVE_PROFILE, profile:{}});
                }
            );
        }
    }
};

export default ActionCreators;