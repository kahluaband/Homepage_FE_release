import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";
import ApplicationList from "./ApplicationList";
import AppList from "./ApplicationList";

// class AllAppList extends Component {
//   state = {
//     loading: false,
//     ApplicationList: []
//   }

//   loadList = async () => {
//     try{
//       const response = await axios.get(
//         `https://api.kahluaband.com/kahlua_admin/application/apply_forms/`,
//       );
  
//       this.setState({
//         loading: true,
//         ApplicationList: response.data.apply_forms
//       });

//     }
//     catch(error) {
//       this.setState({
//         loading: false
//       });
//     };
//   };

//   componentDidMount(){
//     this.loadList();
//   }
  
//   render() {
//     const ItemList = this.state;
//     console.log(ItemList);
//     return (
//       <div>
//         <ApplicationList Applicationinfo={ ItemList }/>
//       </div>
//     )
//   }
// }

const AllAppList = () => {
  return (
    <AppList/>
  )
}

export default AllAppList;