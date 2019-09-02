import React from 'react';
import MenuItem from './../menu-items/menu-items.component';
import './directory.styles.scss';
import directoryData from './directory.data';

class Directory extends React.Component {
    state = {
        sections: directoryData
    };
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...itemProps }) => (
                    <MenuItem key={id} {...itemProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
