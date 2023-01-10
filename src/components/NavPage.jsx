

function NavPage(props) {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <p>Page: {props.page }</p>
  
        <div>
          <button
            className="btn btn-primary btn-sm m-3"
            onClick={() => props.setPage(props.page - 1)}
          >
            Page {props.page - 1}
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => props.setPage(props.page + 1)}
          >
            Page {props.page + 1 }
          </button>
        </div>
      </div>
    );
  }

  export default NavPage;