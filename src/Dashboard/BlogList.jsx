const BlogList = (props) => {
    const {blogs, handleDelete} = props;
    return (
        <div className="todo_div">
            {blogs.map((item, idx) => (
                <div className="item_div" key={idx}>
                    <h1 className="text">{`${item.type}`}</h1>
                    <button className="btn" onClick={ () => handleDelete(item?.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;