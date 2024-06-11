import { Component } from "react";
import projects from '../assets/projects.json'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFilter: 'All',
			projects,
		};
	}

	handleFilterSelect = (filter) => {
		this.setState({ selectedFilter: filter });
	}

	render() {
		const { selectedFilter, projects } = this.state;

		const filteredProjects = selectedFilter === 'All'
			? projects
			: projects.filter(project => project.category === selectedFilter);

		return (
			<div>
				<Toolbar
					filters={["All", "Websites", "Flayers", "Business Cards"]}
					selected={selectedFilter}
					onSelectFilter={this.handleFilterSelect}
				/>
				<ProjectList projects={filteredProjects} />
			</div>
		);
	}
}

export default Portfolio;