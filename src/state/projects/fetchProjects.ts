import ProjectList from "config/dummy-data/Projects";

const fetchProjects = () => {
    const data = ProjectList.map(project => {
        return project
    })
    return data;
}

export default fetchProjects