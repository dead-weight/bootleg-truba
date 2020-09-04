import React from 'react'

//material ui
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const message ={
    msg: [
        {from: 'name', text: 'text', time: 'time'} 
    ]
}


export const Body = () =>{
return (
    <div style={{
                backgroundColor: 'grey',
                width: '100vw',
                height: '100vh'
                }}>
        <div>
                <img src='https://i.imgur.com/T5qKEH7.png' style={{
                    display: 'flex',
                    }}></img>
        </div>
        <div style={{display: 'flex', padding: '20px'}}>
            <Grid item xs={8} style={{height: '100vh', backgroundColor: 'red'}}>
                    <div className='videoSection' style={{backgroundColor: 'green'}}>
                        <div className='videoPlayer'>
                            <img src='https://i.imgur.com/KWYlITw.png' style={{width:'100%'}}></img>
                        </div>
                        <div className='videoTitle'>
                            <h5>hashtags</h5>  
                            <h4>Title</h4>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Grid item xs={7}>
                                    <div style={{backgroundColor: 'blue'}}>date</div>
                                    
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={{backgroundColor: 'pink'}}>
                                        l
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={{backgroundColor: 'teal'}}>
                                        d
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={{backgroundColor: 'grey'}}>
                                        S
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={{backgroundColor: 'yellow'}}>
                                        P
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button style={{backgroundColor: 'orange'}}>
                                        O
                                    </Button>
                                </Grid>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            }}>
                                <Grid item xs={9}>
                                    <div 
                                    className='creatorInfo' 
                                    style={{display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                    }}>
                                        <img src='https://i.imgur.com/leErxJR.png'></img>
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            <div style={{backgroundColor:'cornsilk'}}>
                                            булжадь
                                            </div>
                                            <div style={{backgroundColor: 'khaki'}}>
                                            цифры 
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                <div>
                                    <div 
                                    className='creatorButtons' 
                                    style={{display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                    }}>
                                        
                                            <Button style={{backgroundColor:'lavender'}}>
                                                S
                                            </Button>
                                        
                                            <Button style={{backgroundColor:'lavenderblush'}}>
                                                B
                                            </Button>
                                        
                                    </div>
                                    </div>
                                </Grid>
                                
                            </div>
                            <div style={{maxWidth: '100%'}}>
                                DESCTIPTION
                                <h4 style={{overflowWrap: 'break-word'}}>Pepegapepepgoegsgisfgp[sdfbhopsdfgnjswproejigsdfpoigvbkhnrtgpiojsdfbnrtjgin[asdinbhpotihgzikjvsoitnmboisnfj</h4>
                            </div>
                        
                        </div>
                    </div>
                    <div className='commentsSection' style={{display: 'flex',
                                    justifyContent: 'flex-start',
                                    backgroundColor:'orange',
                                    flexDirection: 'column',
                                    }}>
                        <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center'}}> 
                            <div>1337 comments</div>
                            <Button style={{backgroundColor: 'orangered'}}> Options</Button>
                        </div>

                        <div style={{display: 'flex',flexDirection: 'row'}}>              
                            <img src='https://i.imgur.com/a87Xop7.png'></img>
                            <TextField id="standard-basic" label="Standard" fullWidth='true'/>
                        </div> 

                        <div>
                            <List>
                            <ListItem>text</ListItem>      
                            </List>
                        </div> 
                    </div>
            </Grid>

            <Grid item xs={3} style={{height: '100vh', backgroundColor: 'blue'}}>
                    <div className ='chatBox'>
                        <List>
                            <ListItem>
                                pepe 
                            </ListItem>
                            <ListItem>
                                pepe 
                            </ListItem>
                            <ListItem>
                                pepe 
                            </ListItem>
                        </List>
                    </div>
            </Grid>
        </div>
    </div>
)
}
