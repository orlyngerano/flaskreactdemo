import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Alert  } from 'reactstrap';
import { Link } from "react-router-dom";
class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alert: false,
      modal: false,
      profile: { 
        firstname:'',
        lastname:'',
        alias:'',
        dateofbirth:'',
        category:'',
        ethnicity:'',
        gender:'',
        religion:'',
        nationality:'',
        club:'',
        position:'',
      },
      formTitle:'Create New Player',
      mode: 0 //new
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.onAlertDismiss = this.onAlertDismiss.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.profile.id){
      this.props.history.push('/');
    }else{
      this.setState({
        profile:nextProps.profile
      });    
    }
  }

  componentDidMount(){
    if(this.props.match.params.id){
      this.props.showProfile(this.props.match.params.id);
      this.setState({
        formTitle: 'Update Player',
        mode: 1 //edit
      });       
    }
  }
  
  handleChange(e, com){
    this.setState({profile: Object.assign({}, this.state.profile, {[com]:e.target.value})});
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteProfile(){
    this.toggle();
    this.props.deleteProfile(this.state.profile.id);
  }

  saveProfile(){
    this.setState({
      alert: true
    });
    this.props.saveProfile(this.state.profile);
  }

  onAlertDismiss(){
    this.setState({
      alert: false
    });
  }

  render() {
    return (
      <div className="container">
       <Alert color="success" isOpen={this.state.alert} toggle={this.onAlertDismiss}>Player Updated Successfully!</Alert>
        <div className="card">
          <div className="card-header">{this.state.formTitle}</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="firstname">Firstname:</label>
                <input type="text" className="form-control" id="firstname" value={this.state.profile.firstname} onChange={e=>{
                  this.handleChange(e, 'firstname');
                }}/>
              </div>
              <div className="form-group">
                <label for="lastname">Lastname:</label>
                <input type="text" className="form-control" id="lastname" value={this.state.profile.lastname} onChange={e=>{
                  this.handleChange(e, 'lastname');
                }}/>
              </div>
              <div className="form-group">
                <label for="alias">Known As:</label>
                <input type="text" className="form-control" id="alias" value={this.state.profile.alias} onChange={e=>{
                  this.handleChange(e, 'alias');
                }}/>
              </div>
              <div className="form-group">
                <label for="dob">Date of Birth:</label>
                <input type="text" className="form-control" id="dob" value={this.state.profile.dateofbirth} onChange={e=>{
                  this.handleChange(e, 'dateofbirth');
                }}/>
              </div>
              <div className="form-group">
                <label for="category">Category:</label>
                <input type="text" className="form-control" id="category" value={this.state.profile.category} onChange={e=>{
                  this.handleChange(e, 'category');
                }}/>
              </div>
              <div className="form-group">
                <label for="ethnicity">Ethnicity:</label>
                <input type="text" className="form-control" id="ethnicity" value={this.state.profile.ethnicity} onChange={e=>{
                  this.handleChange(e, 'ethnicity');
                }}/>
              </div>
              <div className="form-group">
                <label for="gender">Gender:</label>
                <input type="text" className="form-control" id="gender" value={this.state.profile.gender} onChange={e=>{
                  this.handleChange(e, 'gender');
                }}/>
              </div>
              <div className="form-group">
                <label for="religion">Religion:</label>
                <input type="text" className="form-control" id="religion" value={this.state.profile.religion} onChange={e=>{
                  this.handleChange(e, 'religion');
                }}/>
              </div>
              <div className="form-group">
                <label for="nationality">Nationality:</label>
                <input type="text" className="form-control" id="nationality" value={this.state.profile.nationality} onChange={e=>{
                  this.handleChange(e, 'nationality');
                }}/>
              </div>
              <div className="form-group">
                <label for="club">Current Club:</label>
                <input type="text" className="form-control" id="club" value={this.state.profile.club} onChange={e=>{
                  this.handleChange(e, 'club');
                }}/>
              </div>
              <div className="form-group">
                <label for="position">Current Position:</label>
                <input type="text" className="form-control" id="position" value={this.state.profile.position} onChange={e=>{
                  this.handleChange(e, 'position');
                }}/>
              </div>
              <Button color="primary" onClick={this.saveProfile}>Save</Button>&nbsp;
              { this.state.mode==1 && <Button color="danger" onClick={this.toggle}>Delete</Button> }&nbsp;
              <Link to="/">
                <Button color="secondary">Cancel</Button>
              </Link>
            </form>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Confirm Delete</ModalHeader>
              <ModalBody>
                Are your sure?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.deleteProfile}>Delete</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;