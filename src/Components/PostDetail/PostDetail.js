import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        marginLeft: "500px",
        marginTop: "10px",
        border: "1px solid blue",
    },
    media: {
        height: 0,
    },
});

const PostDetail = () => {
    const { exactInformation } = useParams();
    const [information, setInformation] = useState({});
    const [comments, setComments] = useState([]);
    // const [name, email] = comments;
    // console.log(name);
    const { id, title, body } = information;
    //fetch data for getting posts
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${exactInformation}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [])
    //fetch data  for getting comments
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?id=${exactInformation}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


    const classes = useStyles();
    return (
        <div className="post-detail-information">
            {/* <h1>{exactInformation} Yoo</h1>
            <h2>{id}</h2> */}
            {/*using Material ui for getting posts using dynamic route*/}
            <Card className={classes.root}>
                <CardActionArea>

                    <CardContent>
                        <h2 style={{ color: 'Blue', textDecoration: 'underline' }}>DETAILS</h2>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h3>ID: {id}</h3>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h4> Title: {title}</h4>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h4> Body: {body}</h4>
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
            <br />
            {/*getting comments using dynamic route*/}
            <Card className={classes.root}>
           
                <CardActionArea>
                

                    <CardContent>
                      <h2 style={{ color: 'Blue', textDecoration: 'underline' }}>COMMENTS</h2> 
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/2.jpg" />
                    
                        <Typography gutterBottom variant="h5" component="h2">
                            {
                                comments.map(comments =>
                                    <h3>ID: {comments.id}</h3>
                                )

                            }
                        
                        </Typography>

                           
                    <Typography variant="body2" color="textSecondary" component="p" >
                            {
                            comments.map(comments =>
                                <h4>Name: {comments.name}</h4>
                            )
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        {
                            comments.map(comments =>
                                <h4>Email: {comments.email}</h4>
                            )
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        {
                            comments.map(comments =>
                                <h4>Body: {comments.body}</h4>
                            )
                        }
                    </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>



        </div >

    );
};

export default PostDetail;