import * as React from 'react'


import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

import './styles.css';

class SearchEngine extends React.Component {
    
    render() {
        return (
            <div className="panelbar-wrapper">
                <PanelBar >
                    <PanelBarItem expanded={true} title="Regulations">
                       <PanelBarItem title="Regulation1" />
                        <PanelBarItem title="Regulation2" />
                        <PanelBarItem title="Regulation3" />
                        <PanelBarItem title="Regulation4" />
                        <PanelBarItem title="Regulation5" />
                    </PanelBarItem>
                    <PanelBarItem title={'Collective Class'} >
                        <PanelBarItem title={'Collective Class1'} />
                        
                            <PanelBarItem title={'Collective Class2'} />
                            <PanelBarItem title={'Collective Class3'} />
                            <PanelBarItem title={'Collective Class4'} />
                            <PanelBarItem title={'Collective Class5'} />
                        
                        <PanelBarItem title={'Sales Reports'} />
                    </PanelBarItem>
                    <PanelBarItem title="Programs">
                        <PanelBarItem title="Monday" />
                        <PanelBarItem title="Tuesday" />
                        <PanelBarItem title="Wednesday" />
                        <PanelBarItem title="Thursday" />
                        <PanelBarItem title="Friday" />
                    </PanelBarItem>
                    <PanelBarItem title="Communication" disabled={true} />
                </PanelBar>
            </div>
        );
    }
}
export default SearchEngine;