import { getCategories } from "../../api/category";
import { deleteProject, getProjects } from "../../api/project";
import { useEffect, useState } from "../../libs";

const AdminProjectPage = () => {
        const [data, setData] = useState([]);
        const [categories, setCategories] = useState([]);

        useEffect(() => {
            const fetchCate = async() => {
                const res = await getCategories();
                setCategories(res.data);
            };
            fetchCate();
        }, []);

        useEffect(() => {
            getProjects().then(({ data }) => setData(data));
        }, []);
        // chạy sau khi render
        useEffect(function() {
            const btns = document.querySelectorAll(".btn-remove");
            for (let btn of btns) {
                const id = btn.dataset.id;
                btn.addEventListener("click", function() {
                    console.log(id);
                    const newData = data.filter((project) => {
                        return project.id != id;
                    });
                    setData(newData);
                    deleteProject(id);
                });
            }
        });
        return /*html*/ `
  <div class="w-[1000px] mx-auto mt-10 mb-10">
    <a href="/admin/projects/add" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Thêm</a>
    <div class="mt-4 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Project name
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Url
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
          ${data
            .map(
              (project) => `
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${project.name}
                </th>
                <td class="px-6 py-4">
                  <img src="${
                    project.image
                      ? project.image
                      : "https://res.cloudinary.com/dsvfqgd20/image/upload/v1665584548/Social app/p89fp1l6kvrzqpqbxs5o.jpg"
                  }" alt="image" class="w-[50px] h-[50px] rounded-full object-cover" />
                </td>
                <td class="px-6 py-4">
                ${project.url}
                </td>
                <td class="px-6 py-4">
                ${categories
                  ?.map((category) => {
                    if (category.id == project.categoryId) {
                      return category.name;
                    }
                  })
                  .join("")}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/admin/projects/${
                      project.id
                    }/update" class="btn-remove font-medium ml-3 text-red-600 dark:text-red-500 hover:underline">Sửa</a>
                    <button data-id="${
                      project.id
                    }" class="btn-remove font-medium ml-3 text-red-600 dark:text-red-500 hover:underline">Xóa</button>
                </td>
            </tr>
          `
            )
            .join("")}
        </tbody>
    </table>
    </div>
  </div>
  `;
};

export default AdminProjectPage;