import { render, router } from "./libs";
import AdminProjectAddPage from "./Pages/Admin/project-add";
import AdminProjectUpdatePage from "./Pages/Admin/project-update";
import AdminProjectPage from "./Pages/Admin/projects";
import Home from "./Pages/Client/Home";

const app = document.querySelector("#app");

router.on("/", () => {
  render(Home, app);
});

router.on("/admin/projects", () => {
  render(AdminProjectPage, app);
});

router.on("/admin/projects/add", () => {
  render(AdminProjectAddPage, app);
});
router.on("/admin/projects/:id/update", (params) => {
  render(function () {
    return AdminProjectUpdatePage(params);
  }, app);
});

router.resolve();
