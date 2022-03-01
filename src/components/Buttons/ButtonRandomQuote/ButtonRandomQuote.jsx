function ButtonRandomQuote({ children, newRandomQuote }) {
    return (
        <button className="qa-Button--randomQuote" onClick={newRandomQuote}>
            {children}
        </button>
    );
}

export default ButtonRandomQuote;
