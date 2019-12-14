import React from 'react';
import * as PropTypes from 'prop-types';
import RefData from './RefData';

export default class SkillsCellRenderer extends React.Component {


    render() {
        const status = [];
        const rowData = this.props.data;

        const imageData = {
            wait : "Awaiting Customer Input"
        }
        // RefData.SAMPLE_DATA.forEach((data) => {
           
        // });
        if (rowData) {
            var imageType ="";
            var imageName ="";
            Object.keys(imageData).forEach(function(key) {
                    if (rowData.status === imageData[key]) {
                     imageType = key;
                     imageName = imageData[key];
                   }
             });
                 status.push(<span style={{ marginRight:"1.25em"}}>{imageName}</span>)
                //  status.push(<img key={imageName} src={'images/skills/' + imageType + '.png'} width={16} /> );
                 
             }

        return <span>{status}</span>;
    }

}

// the grid will always pass in one props called 'params',
// which is the grid passing you the params for the cellRenderer.
// this piece is optional. the grid will always pass the 'params'
// props, so little need for adding this validation meta-data.
SkillsCellRenderer.propTypes = {
    params: PropTypes.object
};