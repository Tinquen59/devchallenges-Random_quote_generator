function BlockQuote({ isAllQuotes, quoteText }) {
    return (
        <div
            className={`qa-BlockQuote__container ${
                isAllQuotes && "qa-BlockQuote__container--isAllQuotes"
            }`}
        >
            <blockquote className="qa-BlockQuote__container--quote">
                {quoteText}
            </blockquote>
        </div>
    );
}

export default BlockQuote;
