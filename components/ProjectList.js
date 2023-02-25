const ProjectList = ({ projects }) => {
  return `
    ${projects
      ?.map(
        (project) => `
            <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transition-all duration-300 ease-out">
            <a href="${project.url}">
                <img class="rounded-t-lg h-[250px] object-fill" src="${project.image}" alt="" />
            </a>
            <div class="p-4">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${project.name}</h5>
                </a>
                <p class="mb-5 font-normal text-gray-700 dark:text-gray-400">${project.description}</p>
                <div 
                  class="absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg w-full py-2 text-center bg-gray-200 dark:bg-slate-600 cursor-pointer"
                >
                <a href="${project.url}" class="text-black">
                  View in github
                </a>
                </div>
            </div>
          </div>
      `
      )
      .join("")}
  `;
};

export default ProjectList;
