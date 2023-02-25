import { getCategories } from "../../api/category";
import { getProject, updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../libs";

const AdminProjectUpdatePage = ({ data: { id } }) => {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data);
      } catch (error) {}
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    getProject(id).then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-update");
    const projectName = document.getElementById("name");
    const projectUrl = document.getElementById("url");
    const projectCate = document.getElementById("categories");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // tạo ra 1 object mới lấy dữ liệu từ form
      const newProject = {
        id: id,
        name: projectName.value,
        url: projectUrl.value,
        categoryId: projectCate.value,
      };
      updateProject(newProject).then(() => router.navigate("/admin/projects"));
    });
  });
  return `<div class="w-[800px] mx-auto mt-10 mb-10">
  <h1 class="text-xl font-bold mb-4">Update project</h1>
  <form id="form-update">
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name project</label>
      <input type="text" id="name" value="${data.name}" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div class="mb-6">
      <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url project</label>
      <input type="text" id="url" value="${data.url}" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div class="mb-6">
      <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category project
      </label>
      <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        ${categories.map((category) => {
          return `
            <option ${
              data.categoryId == category.id ? "selected" : ""
            } value="${category.id}" >${category.name}</option>
          `;
        })}
      </select>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    <a href="/admin/projects" class=" focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-transperent border-2 border-gray-500 ml-2">Về trang chủ</a>
</form>
</div>`;
};

export default AdminProjectUpdatePage;
