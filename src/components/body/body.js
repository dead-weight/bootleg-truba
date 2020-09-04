import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


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
                        <div style={{width: '100%',
                        display: 'flex',
                        alignItems: 'center'
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
                            <div 
                            className='creatorButtons' 
                            style={{display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                            }}>
                                
                                    <Button>
                                        S
                                    </Button>
                                
                                    <Button>
                                        B
                                    </Button>
                                
                            </div>
                            </Grid>
                        </div>
                        
                    </div>

                    <div className='commentsSection'>

                    </div>
            </Grid>
            <Grid item xs={3} style={{height: '100vh', backgroundColor: 'blue'}}>
                    <div className ='chatBox'>

                    </div>
            </Grid>
        </div>
    </div>
)
}
