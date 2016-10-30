import React from 'react-native';
import Drawer from 'react-native-drawer';
import SideMenu from './SideMenu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import Counter from '../components/counter.js'
import Home from '../components/Home.js'

export default class extends Component {
render(){
    const state = this.props.navigationState;
    const children = state.children;
return (
<Drawer
 ref="navigation"
open={state.open}
onOpen={()=>Actions.refresh({key:state.key, open: true})}
onClose={()=>Actions.refresh({key:state.key, open: false})}
type="displace"
content={<SideMenu />}
tapToClose={true}
openDrawerOffset={0.2}
panCloseMask={0.2}
negotiatePan={true}
tweenHandler={(ratio) => ({
main: { opacity:Math.max(0.54,1-ratio) }
})}>
<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
</Drawer>
);
}
}

/// then wrap your tabs scene with Drawer:
<Scene key="drawer" component={Drawer} open={false} >
<Scene key="main" tabs={true} >
    <Scene key="launch" component={Counter} title="Launch"/>
    <Scene key="home" component={Home} title="Home" />
</Scene>
  </Scene>

// then you could open/hide/toggle drawer anywhere using 'refresh' modifiers:
Actions.refresh({key: 'drawer', open: value => !value });