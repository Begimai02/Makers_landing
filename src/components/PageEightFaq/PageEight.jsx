import React from 'react';
import './PageEight.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root3: {
      width: '80%',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Montserrat'
    },
    heading: {
      fontWeight: theme.typography.fontWeightRegular,
      padding: '10px',
      textAlign: 'center',
      fontFamily: 'Montserrat',
    },
    body: {
        fontFamily: 'Montserrat',
        fontSize: '14px'
    },
    acc: {
        borderRadius: '6px'
    },
    more: {
        color: 'rgb(146, 90, 246)'
    }
}));

const PageEight = () => {
    const classes = useStyles();

    const faq = [
        {title: "Lists are a great communication tool", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse?"},
        {title: "They don't require as much focus and concentration as full paragraphs", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse?"},
        {title: "They are much easier to scan", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse?"},
        {title: " In a way, they're much closer to bursts of real speech", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse?"},
        {title: "Use lists when you believe that your readers don't have much time and can't really focus and read", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse?"},
        {title: "Okay, that's the end of the list", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse?"}
    ]

    return (
        <div className={classes.root3}>
            <div className="pEight_outer">
                <h1 className="pEight_title">FAQ</h1>

                <Accordion className={classes.acc}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.more} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading} >Lists are a great communication tool</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.acc}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.more} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>They don't require as much focus and concentration as full paragraphs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion  className={classes.acc}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.more} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography className={classes.heading}>They don't require as much focus and concentration as full paragraphs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>
    );
};

export default PageEight;