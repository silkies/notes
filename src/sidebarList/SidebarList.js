import React from 'react';
import './sidebarList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SidebarList(props) {
    const categories = props.categories;
    const listItems = categories.map((category) =>
        <ListItem categoryName={category.title} icon={category.icon} key={category.id} />
    );
    return(
        <div>
            {listItems}
        </div>
    );
}

function ListItem(props) {
    return(
        <div className="list-item">
            <FontAwesomeIcon className="icon" icon={props.icon} />
            <span className="category-text" >
                {props.categoryName}
            </span>
        </div>
    );
}

export default SidebarList;