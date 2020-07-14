import React from 'react';
import {Card, CardBody,CardImg,CardTitle,CardSubtitle,CardText,Button } from "reactstrap";
import UserImages from "../containers/UserImages";
function Homepage({users}) {
    
    return (
        <div>
            <h1>Home Page</h1>
            <ul className="d-flex flex-wrap">
                {users.map(user => (
                    <Card className="w-100 flex-row" key={user.id}>
                        <div className = "w-25">
                            <CardImg top className="w-100" src={user.profileImage} alt="Card image cap"></CardImg>
                            <CardBody>
                            <CardTitle>{user.id}:{user.username}</CardTitle>
                            <CardSubtitle>CardSubtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>See more</Button>
                            </CardBody>
                        </div>
                        <UserImages userId={user.id}></UserImages>
                    </Card>
                ))}
            </ul>
        </div>
    )
}

export default Homepage