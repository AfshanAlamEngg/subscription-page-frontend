import React from "react";
import useFetchData from "../hooks/useFetchData";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";

const FeatureMatrixTable = () => {
    const { tiers, categories, features, loading } = useFetchData();

    if (loading) return <Typography variant="h6">Loading data...</Typography>;

    return (
        <TableContainer component={Paper}>
            <Table>
                {/* Table Headers */}
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold" }}>Tiers are across / Categories and Features are down below </TableCell>
                        {Array.isArray(tiers) && tiers.map(tier => (
                            <TableCell key={tier.tierId} style={{ fontWeight: "bold" }}>
                                {tier.name}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                    {Array.isArray(categories) && categories.map(category => (
                        <React.Fragment key={category.categoryId}>
                            {/* Category Title Row */}
                            <TableRow>
                                <TableCell colSpan={tiers.length + 1} style={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}>
                                    {category.name}
                                </TableCell>
                            </TableRow>

                            {/* Features Under Each Category */}
                            {Array.isArray(features) && features
                                .filter(feature => feature.categoryId === category.categoryId)
                                .map(feature => (
                                    <TableRow key={feature.featureId}>
                                        <TableCell>{feature.name}</TableCell>
                                        {tiers.map(tier => (
                                            <TableCell key={tier.tierId}>
                                                {feature.tierIds.includes(tier.tierId) ? "✔️ Yes" : "❌ No"}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FeatureMatrixTable;
