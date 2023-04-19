import { Typography, Container, Box, Stack, IconButton } from "@mui/material";
import LogoIcono from "@mui/icons-material/StormRounded";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {

    return (
        <footer>
            <Container maxWidth="lg" >
            <Box py={6} display="flex" flexDirection="row" pb={3} alignItems="center">
                <hr />
                <Stack direction="row" justifyContent="space-between" spacing={3} marginLeft={2} marginRight={2} alignItems="baseline">
                    <IconButton component={Link} to="https://es-la.facebook.com">
                        <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton component={Link} to="https://twitter.com/i/flow/login">
                        <TwitterIcon color="primary" to="https://twitter.com/i/flow/login"/>
                    </IconButton>
                    <IconButton component={Link} to="https://www.instagram.com">
                        <InstagramIcon color="primary"/>
                    </IconButton>
                    <IconButton component={Link} to="https://www.youtube.com/?gl=CO&hl=es-419">
                        <YouTubeIcon color="primary"/>
                    </IconButton>
                </Stack>
                <hr />
            </Box>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={3}>
            <LogoIcono color="primary" sx={{fontSize: 50}}/>
            <Typography component="h2" variant="h3"fontSize={30} color="primary">ROGUE GUEAR</Typography>
            </Stack>
        </Container>
    </footer>
    )
}