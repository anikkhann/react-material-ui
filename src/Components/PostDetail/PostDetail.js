import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: "700px",
        height: "1000px",
        float: "left",
        margin: "5px",
      backgroundColor: " #ff4dff",
      border: "1px solid #074252"
    },
    media: {
        height: 80,
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
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${exactInformation}`)
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
                        <h2 style={{ color: '#bfff00', textDecoration: 'underline' }}>DETAILS</h2>
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
                      <h2 style={{ color: '#bfff00', textDecoration: 'underline' }}>COMMENTS</h2>
                        <Typography gutterBottom variant="h5" component="h2">
                            {
                                comments.map(comments =>
                                <p style={{color: 'black', fontSize: '14px', fontWeight: 'bold'}}>
                                <img style={{borderRadius: '50%'}} src="https://picsum.photos/40/40" alt=""/>
                                <br/>
                                 ID:{comments.id}
                                 <br/>  Name: {comments.name} 
                                <br/> Email: {comments.email} 
                                <br/> Body: {comments.body}</p>)

                            }      
                        </Typography>   
                    </CardContent>
                   
                </CardActionArea>
            </Card>

        </div >

    );
};

export default PostDetail;