import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import DarkFooter from "components/Footers/DarkFooter.js";

function Page() {
    return (
        <>
            <div className="main">
            <div style={{background:"linear-gradient(45deg, black, transparent)" , height:"50px", align:"center"}}>
            <h3 style ={{align:"left", color:"aliceblue"}}>Sample Regex patterns</h3>
            </div>
                <Paper style={{ height: "100%" }} elevation={6}>
                    <br></br>
                    <ul style={{ paddingTop: "3px" }}>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">alphabets withcase sensitive:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/[a-z]+/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">alphabets withcase insensitive:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/[a-z]+/i</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">numbers :{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/[0-9]+/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">special characters:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/[^a-z0-9]+/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">special characters:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/\W+/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">words:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/\w+/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">start Value:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/^./</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">End Value:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/.$/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">digits:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/^[0-9\/\s\-\.\,]+$/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">Strict digits:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/[0-9]+/</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">Alpha numerics:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$/i</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">Alpha numerics with special characters:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/^(?=.*[a-z])(?=.*[0-9]).*$/i</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">Alphabets with special characters:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/^[a-z-.\/!@#$%^&*\(\)\s.~`]+$/i</Typography>
                        </li>
                        <li>
                            <Typography variant="subtitle1" display="inline" color="primary">Digits with special characters:{" "}</Typography>
                            <Typography variant="subtitle2" display="inline" color="secondary">/^[0-9\-\s\.\/!@#$%^&*\(\).~\`]+$/</Typography>
                        </li>
                    </ul>
                </Paper>
            </div>
            <DarkFooter />
        </>
    );
}

export default Page;
