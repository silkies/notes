import React from 'react';
import './sidebar.css'
import logo from '../logo.svg';
import Searchbar from '../searchbar/Searhbar';
import SidebarList from '../sidebarList/SidebarList';
import { faStickyNote, faBook, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import NoteEditor from '../noteEditor/NoteEditor';



class Sidebar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {id: 1, title: 'Notes', icon: faStickyNote},
                {id: 2, title: 'Notebooks', icon: faBook},
                {id: 3, title: 'Events', icon: faCalendarWeek}
              ]
        };
      }

    render() {
        return (
            <div className="wrap">
            <div className="sidebar">
                <div className="logo">
                    <h3>NOTES</h3>
                </div>
                <div className="sidebar-menu">
                    <div className="sidebar-items">
                        <Searchbar />
                        <button>New note</button>
                    </div>
                    <SidebarList categories={this.state.categories} />
                </div>
            </div>
            <NoteEditor />
            </div>
        );
    }

}

export default Sidebar;
