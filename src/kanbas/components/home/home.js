import ModuleList from "../module_list/module_list";


function Home() {
  return (
    <div>
      <div>
        <div id="Course Status" class="float-end d-none d-xl-block" style={{marginRight: "150px", width: "500px"}}>
            <h5>Course Status</h5>
            <div>
                <button type="button" className="btn btn-secondary">Unpublish</button>
                <button type="button" className="btn btn-success">Publish</button>
            </div>
            <div className="list-group mt-3" style={{width: "13em"}}>
                <a className="list-group-item list-group-action" href="#">Import Existing Content</a>
                <a className="list-group-item list-group-action" href="#">Import From Commons</a>
                <a className="list-group-item list-group-action" href="#">Choose Home Page</a>
                <a className="list-group-item list-group-action" href="#">View Course Stream</a>
                <a className="list-group-item list-group-action" href="#">New Announcement</a>
                <a className="list-group-item list-group-action" href="#">New Analytics</a>
                <a className="list-group-item list-group-action" href="#">View Course Notifications</a>
            </div>
            <div className="mt-3"><span>Coming Up | </span>
                <a href="#">View Calendar</a></div>
                <div className="list-group mt-3">
                    <a className="list-item-secondary" href="#">
                        <i className="fa-solid fa-calendar-days fa-xs"></i>
                        CS5610 Sep 7 at 11:15am
                    </a>
                    <a className="list-item-secondary" href="#">
                        <i className="fa-solid fa-calendar-days fa-xs"></i>
                        CS5610 Sep 11 at 11:15am
                    </a>
                    <a className="list-item-secondary" href="#">
                        <i className="fa-solid fa-calendar-days fa-xs"></i>
                        CS5610 Sep 11 at 6pm
                    </a>
                </div>
            </div>
        </div>
        <ModuleList />
    </div>
  );
}
export default Home;