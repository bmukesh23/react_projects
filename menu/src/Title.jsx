const Title = ({ task }) => {
    return (
        <div className="title">
            <h2>{task || 'Default title'}</h2>
            <div className="title-underline"></div>
        </div>
    )
}

export default Title