import style from "^/styles/Index.module.css";

const IndexPage = () => {
    const rows = new Array(10)
        .fill(undefined)
        .map(() => new Array(10).fill(undefined));

    return (
        <>
            <table className={style.grid}>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((_, index) => (
                            <td key={index} className={style.cell} />
                        ))}
                    </tr>
                ))}
            </table>
        </>
    );
};

export default IndexPage;
