export default function SearchAdmin() {
  return (
    <nav class="navbar bg-dark sticky-top">
      <div class="px-2 d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img
            src="../../Avatar.png"
            alt="Bootstrap"
            width="32"
            height="28"
            className=" rounded-circle"
          />
          <span className="px-2 text-white">Fran admin</span>
        </a>
        <form class="d-flex justify-content-between" role="search">
          <input
            class="form-control me-2 ml-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary text-white" type="submit">
            Search
          </button>
        </form>
        <div></div>
      </div>
    </nav>
  );
}
