import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

const useFetchData = () => {
    const [tiers, setTiers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tierRes = await axios.get(`${API_BASE_URL}/tiers`);
                const categoryRes = await axios.get(`${API_BASE_URL}/categories`);
                const featureRes = await axios.get(`${API_BASE_URL}/category-features`);

                setTiers(Array.isArray(tierRes.data) ? tierRes.data : []);
                setCategories(Array.isArray(categoryRes.data) ? categoryRes.data : []);
                setFeatures(Array.isArray(featureRes.data) ? featureRes.data : []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { tiers, categories, features, loading };
};

export default useFetchData;
