

function ResultPage({ totalScore }) {
    return (
        <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex justify-center items-center"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 9999,
                fontSize:80
            }}
        >
            TOTAL SCORE: {totalScore}
        </div>
    )
}

export default ResultPage;