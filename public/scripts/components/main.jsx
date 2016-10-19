import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import $ from 'jquery';

export default class extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			layout: [
				{i: 'one', x:0, y:0, w:1, h:1,static:true},
				{i: 'two', x:1, y:0, w:1, h:1,static:true},
				{i: 'three', x:2, y:0, w:1, h:1,static:true},
				{i: 'four', x:3, y:0, w:1, h:1,static:true},
				{i: 'five', x:0, y:1, w:1, h:1,static:true},
				{i: 'six', x:1, y:1, w:1, h:1,static:true},
				{i: 'seven', x:2, y:1, w:1, h:1,static:true},
				{i: 'eight', x:3, y:1, w:1, h:1,static:true},
				{i: 'nine', x:4, y:1, w:1, h:1,static:true},
				{i: 'ten', x:5, y:1, w:1, h:1,static:true}
		 	],

			list: [{
				key: 'one',
				flip: false,
				className: 'card flip-hide',
				color: 'blue'
			}, {
				key: 'two',
				flip: false,
				className: 'card flip-hide',
				color: 'red'
			}, {
				key: 'three',
				flip: false,
				className: 'card flip-hide',
				color:'blue'
			}, {
				key: 'four',
				flip: false,
				className: 'card flip-hide',
				color: 'red'
			}, {
				key: 'five',
				flip: false,
				className: 'card flip-hide',
				color:'blue'
			}, {
				key: 'six',
				flip: false,
				className: 'card flip-hide',
				color: 'red'
			}, {
				key: 'seven',
				flip: false,
				className: 'card flip-hide',
				color:'blue'
			}, {
				key: 'eight',
				flip: false,
				className: 'card flip-hide',
				color: 'red'
			}],

			lastIndex: undefined
		}

		this.flip = this.flip.bind(this);
	}
	flip(flipIndex) {
		const { list, lastIndex } = this.state;
		let indexItem = list[flipIndex];
		let lastIndexItem;
		let temp = this.state.lastIndex;
		let tempItem = this.state.list[temp];
		this.setState({
			lastIndex: !! lastIndex ? undefined : flipIndex,
			list: list.map((item, index) => {
				if ( flipIndex === index ) {
					return {
						key: indexItem.key,
						flip: ! indexItem.flip,
						className: ! indexItem.flip ? 'card flip-show' : 'card flip-hide',
						color: indexItem.color
					}
				} else {
					return item;
				}
			})
		})
			
		setTimeout(function(){
			if(!!temp && tempItem.color===indexItem.color && temp!=flipIndex){
					this.setState({
						list:list.filter(function(item,index){
							return (index!=temp && index !=flipIndex)
						})
					})
			}
			else{
				if(!!temp){
					this.setState({
						lastIndex: !! lastIndex ? undefined : flipIndex,
						list:list.map((item,index) => {
							if ( flipIndex === index ) {
								return {
									key: indexItem.key,
									flip: ! indexItem.flip,
									className:  'card flip-hide',
									color: indexItem.color
								}
							}
							else if (temp === index){
								return {
									key: tempItem.key,
									flip: ! tempItem.flip,
									className: ! tempItem.flip ? 'card flip-show' : 'card flip-hide',
									color: tempItem.color
								}
							}
							else{
								return item;
							}
						})
					})
				}
			}
		}.bind(this),500)
		
	
		
	}

	render(){
		let { list, layout } = this.state;
		return(
			
			<div>
				{
				<ReactGridLayout className="layout" layout={this.state.layout} cols={12} rowHeight={30} width={1200}>
					{
						list.map((item, index) => {
							return (
								<div className="card-wrap"
									key={ item.key }
								>
									<div onClick={() => this.flip(index)}
										className={ item.className }
									>
										{ item.color }
									</div>
								</div>
							)
						})
					}
	     	    </ReactGridLayout>
	     		}

			</div>
		);
	}
}