import React, {useState} from "react";

const Tabs = (props) => {
    console.log(props);
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <div>
            <div style={{display: "flex", marginTop:40, marginLeft: 300}}>
                {
                    props.allTabs.map((tab, i)=> {
                        return (
                            <div key={i} onClick={(event) => {setSelectedTab(i);}} style={{paddingTop:10, paddingBottom: 10, paddingLeft:20, paddingRight: 20, marginRight:10, border: "1px solid lightGrey"}}>{tab.label}</div>
                        );
                    })
                }
            </div>
            <div style={{width: 400, height: 150, marginLeft: 300, marginTop: 10, border: "1px solid lightGrey"}}>
                <h2>{props.allTabs[selectedTab].content}</h2>
            </div>
        </div>    
    );    
};

export default Tabs;