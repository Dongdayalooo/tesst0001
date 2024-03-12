import "../css/Sidebar.css";
import AuthService from "../services/auth.service";

const Sidebar = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <nav id="sidebar">
      {currentUser && currentUser.role === "ROLE_MANAGER" ? (
        <div class="sidebar-header">
          <h3>Dashboard</h3>
        </div>
      ) : null}

      <ul class="list-unstyled components">
        <li class="active">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
            Pages
          </a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li>
          <a
            href="https://bootstrapious.com/tutorial/files/sidebar.zip"
            class="download"
          >
            Download source
          </a>
        </li>
        <li>
          <a
            href="https://bootstrapious.com/p/bootstrap-sidebar"
            class="article"
          >
            Back to article
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
