import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function ButtonBig({ moreClassName, viewAllQuotes, author, genre }) {
    return (
        <button
            className={`qa-Button--big ${moreClassName}`}
            onClick={viewAllQuotes}
        >
            <div>
                <span className="qa-ButtonBig--quoteAuthor">{author}</span>
                <span className="qa-ButtonBig--quoteGenre">{genre}</span>
            </div>

            <FontAwesomeIcon
                className="qa-ButtonBig--rightArrow"
                icon={faRightLong}
            />
        </button>
    );
}

export default ButtonBig;
