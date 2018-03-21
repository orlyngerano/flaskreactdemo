import {connect} from 'react-redux';
import Profiles from '../components/Profiles';
import ActionCreators from '../actions/ActionCreators';

const mapStateToProps = state => {
    return {
      profiles: state.ProfileReducer.profiles
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      showProfiles: ()=>dispatch(ActionCreators.fetchProfiles())
    }
  }


const ProfilesContainer = connect(mapStateToProps, mapDispatchToProps)(Profiles);

export default ProfilesContainer;