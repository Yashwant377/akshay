const parent = React.createElement("div", {id: "parent"},
   [ React.createElement("div", {id: "chlid"}, [ 
    React.createElement("h1", {}, "hello eveyone..! im in h1 tag"),

    React.createElement("h2", {}, "hello eveyone..! im in h2 tag")
]),
React.createElement("div", {id: "chlid2"}, [ 
    React.createElement("h1", {}, "hello eveyone..! im in h1 tag from 2nd children"),

    React.createElement("h2", {}, "hello eveyone..! im in h2 tag from 2nd children")
 ]),
]);

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);