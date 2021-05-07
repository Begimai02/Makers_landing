import React from 'react';
import './PageTwo.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 275,
      maxHeight: 200,
      minHeight: 200,
      // marginLeft: "30px",
      textAlign: "center",
      color: "rgb(56, 80, 239)",
      background: "rgb(240, 242, 248)",
      fontFamily: 'Montserrat',
      marginBottom: "40px"
    },
    root1: {
      flexGrow: 1,
      margin: "auto",
    },
    title: {
      marginTop: "20px",
      marginBottom: "20px",
      color: "#453F86"
    }
});

const PageTwo = () => {
  const classes = useStyles();
  const pTwo = [
      {id: 1, title: "Быстрее", desc: "В 2 раза быстрее и дешевле чем обычные курсы"},
      {id: 2, title: "Карьерный центр", desc: "Карьерный центр доведет вас до трудоуст-а"},
      {id: 3, title: "Команда", desc: "Вас обучает не один ментор, а целая команда"},
      {id: 4, title: "Обучение в мини группах", desc: "Вас обучает не один ментор, а целая команда"}
  ]

    return (
        <div className="pTwo_outer" id="pros">
          <div className="pTwo_container">
            <div className="pTwo_content">
                <h1 className="pTwo_title">Преимущества Makers Bootcamp:</h1>
            </div>
            <div className="pTwo_cards">

            <Grid container d-flex justify="center" alignItems="center" className={classes.root1}  spacing={2}>
                    {
                      pTwo && pTwo.map(item => (
                        <Grid className={classes.root} key={item.id + "id"}  mb="20" sm={6} xs={12}>
                          <div className="pTwo_card">
                              <h3 className="card_h">{item.title}</h3>
                              <p className="card_p">{item.desc}</p>
                              <div className="go-corner">
                                <div className="go-arrow">
                                  {item.id}
                                </div>
                              </div>
                          </div>
                        </Grid>
                      ))
                    }
            </Grid>
            </div>
          </div>
        </div>
    );
};

export default PageTwo;


// <Card  className={classes.root}>
// <CardContent>
//   <Typography variant="h5" component="h2" className={classes.title}>
//     {item.title}
//   </Typography>
//   <Typography>
//     {item.desc}
//   </Typography>
// </CardContent>
// </Card>

{/* <i class="fas fa-tachometer-alt"></i> fast */}

{/* <i class="fas fa-briefcase"></i> work */}

{/* <i class="fas fa-users"></i> team */}

{/* <i class="fas fa-user-friends"></i> team */}