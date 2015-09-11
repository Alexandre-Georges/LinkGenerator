var LinkA = React.createClass({
    render: function() {
        if (!this.props.url) {
            return (
                <div className="row">
                    &nbsp;
                </div>
            );
        }
        return (
            <div className="row">
                <a className="link" href={this.props.url}>{this.props.url.slice(0, Math.min(this.props.url.length, 12))}</a>
            </div>
        );
    }
});

var LinkBox = React.createClass({
    getInitialState: function() {
        return { href: null };
    },
    render: function() {
        return (
            <div className="link-box">
                <div className="row">&nbsp;</div>
                <div className="row">
                    <input type="url" ref="url" placeholder="URL to display" onChange={this.handleURL} />
                </div>
                <div className="row">&nbsp;</div>
                <LinkA url={this.state.url} />
                <div className="rest">&nbsp;</div>
            </div>
        );
    },
    handleURL: function () {
        this.setState({ url: React.findDOMNode(this.refs.url).value.trim() });
        return;
    }
});
React.render(
    <LinkBox />,
    document.getElementById('content')
);