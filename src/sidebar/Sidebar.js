import React from 'react';
import './sidebar.css'
import logo from '../logo.svg';
import Searchbar from '../searchbar/Searhbar';
import SidebarList from '../sidebarList/SidebarList';
import { faBible } from '@fortawesome/free-solid-svg-icons'



class Sidebar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {id: 1, title: 'DIOBRIGANTE', icon: faBible},
                {id: 2, title: 'DIOCANE', icon: faBible}
              ]
        };
      }

    render() {
        return (
            <div className="sidebar">
                <div className="logo">
                    <h3>NOTES</h3>
                </div>
                <div className="sidebar-menu">
                    <Searchbar />
                    <button>New note</button>
                    <SidebarList categories={this.state.categories} />
                </div>
            </div>
        );
    }

}

export default Sidebar;
