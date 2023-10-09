import {Box, Button, Typography} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {selectCategories} from "./categorySlice";
import {Link} from "react-router-dom";

export const CategoryList = () => {
    const categories = useAppSelector(selectCategories)
    return (
        <Box maxWidth="lg" sx={{mt:4, mb:4, }}>
            <Box display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/categories/create"
                    style={{marginBottom: "1rem"}}
                >

                </Button>
            </Box>
                {
                    categories.map((category) => (
                        <Typography key={category.id}>
                            {category.name}
                        </Typography>
                    ))
                }

        </Box>
    )
};