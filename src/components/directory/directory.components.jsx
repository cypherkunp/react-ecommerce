import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from './../menu-items/menu-items.component';
import './directory.styles.scss';
import { selectDirectorySections } from './../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...itemProps }) => (
                <MenuItem key={id} {...itemProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
