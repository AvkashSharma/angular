import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	currentPage = 0;
	images = [
		{
			title: 'At the Beach',
			url:
				'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'At the Mountain',
			url:
				'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'Sunglasses',
			url:
				'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'Cottage in Winter',
			url:
				'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		},
		{
			title: 'In the forest',
			url:
				'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
		}
	];

	checkWindowIndex(index: number) {
		return Math.abs(this.currentPage - index) < 5;
	}
}
