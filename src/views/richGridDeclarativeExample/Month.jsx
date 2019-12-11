import React from 'react';
import './Month.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       monthName: ""
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
//   this.selectData = this.selectData.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

//   selectData(event) {
//     var monthVal =  event.target.innerText;
//     this.setState({
//         monthName: event.target.innerText
//     })

//     localStorage.setItem("titleValue",monthVal );
//   }

  render() {
    return (
        <div  className="dropdown" style = {{background:"red",width:"200"}} >
         <div className="button" style = {{height: "47"}} onClick={this.showDropdownMenu}> {this.props.monthName} </div>

          { this.state.displayMenu ? (
          <ul>
            <li onClick={this.props.selectData}>Jan</li>
            <li onClick={this.props.selectData}>Feb</li>
            <li onClick={this.props.selectData}>Mar</li>
            <li onClick={this.props.selectData}>Apr</li>
            <li onClick={this.props.selectData}>May</li>
            <li onClick={this.props.selectData}>Jul</li>
            <li onClick={this.props.selectData}>Aug</li>
            <li onClick={this.props.selectData}>Sep</li>
            <li onClick={this.props.selectData}>Oct</li>
            <li onClick={this.props.selectData}>Nov</li>
            <li onClick={this.props.selectData}>Dec</li>

          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;