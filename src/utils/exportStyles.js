export const algorithmButtonStyle = {
    border: 'none',
    background: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '5px',
    width:"100%",
    color: "#000"
};

export const flexContainer = {
    display: 'flex'
};

export const btnStyle = {
    margin: '0 10px',
    border: 'none',
    background: 'none',
    borderBottom: '1px #ccc solid',
    color: "#fff"
};

export const inputTime = {
    border: '1px solid #ccc',
    width: '30px',
    padding: '2px 5px',
    fontSize: '10px', 
    borderRadius: '5px',
    marginLeft: '20px'
};

export const btnContainerStyle = {
    position: 'fixed',
    width: '130px',
    background: '#fff',
    top: '25px',
    borderRadius: '5px',
    boxShadow: '0 0 4px rgba(0,0,0,0.5)',
    textAlign: "center"
};

export const mainContainerLL = {
    width: '80%',
    margin: "10px auto"
};

export const flex = {
    flex: "1"
};

export const codeContainer = {
    margin: '40px auto',
    width: '100%'
};

export const comment = {
    color: "#9c9c9c"
};

export const marginParam = (index) => {
    return {
        "--i": index
    }
};

export const speed = 75;

export const llBtnStyle = {
    flex: '1',
    background: "initial",
    padding: '10px 0',
    textTransform: "uppercase"
};

export const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Ensures a maximum of 3 columns
    gridGap: "50px",
    margin: "30px 0",
    "@media (max-width: 900px)": {
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive wrapping below the threshold
    },
};


export const selectElement = {
    padding: "12.5px 10px",
    background: "var(--backgroundColor)",
    color: "#fff"
}

export const width80 = {
    width: "80%",
    margin: '0 auto'
}

export function getStyle(color) {
    return {
        textTransform: "uppercase",
        background: color,
        padding: "10px",
    }
}

export const divStyle = {
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(3, 1fr)"
}

export const showHideNotesBtn = {
    position: "absolute",
    transform: "translateX(-100%)",
    color: "#000"
}