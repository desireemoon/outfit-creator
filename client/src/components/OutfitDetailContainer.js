import React from 'react';
import Axios from 'axios';

const OutfitDetailContainer = (props) => {
    async function handleDelete() {
        // UPDATE URL WHEN FINISHED
        let deleted = await Axios.delete(`${props.outfit.id}`)
        console.log(deleted)
        if (deleted) {
            <Redirect to={'/outfits'}/>
        }
    }
    return(
        <div className="outfit-container">
            {/* THIS HAS TO BE ADJUSTED TO RENDER MORE ARTICLE ATTRIBUTES WHEN BACKEND IS DONE */}
            {props.outfit.Article.map(article => (
                <div key={article.id} className="outfit-details-article-container">
                    <div>{article.name}</div>
                    <div>{article.creator}</div>
                    <div>{article.url}</div>
                    <div>{article.imageUrl}</div>
                </div>
            ))}
            <div className="buttons">
                <Link to={`/outfits`}><button className="back" type="button">Back</button></Link>
                <button className="edit" type="button" onClick={props.onClickEdit}>Edit</button>
                <button className="delete" type="button" onClick={this.handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default OutfitDetailContainer;