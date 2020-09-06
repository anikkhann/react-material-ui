import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  './PostInformation.css'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      //maxWidth: 400,
      width: "400px",
      height: "320px",
      float: "left",
      margin: "5px",
    //    marginLeft: "400px",
    //    marginRight: "400px",
    //    marginTop: "10px",
     
      backgroundColor: "#809fff",
      border: "1px solid #074252"
    },
    media: {
      height: 80,
    },
  });

const PostInformation = (props) => {
    const {userId, id, title, body } = props.post;
    const history = useHistory();
    const handleClick = (userId) =>{
        const url = `/information/${userId}`;
        history.push(url);
    }
    const classes = useStyles();
    //showing post data by destructuring 
    return (
        
        <div className="post-detail-information">
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
                        <Button variant="contained" color="secondary" onClick={() => handleClick(userId)}>
                             See Detail
                        </Button>
                                                                      
                    </CardContent>
                         
                </CardActionArea>
                
                       
                
            </Card>
        </div>

        

    );
};

export default PostInformation;