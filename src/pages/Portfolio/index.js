import React,{useState} from 'react';
import Project from '../../components/Project';

function Portfolio() {

	const [projects,setProjects] =useState([
		{
			name: 'App Now Playing',
			description:
				'Now Playing is a music-focused social media app for sharing and discovering new music. Users can create posts, like posts and add comments. The home feed can be filtered based on different criteria including genre and decade. The is also a search page to find specific users or posts.',
			image: 'https://user-images.githubusercontent.com/69886471/114311521-bb2cd380-9ab4-11eb-8168-ce78881d2146.png',            
			technologies: [
				'CSS',
				'MySql2',
				'Node.js',
				'Express.js',
                'Sequelize',
				'Bootstraps',
				'Bcrypt package (to hash passwords)',
				'Dotenv package (to use environment variables)',
			],
			github: 'https://github.com/yoyachi/app-now-playing.git',
            deployed: 'https://nowplayingapp.herokuapp.com/'
			
		},
		{
			name: 'Git It Right App',
			description:
				'This is a game application that uses the OMDb API to gather information on films and grab the top 4 actors from each individual movie. The game also randomly generates the movie along with two incorrect answers. There are 4 correct answers and 2 incorrect answers!',
			image: 'https://github.com/yoyachi/git-it-right/raw/main/git-it-right/images/index.png', 

			technologies: [
				'HTML',
                'PureCSS',
				'JavaScript',
			],
			github: 'https://github.com/yoyachi/git-it-right/tree/main/git-it-right',
			deployed: 'https://drewvena.github.io/git-it-right/',
		},
		
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'https://user-images.githubusercontent.com/69886471/116821785-e5683300-ab40-11eb-9ed8-3f1851ba0c41.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/yoyachi/budget-tracker',
			deployed: 'https://always-budget-tracker.herokuapp.com/',
		},
		
		{
			name: 'Password Challenge',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'https://user-images.githubusercontent.com/69886471/115120653-3b02e400-9f74-11eb-9472-ab7fe202bac0.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/yoyachi/password-chall',
			deployed: 'https://yoyachi.github.io/password-chall/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
            image: ''  ,  
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/yoyachi/note-taker',
			deployed: 'https://yoyachi.github.io/note-taker/',
		},
	]);
     console.log(projects)
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project work={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project work={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project work={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project work={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;