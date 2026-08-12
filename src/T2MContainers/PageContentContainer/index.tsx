import { React } from "react";
import {PageContentContainerStyle} from "../styles/PageContentContainerStyle";

function PageContentContainer(props) {
    return(
        <PageContentContainerStyle>
            {props.children}
        </PageContentContainerStyle>
    );
}

export default PageContentContainer;
