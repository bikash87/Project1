import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';



const Trial = React.createClass({
	
	getInitialState: function(){
		return {
		}
	},
		
	render: function() {
		return (
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
				<div className="right_contents">
						<h2 className="text_align">Trial</h2>
				</div>	
			</div>
		
		)
	}
});

module.exports = Trial;