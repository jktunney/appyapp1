Featurelist = React.createClass({
    features: [
        {
            icon: "fa fa-image fa-2x",
            bigtext: "Find free group fitness activities",
            littletext: "right in your own backyard"
        },
        {
            icon: "fa fa-share fa-2x",
            bigtext: "Create new free workouts",
            littletext: "Coordinate social activities"
        },
        {
            icon: "fa fa-level-up fa-2x",
            bigtext: "Become a leader",
            littletext: "have your workouts featured"
        }
    ],
    render(){
        var rows = this.features.map(function (feature) {
            return (
                <li key={feature.icon}>
                    <h3 className="btn-btn-lg">
                        <i className={feature.icon}></i>
                                <span>
                                    <strong> {feature.bigtext}</strong>
                                    <small> {feature.littletext}</small>
                                </span>
                    </h3>

                </li>
            )
        });
        return (
            <div>
                <h2 className="col-md-11 featurelist hidden-xs">
                    Find and create free group fitness with GiveFit
                </h2>
                <ul className="ds-btn hidden-xs">
                    {rows}
                </ul>
            </div>
        )
    }
});