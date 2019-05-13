import React,{Component} from "react";


class Section extends Component{
    render(){
        const {incomplete,completed,total} = this.props;
        return(
            <div className="flexBoxInline" style={{justifyContent: "space-around"}}>
                <h4 className="heading4">
                    Tasks-To-Do 
                    <span className="tag">{incomplete}</span>
                </h4>
                <h4 className="heading4">
                Finished
                    <span className="tag">{completed}</span>
                </h4>
                <h4 className="heading4">Total
                 <span className="tag" >{total}</span>
                </h4>
            </div>
        )
    }
}

export default Section;