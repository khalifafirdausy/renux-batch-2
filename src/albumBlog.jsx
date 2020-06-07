import React from 'react';
import { CardDeck, Card, CardImg, CardBody, 
            CardTitle, CardText, Button, Col } from 'reactstrap';
import gambarku from './gambarku.jpg';

class AlbumBlog extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/* Card */}
                {/* Gambar */}
                {/* Label - Title */}
                {/* Label - Isi */}
                {/* Button */}
                <br></br>
                <br></br>
                <CardDeck>

                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle><b>Ini foto pertama</b></CardTitle>
                            <CardText>Ini isi</CardText>
                            <Button color="info">Edit</Button>{' '}
                            <Button color="danger">Hapus</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle><b>Ini foto kedua</b></CardTitle>
                            <CardText>Ini isi kedua</CardText>
                            <Button color="info">Edit</Button>{' '}
                            <Button color="danger">Hapus</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle><b>Ini foto ketiga</b></CardTitle>
                            <CardText>Ini isi</CardText>
                            <Button color="info">Edit</Button>{' '}
                            <Button color="danger">Hapus</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="3">
                    <Card>
                        <CardImg top width="100%" src={gambarku} />
                        <CardBody>
                            <CardTitle><b>Ini foto keempat</b></CardTitle>
                            <CardText>Ini isi kedua</CardText>
                            <Button color="info">Edit</Button>{' '}
                            <Button color="danger">Hapus</Button>
                        </CardBody>
                    </Card>
                </Col>
                </CardDeck>
            </React.Fragment>
        )
    }
}

export default AlbumBlog