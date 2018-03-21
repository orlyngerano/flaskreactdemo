import {connect} from 'react-redux';
import Profile from '../components/Profile';
import ActionCreators from '../actions/ActionCreators';

const mapStateToProps = state => {
    console.log("dfg");
    console.log(state.ProfileReducer.profile);
    return {
      profile:state.ProfileReducer.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      showProfile: (id)=>dispatch(ActionCreators.fetchProfile(id)),
      deleteProfile: (id)=>dispatch(ActionCreators.deleteProfile(id)),
      saveProfile: (profile)=>dispatch(ActionCreators.saveProfile(profile))
    }
  }


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;