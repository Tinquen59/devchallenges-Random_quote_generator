import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { getRequest } from "../../utils/callAPI";

import ButtonRandomQuote from "../../components/Buttons/ButtonRandomQuote/ButtonRandomQuote";
import BlockQuote from "../../components/BlockQuote/BlockQuote";
import ButtonBig from "../../components/Buttons/ButtonBig/ButtonBig";
import Loader from "../../components/Loader/Loader";

const QUOTE_LIMIT = 3;

const defaultQuoteInformations = {
    author: "",
    genre: "",
};

function Home() {
    const [isAllQuotes, setIsAllQuotes] = useState(false);
    const [quotes, setQuotes] = useState([]);
    const [quoteInformations, setQuoteInformations] = useState(
        defaultQuoteInformations
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getManyQuoteAboutAuthor = async () => {
        setIsLoading(true);

        try {
            const response = await getRequest(
                `quotes?author${quoteInformations.author}&limit=${QUOTE_LIMIT}`
            );

            setQuotes(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const getRandomQuote = async () => {
        setIsLoading(true);
        try {
            const response = await getRequest("quotes/random");

            const { data } = response.data;

            setQuotes(data);
            setQuoteInformations({
                author: data[0].quoteAuthor,
                genre: data[0].quoteGenre,
            });
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const getNewRandomQuote = () => {
        getRandomQuote();
        setIsAllQuotes(false);
    };

    const viewAllQuotes = () => {
        getManyQuoteAboutAuthor();

        setIsAllQuotes(true);
    };

    useEffect(() => {
        getRandomQuote();
    }, []);

    if (error) return <div>Oups une erreur est survenue</div>;

    return (
        <section className="qa-Quote__container">
            <div className="qa-Quote__header">
                <ButtonRandomQuote newRandomQuote={getNewRandomQuote}>
                    <span>random</span>{" "}
                    <FontAwesomeIcon
                        className="qa-Icon--rotate"
                        icon={faRotate}
                    />
                </ButtonRandomQuote>
            </div>

            {isLoading ? (
                <Loader />
            ) : (
                <div
                    className={`qa-Quote__body && ${
                        isAllQuotes && "qa-Quote__body--isAllQuotes"
                    }`}
                >
                    {isAllQuotes && (
                        <div className="qa-Quote__isAllQuotes">
                            <h1 className="qa-Quote__isAllQuotes--author">
                                {quoteInformations.author}
                            </h1>
                        </div>
                    )}

                    {quotes.map(({ _id, quoteText }) => (
                        <BlockQuote
                            isAllQuotes={isAllQuotes}
                            quoteText={quoteText}
                            key={_id}
                        />
                    ))}

                    {!isAllQuotes && (
                        <ButtonBig
                            moreClassName="qa-ButtonBig__container"
                            isAllQuotes={isAllQuotes}
                            viewAllQuotes={viewAllQuotes}
                            author={quoteInformations.author}
                            genre={quoteInformations.genre}
                        />
                    )}
                </div>
            )}
        </section>
    );
}

export default Home;
