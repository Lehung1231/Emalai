import { getCategories } from "../../api/category";
import { getProjectByCategory, getProjects } from "../../api/project";
import ProjectList from "../../components/ProjectList";
import { useState, useEffect } from "../../libs";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [idCate, setIdCate] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await getProjects();
                setProjects(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchCategories = async() => {
            try {
                const res = await getCategories();
                setCategories(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        fetchCategories();
    }, []);

    useEffect(() => {
        const select = document.querySelector("#categories");
        select.addEventListener("change", async(e) => {
            const id = e.target.value;
            const res = await getProjectByCategory(id);
            setProjects(res.data.projects);
            setIdCate(id);
        });
    });

    return `
  
  `;
};

export default Projects;