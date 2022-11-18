import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItems extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover}></img>
                            <footer className="blockquote mb-0">
                                {this.props.book.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}