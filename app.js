
class ReactContainer extends React.Component {

    render() {
        return (
            <div>
                Hello! Welcome to Kalvium
                <div>Let's Rock and Roll - This is babel</div>
            </div>
        );
    }
}

const container = document.getElementById("react-container");

ReactDOM.render(<ReactContainer />, container);
