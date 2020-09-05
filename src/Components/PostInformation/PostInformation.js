import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  './PostInformation.css'
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      marginLeft: "500px",
      marginTop: "20px",
      border: "1px solid gold"
    },
    media: {
      height: 80,
    },
  });

const PostInformation = (props) => {
    const {id, title, body } = props.post;
    const history = useHistory();
    const handleClick = (id) =>{
        const url = `/information/${id}`;
        history.push(url);
    }
    const classes = useStyles();
    //showing post data by destructuring 
    return (
        <div className="post-detail-information">
  
            <h1 style={{color: 'gold', marginLeft: '700px'}}>POST OF RANDOM PEOPLE'S</h1>
            <Card className={classes.root} >
            
                <CardActionArea>
                      
                    <CardContent>
                        
                        <Typography gutterBottom variant="h5" component="h2">
                           <h3>ID: {id}</h3> 
                         </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           <h4> Title: {title}</h4>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           <h4> Body: {body}</h4>
                        </Typography>
                        <Button variant="contained" color="secondary" onClick={() => handleClick(id)}>
                             See Detail
                        </Button>
                       
                        
                                                                    
                    </CardContent>
                     
                    
                  
                </CardActionArea>
                
                       
                
            </Card>
        
            
        </div>

    );
};

export default PostInformation;