import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

it("Card renders without crashing", function(){
    render(
        <Card src={TEST_IMAGES[1]['src']} caption={TEST_IMAGES[1]['caption']} currNum={1} totalNum={3}/>
    )
})

it("Matches Snapshot", function(){
    const { asFragment } = render(<Card src={TEST_IMAGES[1]['src']} caption={TEST_IMAGES[1]['caption']} currNum={1} totalNum={3}/>)
    expect(asFragment()).toMatchSnapshot();
})