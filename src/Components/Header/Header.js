import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar , Typography}  from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    anchor: {
        textdecoration: "none",
        color: "white",
        margin: "0px 20px",
        fontsize: "17px",
    },

}));





const Header = () => {
    const  classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar> 
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Social Buddy
                </Typography>
                <Link to="/" className={classes.anchor}>
                    Home
                </Link>
                <Link to="/Posts" className={classes.anchor}>
                    Posts
                </Link>
                </Toolbar>
            </AppBar>
            
        </div>
    );
};

export default Header;