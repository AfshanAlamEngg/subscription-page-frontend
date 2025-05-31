import React from "react";
import { CssBaseline, Container, Typography, Box } from "@mui/material";
import FeatureMatrixTable from "./components/FeatureMatrixTable";

const App = () => {
    return (
        <Container>
            <CssBaseline />
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
                <Typography variant="h4" gutterBottom align="center">
                    Subscription Packages
                </Typography>
                <FeatureMatrixTable />
            </Box>
        </Container>
    );
};

export default App;
