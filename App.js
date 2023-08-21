const parent= React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{id:"h1tag"},"Hii jais chidren"),React.createElement("h2",{id:"h1tag"},"Hiiee jais chidren")]), 
        React.createElement( "div",{id:"child2"},[React.createElement("h1",{id:"h1tag"},"Hii jais chidren"),React.createElement("h2",{id:"h1tag"},"Hiiee jais chidren")]       
    )]
);

const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello Jais Bhai..!"
);

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

