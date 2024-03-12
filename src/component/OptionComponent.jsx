import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


const OptionComponent = ({ changeCategory }) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    let category = [
        "sports", "business", "technology", "entertainment", "science"
    ]

    return (
        <div className="options">
            {category.map((categories, index) => {
                    return (
                        <Stack className="StackItem" direction="row" spacing={2}
                         sx={{mb:1,mt:2
                             }}>
                            <Item className="optionItems" key={index} onClick={() => changeCategory(categories)}>{categories}</Item>
                        </Stack>
                    )
                })
            }
        </div>
    )
}

export default OptionComponent