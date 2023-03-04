import React from "react";
import {
    Button,
    Card,
    Description,
    HomeWrapper,
    Price,
    Title,
    Value,
} from "../style/Home";

export const Home = () => {
    return (
        <HomeWrapper>
            <Card>
                {/* <img src="" alt="" /> */}
                <Title>Title</Title>
                <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis accusamus suscipit eos veniam esse, dolor iste
                    sint, quisquam natus repellat placeat, vel maiores. Neque
                    magnam at veniam incidunt delectus dignissimos?
                </Description>
                <Value>
                    <Price>$5.55</Price>
                    <Button>Buy</Button>
                </Value>
            </Card>
        </HomeWrapper>
    );
};
