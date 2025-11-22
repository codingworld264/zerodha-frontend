const ImageCard = ({imageUrl, description, title="", imageSize={width:"160px", height:"52px"}}) => {
  return (
      <div className="col-4 p-3">
        {description && (
          <>
            <img src={imageUrl} alt="" style={imageSize}/>
            {title && (<h1 className="fs-3 mb-4">{title}</h1>)}
            <p className="text-small text-muted mt-2" dangerouslySetInnerHTML={{ __html: description }} />
          </>
        )}
      </div>
    );
}

export default ImageCard
