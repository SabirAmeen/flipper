import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import $ from 'jquery';

export default class extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
			// var width = $(window).width();
			// var unit = 5;
			// var i,j=1;
			// console.log(width)
			// var count = Math.min(100,(2 * Math.round((width/unit) / 2)));
		 //    var layout = [];
		 //    for(i=1;i<=count;i++){
		 //    	layout.push({i: (i+''), x: i, y: 0, w: 1, h: 2, })
		 //    }
		 //    console.log(layout) 
		 var layout = [
		 {i: 'one', x:0, y:0, w:1, h:1,static:true},
		 {i: 'two', x:1, y:0, w:1, h:1,static:true},
		 {i: 'three', x:2, y:0, w:1, h:1,static:true},
		 {i: 'four', x:3, y:0, w:1, h:1,static:true},
		 {i: 'five', x:4, y:0, w:1, h:1,static:true},
		 {i: 'six', x:0, y:1, w:1, h:1,static:true},
		 {i: 'seven', x:1, y:1, w:1, h:1,static:true},
		 {i: 'eight', x:2, y:1, w:1, h:1,static:true},
		 {i: 'nine', x:3, y:1, w:1, h:1,static:true},
		 {i: 'ten', x:4, y:1, w:1, h:1,static:true}
		 ]
		return(
		<div>
			{
			<ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
				<div className="card" key={'one'}>one</div>
				<div className="card" key={'two'}>two</div>
				<div className="card" key={'three'}>three</div>
				<div className="card" key={'four'}>four</div>
				<div className="card" key={'five'}>five</div>
				<div className="card" key={'six'}>six</div>
				<div className="card" key={'seven'}>seven</div>
				<div className="card" key={'eight'}>eight</div>
				<div className="card" key={'nine'}>nine</div>
				<div className="card" key={'ten'}>ten</div>
     	    </ReactGridLayout>
     		}
		</div>
		);
	}
}