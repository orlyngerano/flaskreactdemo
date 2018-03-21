import React, { Component } from 'react';
import { Table, Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


class List extends Component {

  componentDidMount(){
    //alert(this.props.match.params.id);
    //alert(2);
    this.props.showProfiles();
  }  

  tdcell(content, id, key) {
    return <td key={key}><Link to={"/profile/"+id} style={{ textDecoration: 'none', color: '#333' }}>{content}</Link></td>
  }

  render() {

    return (
      <div className="container">
        <Card>
          <CardHeader>
            Football Playes
            <Link to="/profile" style={{color:'#333'}}>
            <i className="fa fa-user-plus pull-right"/>
            </Link>
          </CardHeader>
          <CardBody style={{padding:0}}>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Club</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {this.props.profiles.map( (item,index) =>{
                  console.log(item);
                  return <tr key={item.id+'r'}>{[
                    this.tdcell(item.firstname+' '+item.lastname, item.id, item.id+'d1'),
                    this.tdcell(item.club, item.id, item.id+'d2'),
                    this.tdcell(item.position, item.id, item.id+'d3')
                  ]}</tr>;
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default List;
